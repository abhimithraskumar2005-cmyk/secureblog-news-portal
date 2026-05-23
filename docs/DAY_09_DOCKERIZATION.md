# Day 9: Dockerization

## Goal

Dockerize the SecureBlog backend and frontend so the application can run consistently in local, Linux, and cloud environments.

## Completed Work

- Added backend Dockerfile
- Added frontend Dockerfile
- Added Docker Compose file
- Added `.dockerignore`
- Added Docker deployment guide

## Docker Files

```text
backend/Dockerfile
frontend/Dockerfile
docker-compose.yml
.dockerignore
deployment/DOCKER_DEPLOYMENT.md
```

## Commands

Build and run:

```bash
docker compose up --build
```

Run in background:

```bash
docker compose up -d --build
```

Check containers:

```bash
docker ps
```

Stop:

```bash
docker compose down
```

## Screenshots to Capture

- Docker Desktop running
- `backend/Dockerfile`
- `frontend/Dockerfile`
- `docker-compose.yml`
- `.dockerignore`
- `docker compose up --build` success
- `docker ps` showing frontend and backend containers
- Backend `/health` working from Docker
- Frontend working from Docker
- Docker documentation in GitHub
- Day 9 commit history

