const crypto = require("crypto");

const users = [];
const loginLogs = [];
const posts = [];

function createId() {
  return crypto.randomUUID();
}

module.exports = {
  users,
  loginLogs,
  posts,
  createId
};
