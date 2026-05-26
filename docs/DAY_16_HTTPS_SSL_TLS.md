# Day 16 - HTTPS, SSL/TLS, and HSTS

## Goal

Prepare the SecureBlog application for encrypted HTTPS traffic and document the
recommended production SSL/TLS setup.

## Important Note

The AWS Application Load Balancer default DNS name cannot be used to issue a
trusted public SSL certificate. A real domain name is required for AWS ACM or
Let's Encrypt certificates.

For this project, the HTTPS plan is documented as follows:

- Use AWS ACM when a real domain is available.
- Attach the ACM certificate to the ALB HTTPS listener on port 443.
- Redirect HTTP traffic on port 80 to HTTPS.
- Enforce HSTS and security headers in the application.

## Recommended Production HTTPS Architecture

```text
User Browser
    |
    | HTTPS : 443
    v
Application Load Balancer + ACM Certificate
    |
    | HTTP internal traffic
    v
EC2 / Nginx Reverse Proxy
    |
    v
Dockerized SecureBlog Frontend and Backend
```

## Security Headers

SecureBlog uses security headers through the backend application, including:

- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- Content-Security-Policy
- Referrer-Policy

## AWS ACM Steps When Domain Is Available

1. Open AWS Certificate Manager.
2. Request a public certificate.
3. Enter the domain name, for example:

```text
blog.yourdomain.com
```

4. Choose DNS validation.
5. Add the validation record in Route 53 or external DNS.
6. Wait until the certificate status becomes Issued.
7. Open EC2 > Load Balancers.
8. Add an HTTPS listener on port 443.
9. Select the issued ACM certificate.
10. Forward HTTPS traffic to the SecureBlog target group.
11. Add an HTTP listener redirect rule from port 80 to port 443.

## Evidence to Capture

- AWS Certificate Manager certificate request page.
- DNS validation record page.
- ALB HTTPS listener configuration.
- HTTP to HTTPS redirect rule.
- Browser showing HTTPS lock icon after the domain certificate is active.
- Application response headers showing HSTS/security headers.

## Result

The project has a clear HTTPS-ready production design. Security headers are
implemented in the application, and the ALB can be upgraded to trusted HTTPS as
soon as a real domain is connected.
