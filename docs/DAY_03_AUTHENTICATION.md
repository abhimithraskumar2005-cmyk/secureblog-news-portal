# Day 3: Registration and Login

## Goal

Implement user registration and login with strong password hashing and JWT authentication.

## Completed Work

- Added `/api/auth/register`
- Added `/api/auth/login`
- Added bcrypt password hashing
- Added JWT token generation
- Added login validation using Joi
- Added failed/success login logging
- Added login rate limiting
- Added authentication and admin middleware
- Added SQL schema for `users` and `login_logs`

## Test Commands

Start backend:

```bash
cd backend
npm run dev
```

Register user:

```bash
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d "{\"name\":\"Test User\",\"email\":\"user@example.com\",\"password\":\"Password123\"}"
```

Login user:

```bash
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"user@example.com\",\"password\":\"Password123\"}"
```

Register admin:

```bash
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d "{\"name\":\"Admin User\",\"email\":\"admin@example.com\",\"password\":\"AdminPass123\",\"role\":\"admin\"}"
```

## Screenshots to Capture

- Auth route file
- Auth controller file showing bcrypt and JWT
- Auth validator file
- Auth middleware file showing JWT verification and admin role check
- Register API success response
- Login API success response with JWT token
- Failed login response
- Login rate limiting code
- Day 3 GitHub commit history

