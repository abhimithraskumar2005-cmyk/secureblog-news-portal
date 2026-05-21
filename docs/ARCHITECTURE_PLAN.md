# Architecture Plan

## Proposed Architecture

```text
User Browser
  |
  | HTTPS
  v
Domain Name
  |
  v
Route 53 / DNS
  |
  v
Application Load Balancer
  |
  v
EC2 Instance running Nginx Reverse Proxy
  |
  v
Dockerized SecureBlog Node.js Application
  |
  v
RDS Database in Private Subnet
```

## AWS Components

- VPC
- Public subnets
- Private subnets
- Internet Gateway
- NAT Gateway
- Route tables
- EC2
- Application Load Balancer
- Target group
- RDS database
- Route 53 or external DNS
- AWS Certificate Manager or Let's Encrypt
- CloudWatch

## Security Design

- HTTPS enabled
- HTTP redirected to HTTPS
- Passwords hashed using bcrypt
- JWT authentication
- Role-based access control
- Input validation
- SQL injection prevention
- XSS protection
- API rate limiting
- Firewall rules using UFW/security groups
- Database kept private
