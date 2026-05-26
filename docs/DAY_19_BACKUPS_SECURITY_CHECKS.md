# Day 19 - Backups and Final Security Checks

## Goal

Verify backup configuration and collect final security evidence for the
SecureBlog cloud deployment.

## Backup Components

- RDS automated backups.
- RDS snapshot planning.
- Application source code backup through GitHub.
- Docker image rebuild capability through Dockerfiles and Docker Compose.
- Documentation and screenshot backup inside the repository.

## Security Checks

- EC2 security group allows only required inbound traffic.
- Database security group allows PostgreSQL only from the EC2/application
  security group.
- ALB security group allows public HTTP/HTTPS traffic.
- UFW firewall is enabled on the EC2 server.
- Nginx reverse proxy configuration is valid.
- Docker containers are running as expected.
- Application uses password hashing, JWT authentication, RBAC, rate limiting,
  validation, and security headers.

## Useful Commands

Check firewall status:

```bash
sudo ufw status
```

Check Nginx configuration:

```bash
sudo nginx -t
```

Check running containers:

```bash
sudo docker ps
```

Check disk and memory:

```bash
df -h
free -m
```

## AWS Evidence

Capture screenshots for:

- RDS automated backups.
- RDS manual snapshot page.
- EC2 security group inbound rules.
- ALB security group inbound rules.
- Database security group inbound rules.
- EC2 instance monitoring.
- Target group healthy status.

## Result

SecureBlog has backup evidence, recovery planning, and final security
verification. This supports the DevSecOps requirements for secure deployment,
monitoring, firewalling, and backup readiness.
