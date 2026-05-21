# Day 7: Full Local Testing

## Goal

Test the complete SecureBlog application locally before moving to security hardening, Docker, and AWS deployment.

## Test Scope

- Backend health check
- Frontend loading
- User registration
- User login
- User creates blog/news post
- User views own posts
- User edits post
- Admin registration/login
- Admin views all posts
- Admin publishes post
- Public users view published post
- Role-based access checks
- Error handling for invalid login

## Required Local URLs

Backend:

```text
http://localhost:3000/health
```

Frontend:

```text
http://localhost:5173
```

## Pass Criteria

- Backend health endpoint returns `success: true`
- Frontend loads without errors
- User can register/login
- User can create, view, edit, and delete posts
- Admin can approve/publish posts
- Published post appears in public section
- Invalid login is rejected
- User cannot access admin-only routes

## Screenshots to Capture

- Backend server running
- Frontend server running
- Backend `/health` response
- Frontend homepage
- User registration/login
- User dashboard
- Create post success
- Edit post success
- Admin dashboard
- Admin publish action
- Public published post
- Invalid login error
- Day 7 GitHub commit history

