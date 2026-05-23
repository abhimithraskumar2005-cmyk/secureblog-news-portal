# Day 8: Security Hardening

## Goal

Strengthen and document the security features required for the SecureBlog capstone project.

## Security Features Covered

- Password hashing using bcrypt
- JWT authentication
- Role-Based Access Control
- Login rate limiting
- Input validation using Joi
- SQL injection prevention using parameterized queries
- XSS protection through validation and security headers
- Security headers using Helmet
- HSTS configuration
- Login failure tracking

## Evidence Files

- `backend/src/controllers/auth.controller.js`
- `backend/src/middleware/auth.middleware.js`
- `backend/src/routes/auth.routes.js`
- `backend/src/validators/auth.validator.js`
- `backend/src/validators/post.validator.js`
- `backend/src/models/user.model.js`
- `backend/src/models/post.model.js`
- `backend/src/models/login-log.model.js`
- `backend/src/app.js`

## Screenshots to Capture

- bcrypt hashing code
- JWT generation code
- JWT verification middleware
- Admin-only RBAC middleware
- Login rate limiting code
- Joi validation code
- Parameterized SQL queries
- Helmet security headers configuration
- Failed login response
- User blocked from admin route
- Successful admin route access

