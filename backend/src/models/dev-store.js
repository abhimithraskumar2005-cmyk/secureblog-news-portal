const crypto = require("crypto");

const users = [];
const loginLogs = [];

function createId() {
  return crypto.randomUUID();
}

module.exports = {
  users,
  loginLogs,
  createId
};
