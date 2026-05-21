# Screenshot Checklist for Final Submission

Use this file as your evidence checklist. Screenshots are very important because they prove that each required component was actually implemented.

## 1. Application Screenshots

- Registration page
- Login page
- User dashboard
- Create ticket page
- User ticket list page
- Edit ticket page
- Admin login or admin dashboard
- Admin view of all tickets
- Admin update ticket status
- Admin user management page, if implemented
- Error message for unauthorized access
- Rate limit or failed login message

## 2. GitHub and Source Code Screenshots

- GitHub repository home page
- README file visible in GitHub
- Branches, such as main and develop
- Pull request screenshot, if used
- Commit history screenshot
- Folder structure screenshot
- GitHub Secrets page, without revealing secret values

## 3. Security Implementation Screenshots

- Code showing bcrypt password hashing
- Code showing JWT token generation and validation
- Code showing role-based access middleware
- Code showing input validation
- Code showing SQL injection prevention through ORM or parameterized queries
- Code showing Helmet/security headers
- Code showing rate limiting
- HTTPS browser lock icon
- SSL/TLS certificate details
- HSTS/security headers test result, if available
- Failed login attempts stored in logs or database

## 4. AWS Infrastructure Screenshots

- VPC dashboard
- Public subnets
- Private subnets
- Internet Gateway
- NAT Gateway
- Route tables
- Security groups
- EC2 instance
- RDS database
- Application Load Balancer
- Target group
- Target group health check showing healthy
- Route 53 hosted zone or external DNS records
- ACM certificate or Let's Encrypt certificate

## 5. Linux Administration Screenshots

- EC2 terminal after SSH login
- Docker installed/version
- Nginx installed/status
- UFW firewall status
- Running application containers
- Nginx reverse proxy configuration
- System service status, if used

## 6. Networking and Domain Screenshots

- Domain DNS record pointing to ALB
- ALB listener configuration
- HTTP to HTTPS redirect
- Nginx reverse proxy rules
- Security group inbound and outbound rules
- Private database not publicly accessible

## 7. DevOps and Automation Screenshots

- Dockerfile
- docker-compose.yml, if used
- GitHub Actions workflow file
- Successful GitHub Actions pipeline run
- Deployment logs from GitHub Actions
- App running after automated deployment
- Environment variable/secrets configuration, without exposing values

## 8. Monitoring and Logging Screenshots

- CloudWatch dashboard
- EC2 CPU metric
- Memory metric, if CloudWatch Agent is configured
- Disk metric
- Application logs in CloudWatch
- Nginx access/error logs in CloudWatch
- ALB target health
- CloudWatch alarms
- Failed login alert/log
- RDS backup settings
- RDS automated backup screenshot

## 9. Report Screenshots

- Architecture diagram
- Application workflow diagram, optional
- Security flow diagram, optional
- Deployment pipeline diagram, optional

