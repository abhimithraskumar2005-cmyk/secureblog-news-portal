# Day 5: Blog Post CRUD APIs

## Goal

Implement the required CRUD feature using blog/news posts.

## Completed Work

- User can create a post
- User can view own posts
- User can update own posts
- User can delete own posts
- Public users can view published posts
- Admin can view all posts
- Admin can publish or reject posts

## API Routes

```text
GET    /api/posts/public
POST   /api/posts
GET    /api/posts/mine
PATCH  /api/posts/:id
DELETE /api/posts/:id
GET    /api/posts/admin/all
PATCH  /api/posts/admin/:id/status
```

## Screenshots to Capture

- Post controller code
- Post routes code
- Post model code showing parameterized SQL
- Post validator code
- Database schema showing posts table
- Create post API success
- View my posts API success
- Update post API success
- Admin view all posts success
- Admin publish post success
- Public posts API showing published post
- Delete post API success
- Day 5 GitHub commit history

