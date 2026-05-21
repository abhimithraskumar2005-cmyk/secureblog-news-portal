const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const loginLogModel = require("../models/login-log.model");
const { env } = require("../config/env");
const {
  loginSchema,
  registerSchema
} = require("../validators/auth.validator");

function createToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn }
  );
}

async function register(req, res, next) {
  try {
    const { error, value } = registerSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid registration data",
        details: error.details.map((detail) => detail.message)
      });
    }

    const existingUser = await userModel.findByEmail(value.email);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered"
      });
    }

    const passwordHash = await bcrypt.hash(value.password, 12);
    const user = await userModel.createUser({
      name: value.name,
      email: value.email,
      passwordHash,
      role: value.role || "user"
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user
    });
  } catch (error) {
    return next(error);
  }
}

async function login(req, res, next) {
  try {
    const { error, value } = loginSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid login data",
        details: error.details.map((detail) => detail.message)
      });
    }

    const user = await userModel.findByEmail(value.email);
    const isPasswordValid = user
      ? await bcrypt.compare(value.password, user.password_hash)
      : false;

    if (!user || !isPasswordValid) {
      await loginLogModel.createLoginLog({
        email: value.email,
        status: "failed",
        ipAddress: req.ip
      });

      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    await loginLogModel.createLoginLog({
      email: value.email,
      status: "success",
      ipAddress: req.ip
    });

    const token = createToken(user);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: userModel.toSafeUser(user)
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  register,
  login
};
