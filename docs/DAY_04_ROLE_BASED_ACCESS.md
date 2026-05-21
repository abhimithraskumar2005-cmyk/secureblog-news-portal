# Day 4: Role-Based Access Control

## Goal

Make role-based access control testable with protected user and admin routes.

## Completed Work

- Added JWT-protected user route
- Added admin-only route
- Used authentication middleware
- Used admin authorization middleware
- Added API responses for access success and access denied

## Test Routes

Protected user route:

```text
GET http://localhost:3000/api/user/profile
```

Admin-only route:

```text
GET http://localhost:3000/api/admin/dashboard
```

## Expected Results

- Request without token should return `401`
- User token should access `/api/user/profile`
- User token should be blocked from `/api/admin/dashboard` with `403`
- Admin token should access `/api/admin/dashboard`

## Screenshots to Capture

- `auth.middleware.js` showing JWT verification and admin role check
- `protected.routes.js` showing user and admin routes
- User profile API success response
- Admin dashboard API success response
- User blocked from admin route
- Request without token blocked
- Day 4 GitHub commit history

