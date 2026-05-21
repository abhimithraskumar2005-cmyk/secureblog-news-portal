# SecureBlog Backend

Node.js and Express API for the SecureBlog Blog/News Portal.

## Day 2 Scope

- Express server setup
- `/health` endpoint
- Environment variable configuration
- PostgreSQL connection configuration
- Security baseline with Helmet, CORS, JSON limits, and API rate limiting

## Local Setup

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

Health check:

```text
http://localhost:3000/health
```

Expected response:

```json
{
  "success": true,
  "service": "secureblog-api",
  "status": "healthy"
}
```

