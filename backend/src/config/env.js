require("dotenv").config();

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 3000),
  databaseUrl: process.env.DATABASE_URL || "",
  jwtSecret: process.env.JWT_SECRET || "development_only_secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1h",
  allowedOrigin: process.env.ALLOWED_ORIGIN || "http://localhost:5173"
};

module.exports = { env };
