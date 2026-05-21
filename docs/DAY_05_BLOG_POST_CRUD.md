# Day 5: Blog/News Post CRUD

## Goal

Implement the main CRUD feature for the Blog/News Portal.

## Completed Work

- Users can create posts
- Users can view their own posts
- Users can update their own posts
- Users can delete their own posts
- Public users can view published posts
- Admin can view all posts
- Admin can approve or reject posts
- Input validation added for post data
- Parameterized SQL queries used for database safety

## API Routes

Public route:

```text
GET /api/posts/public
```

User routes:

```text
POST /api/posts
GET /api/posts/mine
PATCH /api/posts/:id
DELETE /api/posts/:id
```

Admin routes:

```text
GET /api/posts/admin/all
PATCH /api/posts/admin/:id/status
```

## Screenshot Evidence

- `post.routes.js` showing CRUD and admin routes
- `post.controller.js` showing create/read/update/delete functions
- `post.model.js` showing parameterized SQL queries
- `post.validator.js` showing input validation
- `schema.sql` showing `posts` table
- API response for create post
- API response for view own posts
- API response for update post
- API response for admin view all posts
- API response for admin publish post
- API response for public published posts
- API response for delete post

