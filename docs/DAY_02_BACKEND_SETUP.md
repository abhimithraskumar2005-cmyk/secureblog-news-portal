# Day 2: Backend Setup

## Goal

Create the backend foundation for SecureBlog using Node.js and Express.

## Completed/Planned Work

- Create backend project structure
- Add Express application entry point
- Add `/health` API endpoint
- Add environment variable file example
- Add PostgreSQL database configuration
- Add basic security middleware:
  - Helmet
  - CORS
  - JSON body size limit
  - API rate limiting

## Backend Folder Structure

```text
backend/
  src/
    config/
    controllers/
    middleware/
    models/
    routes/
    utils/
    validators/
    app.js
    server.js
  .env.example
  package.json
  README.md
```

## Commands

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

## Health Check URL

```text
http://localhost:3000/health
```

## Screenshots to Capture

- Backend folder structure
- `package.json`
- `.env.example`
- `src/server.js`
- `src/app.js`
- `src/routes/health.routes.js`
- Terminal showing `npm install`
- Terminal showing backend server running
- Browser/Postman showing `/health` response

