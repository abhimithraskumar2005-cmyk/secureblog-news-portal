const express = require("express");
const { checkDatabaseConnection } = require("../config/database");

const router = express.Router();

router.get("/", async (req, res) => {
  const response = {
    success: true,
    service: "secureblog-api",
    status: "healthy",
    timestamp: new Date().toISOString()
  };

  if (process.env.DATABASE_URL) {
    try {
      const database = await checkDatabaseConnection();
      response.database = {
        status: "connected",
        checkedAt: database.current_time
      };
    } catch (error) {
      response.database = {
        status: "not_connected"
      };
    }
  }

  res.status(200).json(response);
});

module.exports = router;
