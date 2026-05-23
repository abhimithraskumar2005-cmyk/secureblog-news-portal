# Docker Deployment Guide

## Goal

Run SecureBlog using Docker containers for DevOps and deployment readiness.

## Containers

- `secureblog-backend`: Node.js Express API on port `3000`
- `secureblog-frontend`: Static frontend server on port `5173`

## Local Docker Commands

Build and run:

```bash
docker compose up --build
```

Run in background:

```bash
docker compose up -d --build
```

View running containers:

```bash
docker ps
```

Stop containers:

```bash
docker compose down
```

## Test URLs

Backend:

```text
http://localhost:3000/health
```

Frontend:

```text
http://localhost:5173
```

## Production Notes

- Replace `JWT_SECRET` before deployment.
- Use AWS RDS database URL in `DATABASE_URL`.
- Put Nginx or ALB in front of the containers.
- Use HTTPS in production.

