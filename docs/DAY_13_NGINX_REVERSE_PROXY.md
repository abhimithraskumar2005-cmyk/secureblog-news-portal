# Day 13: Nginx Reverse Proxy Setup

## Goal

Configure Nginx on the EC2 Ubuntu server to route public HTTP traffic to the SecureBlog frontend and backend services.

## Reverse Proxy Plan

```text
User Browser
  -> EC2 Public IP / Domain
  -> Nginx port 80
  -> Frontend container on localhost:5173
  -> Backend API on localhost:3000
```

## Route Rules

```text
/          -> http://127.0.0.1:5173
/api/      -> http://127.0.0.1:3000/api/
/health    -> http://127.0.0.1:3000/health
```

## EC2 Commands

Copy project to EC2 or clone from GitHub:

```bash
git clone https://github.com/abhimithraskumar2005-cmyk/secureblog-news-portal.git
cd secureblog-news-portal
```

Run Docker containers:

```bash
sudo docker compose up -d --build
sudo docker ps
```

Configure Nginx:

```bash
sudo nano /etc/nginx/sites-available/secureblog
sudo ln -s /etc/nginx/sites-available/secureblog /etc/nginx/sites-enabled/secureblog
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx
```

## Test URLs

```text
http://EC2_PUBLIC_IP/
http://EC2_PUBLIC_IP/health
http://EC2_PUBLIC_IP/api/posts/public
```

## Screenshots to Capture

- GitHub clone or project folder on EC2
- Docker containers running on EC2
- Nginx reverse proxy config
- `sudo nginx -t` successful
- Nginx active/running status
- Browser opening frontend through EC2 public IP
- Browser opening `/health` through Nginx
- Browser/API opening `/api/posts/public` through Nginx

