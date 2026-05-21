const { pool } = require("../config/database");
const { env } = require("../config/env");
const devStore = require("./dev-store");

function toPublicPost(post) {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    category: post.category,
    status: post.status,
    author_id: post.author_id,
    created_at: post.created_at,
    updated_at: post.updated_at
  };
}

function ensurePostStore() {
  if (!devStore.posts) {
    devStore.posts = [];
  }
}

async function createPost({ title, content, category, authorId }) {
  if (!env.databaseUrl) {
    ensurePostStore();
    const now = new Date().toISOString();
    const post = {
      id: devStore.createId(),
      title,
      content,
      category,
      status: "pending",
      author_id: authorId,
      created_at: now,
      updated_at: now
    };
    devStore.posts.push(post);
    return toPublicPost(post);
  }

  const result = await pool.query(
    `INSERT INTO posts (title, content, category, status, author_id)
     VALUES ($1, $2, $3, 'pending', $4)
     RETURNING id, title, content, category, status, author_id, created_at, updated_at`,
    [title, content, category, authorId]
  );

  return result.rows[0];
}

async function findPublishedPosts() {
  if (!env.databaseUrl) {
    ensurePostStore();
    return devStore.posts
      .filter((post) => post.status === "published")
      .map(toPublicPost);
  }

  const result = await pool.query(
    `SELECT id, title, content, category, status, author_id, created_at, updated_at
     FROM posts
     WHERE status = 'published'
     ORDER BY created_at DESC`
  );
  return result.rows;
}

async function findPostsByAuthor(authorId) {
  if (!env.databaseUrl) {
    ensurePostStore();
    return devStore.posts
      .filter((post) => post.author_id === authorId)
      .map(toPublicPost);
  }

  const result = await pool.query(
    `SELECT id, title, content, category, status, author_id, created_at, updated_at
     FROM posts
     WHERE author_id = $1
     ORDER BY created_at DESC`,
    [authorId]
  );
  return result.rows;
}

async function findAllPosts() {
  if (!env.databaseUrl) {
    ensurePostStore();
    return devStore.posts.map(toPublicPost);
  }

  const result = await pool.query(
    `SELECT id, title, content, category, status, author_id, created_at, updated_at
     FROM posts
     ORDER BY created_at DESC`
  );
  return result.rows;
}

async function updatePostByAuthor(id, authorId, updates) {
  if (!env.databaseUrl) {
    ensurePostStore();
    const post = devStore.posts.find(
      (item) => item.id === id && item.author_id === authorId
    );

    if (!post) {
      return null;
    }

    post.title = updates.title ?? post.title;
    post.content = updates.content ?? post.content;
    post.category = updates.category ?? post.category;
    post.status = "pending";
    post.updated_at = new Date().toISOString();
    return toPublicPost(post);
  }

  const result = await pool.query(
    `UPDATE posts
     SET title = COALESCE($1, title),
         content = COALESCE($2, content),
         category = COALESCE($3, category),
         status = 'pending',
         updated_at = NOW()
     WHERE id = $4 AND author_id = $5
     RETURNING id, title, content, category, status, author_id, created_at, updated_at`,
    [updates.title, updates.content, updates.category, id, authorId]
  );
  return result.rows[0] || null;
}

async function deletePostByAuthor(id, authorId) {
  if (!env.databaseUrl) {
    ensurePostStore();
    const index = devStore.posts.findIndex(
      (item) => item.id === id && item.author_id === authorId
    );

    if (index === -1) {
      return null;
    }

    const [deletedPost] = devStore.posts.splice(index, 1);
    return toPublicPost(deletedPost);
  }

  const result = await pool.query(
    `DELETE FROM posts
     WHERE id = $1 AND author_id = $2
     RETURNING id`,
    [id, authorId]
  );
  return result.rows[0] || null;
}

async function updatePostStatus(id, status) {
  if (!env.databaseUrl) {
    ensurePostStore();
    const post = devStore.posts.find((item) => item.id === id);

    if (!post) {
      return null;
    }

    post.status = status;
    post.updated_at = new Date().toISOString();
    return toPublicPost(post);
  }

  const result = await pool.query(
    `UPDATE posts
     SET status = $1, updated_at = NOW()
     WHERE id = $2
     RETURNING id, title, content, category, status, author_id, created_at, updated_at`,
    [status, id]
  );
  return result.rows[0] || null;
}

module.exports = {
  createPost,
  deletePostByAuthor,
  findAllPosts,
  findPostsByAuthor,
  findPublishedPosts,
  updatePostByAuthor,
  updatePostStatus
};
