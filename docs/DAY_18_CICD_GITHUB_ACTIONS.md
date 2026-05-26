# Day 18 - CI/CD with GitHub Actions

## Goal

Add a CI/CD pipeline to automatically validate the SecureBlog source code when
changes are pushed to GitHub.

## CI/CD Tool

```text
GitHub Actions
```

## Workflow File

```text
.github/workflows/ci.yml
```

## Pipeline Stages

- Checkout source code from GitHub.
- Set up Node.js runtime.
- Install backend dependencies.
- Run backend test command.
- Install frontend dependencies.
- Validate Docker Compose configuration.
- Build backend and frontend Docker images.

## Trigger

The workflow runs automatically on:

```text
push to main
pull request to main
```

## Deployment Automation Plan

The current workflow validates and builds the application. In a production
environment, the next stage can deploy to EC2 by using GitHub repository secrets:

```text
EC2_HOST
EC2_USERNAME
EC2_SSH_KEY
```

The deployment job would SSH into EC2, pull the latest code, rebuild Docker
containers, and restart the application using Docker Compose.

## Evidence to Capture

- GitHub Actions workflow file in the repository.
- Actions tab showing the workflow run.
- Successful pipeline stages.
- Docker build logs inside the GitHub Actions run.
- Commit history showing the CI/CD workflow commit.

## Result

SecureBlog now includes a CI/CD pipeline that automatically checks the code and
validates Docker builds. This satisfies the DevOps and automation requirement
for the capstone project.
