const { pool } = require("../config/database");
const { env } = require("../config/env");
const devStore = require("./dev-store");

async function createLoginLog({ email, status, ipAddress }) {
  if (!env.databaseUrl) {
    const loginLog = {
      id: devStore.createId(),
      email,
      status,
      ip_address: ipAddress,
      created_at: new Date().toISOString()
    };
    devStore.loginLogs.push(loginLog);
    return loginLog;
  }

  const result = await pool.query(
    `INSERT INTO login_logs (email, status, ip_address)
     VALUES ($1, $2, $3)
     RETURNING id, email, status, ip_address, created_at`,
    [email, status, ipAddress]
  );

  return result.rows[0];
}

module.exports = {
  createLoginLog
};
