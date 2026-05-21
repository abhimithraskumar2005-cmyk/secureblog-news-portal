const { pool } = require("../config/database");
const { env } = require("../config/env");
const devStore = require("./dev-store");

function toSafeUser(user) {
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    created_at: user.created_at
  };
}

async function findByEmail(email) {
  if (!env.databaseUrl) {
    return devStore.users.find((user) => user.email === email) || null;
  }

  const result = await pool.query(
    "SELECT id, name, email, password_hash, role, created_at FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0] || null;
}

async function createUser({ name, email, passwordHash, role }) {
  if (!env.databaseUrl) {
    const user = {
      id: devStore.createId(),
      name,
      email,
      password_hash: passwordHash,
      role,
      created_at: new Date().toISOString()
    };
    devStore.users.push(user);
    return toSafeUser(user);
  }

  const result = await pool.query(
    `INSERT INTO users (name, email, password_hash, role)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email, role, created_at`,
    [name, email, passwordHash, role]
  );

  return result.rows[0];
}

module.exports = {
  createUser,
  findByEmail,
  toSafeUser
};
