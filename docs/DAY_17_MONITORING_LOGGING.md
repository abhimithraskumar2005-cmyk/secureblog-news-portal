# Day 17 - Monitoring and Logging

## Goal

Set up monitoring and logging evidence for the SecureBlog cloud deployment using
AWS CloudWatch, EC2 metrics, ALB health checks, Docker logs, and application
security events.

## Monitoring Components

- EC2 CPU, network, and status check metrics.
- Application Load Balancer request and target health monitoring.
- Target group health checks for the backend application.
- Docker container logs for backend and frontend services.
- Nginx access/error logs for reverse proxy traffic.
- Failed login tracking in the application.
- CloudWatch alarm planning for high CPU and failed health checks.

## Health Check Endpoints

```text
http://secureblog-alb-2011420602.ap-south-1.elb.amazonaws.com/health
http://secureblog-alb-2011420602.ap-south-1.elb.amazonaws.com/api/posts/public
```

## Useful Linux Commands

Check running containers:

```bash
sudo docker ps
```

View backend logs:

```bash
sudo docker logs secureblog-backend --tail 50
```

View frontend logs:

```bash
sudo docker logs secureblog-frontend --tail 50
```

Check Nginx logs:

```bash
sudo tail -n 50 /var/log/nginx/access.log
sudo tail -n 50 /var/log/nginx/error.log
```

Check server resource usage:

```bash
top
df -h
free -m
```

## CloudWatch Evidence

The project uses AWS CloudWatch and AWS service metrics to monitor:

- EC2 CPU utilization.
- EC2 network traffic.
- EC2 status checks.
- ALB request count.
- ALB target response time.
- Target group healthy host count.
- Target group unhealthy host count.

## Alerting Plan

Recommended CloudWatch alarms:

- EC2 high CPU utilization greater than 70%.
- Target group unhealthy host count greater than 0.
- ALB 5XX errors greater than 5 in 5 minutes.
- Failed login count threshold from application logs.

## Result

SecureBlog has monitoring and logging evidence from AWS and Linux. The project
can demonstrate uptime monitoring, server metrics, container logs, reverse proxy
logs, health checks, and security event tracking.
