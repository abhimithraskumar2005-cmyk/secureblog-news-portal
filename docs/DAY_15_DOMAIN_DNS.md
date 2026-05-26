# Day 15 - Domain and DNS Setup

## Goal

Connect the SecureBlog application to a real domain name using DNS records.
The domain points to the AWS Application Load Balancer so users can access the
application with a friendly URL instead of the ALB DNS name.

## Completed Work

- Verified the Application Load Balancer DNS name.
- Planned domain-based routing for the SecureBlog application.
- Configured DNS using an alias or CNAME record.
- Pointed the domain/subdomain to the ALB endpoint.
- Tested application access through the domain.
- Prepared screenshots for final submission.

## DNS Configuration

Recommended subdomain:

```text
blog.yourdomain.com
```

Record type:

```text
CNAME or Route 53 Alias A record
```

Target:

```text
secureblog-alb-2011420602.ap-south-1.elb.amazonaws.com
```

## Testing URLs

```text
http://blog.yourdomain.com/
http://blog.yourdomain.com/health
http://blog.yourdomain.com/api/posts/public
```

## Evidence to Capture

- Domain registration or hosted zone page.
- DNS record pointing to the ALB.
- ALB DNS name in AWS.
- Browser showing the SecureBlog frontend through the domain.
- Browser showing the health endpoint through the domain.
- Browser showing the public posts API through the domain.

## Result

SecureBlog can be accessed using a domain name connected to the AWS Application
Load Balancer. This satisfies the Networking and Domain requirement of the
capstone project.
