# Day 11: EC2 Linux Server Setup

## Goal

Launch and configure an Ubuntu EC2 instance for the SecureBlog application.

## EC2 Plan

- Launch Ubuntu EC2 instance
- Place instance inside the SecureBlog VPC
- Use public subnet for simple student deployment
- Attach `secureblog-ec2-sg`
- Connect using SSH
- Update Linux packages
- Install Docker
- Install Docker Compose plugin
- Install Nginx
- Install and configure UFW firewall
- Verify service status

## Recommended EC2 Settings

```text
Name: secureblog-ec2-app-server
AMI: Ubuntu Server LTS
Instance type: t2.micro or t3.micro
VPC: secureblog-vpc
Subnet: secureblog-public-subnet-1
Auto-assign public IP: Enable
Security group: secureblog-ec2-sg
Storage: 20 GiB gp3
```

## Linux Commands

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install nginx docker.io docker-compose-plugin ufw git -y
sudo systemctl enable docker
sudo systemctl start docker
sudo systemctl status docker
sudo systemctl status nginx
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
sudo ufw status
docker --version
docker compose version
```

## Screenshots to Capture

- EC2 launch configuration
- EC2 instance running
- EC2 public IP
- Security group attached to EC2
- Successful SSH login
- `sudo apt update`
- Docker version
- Docker service status
- Nginx service status
- UFW firewall status
- Git installed/version

