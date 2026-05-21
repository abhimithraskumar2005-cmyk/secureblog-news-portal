const express = require("express");
const {
  adminOnly,
  authenticate
} = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/user/profile", authenticate, (req, res) => {
  res.status(200).json({
    success: true,
    message: "User route accessed successfully",
    user: req.user
  });
});

router.get("/admin/dashboard", authenticate, adminOnly, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Admin route accessed successfully",
    admin: req.user
  });
});

module.exports = router;
