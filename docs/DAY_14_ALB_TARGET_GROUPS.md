# Day 14: Application Load Balancer and Target Groups

## Goal

Set up an AWS Application Load Balancer for SecureBlog and route traffic to the EC2 application server using a target group.

## ALB Plan

```text
User Browser
  -> Application Load Balancer
  -> Target Group
  -> EC2 Instance running Nginx
  -> Docker Frontend and Backend
```

## Components

- Application Load Balancer
- Target group
- HTTP listener on port 80
- Health check using `/health`
- EC2 instance registered as target

## Recommended Settings

Load balancer:

```text
Name: secureblog-alb
Type: Application Load Balancer
Scheme: Internet-facing
IP address type: IPv4
VPC: secureblog-vpc
Subnets: secureblog-public-subnet-1, secureblog-public-subnet-2
Security group: secureblog-alb-sg
```

Target group:

```text
Name: secureblog-tg
Target type: Instances
Protocol: HTTP
Port: 80
VPC: secureblog-vpc
Health check path: /health
```

Listener:

```text
HTTP:80 -> forward to secureblog-tg
```

## Security Group Requirement

The EC2 security group must allow HTTP traffic from the ALB security group:

```text
Type: HTTP
Port: 80
Source: secureblog-alb-sg
```

## Test URLs

```text
http://ALB_DNS_NAME/
http://ALB_DNS_NAME/health
http://ALB_DNS_NAME/api/posts/public
```

## Screenshots to Capture

- Target group creation settings
- Health check path `/health`
- EC2 instance registered as target
- Target status healthy
- ALB creation settings
- ALB public subnets selected
- ALB security group selected
- Listener HTTP 80 forwarding to target group
- ALB DNS name
- Browser opening SecureBlog through ALB DNS
- Browser opening `/health` through ALB DNS

