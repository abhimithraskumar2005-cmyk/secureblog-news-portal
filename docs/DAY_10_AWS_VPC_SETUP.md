# Day 10: AWS VPC and Network Setup

## Goal

Create the base AWS network infrastructure for SecureBlog.

## Planned AWS Network

- One custom VPC
- Two public subnets
- Two private subnets
- Internet Gateway
- NAT Gateway
- Public route table
- Private route table
- Security groups for ALB, EC2, and database

## Recommended CIDR Plan

```text
VPC: 10.0.0.0/16
Public Subnet 1: 10.0.1.0/24
Public Subnet 2: 10.0.2.0/24
Private App Subnet 1: 10.0.11.0/24
Private App Subnet 2: 10.0.12.0/24
Private DB Subnet 1: 10.0.21.0/24
Private DB Subnet 2: 10.0.22.0/24
```

## Route Tables

Public route table:

```text
0.0.0.0/0 -> Internet Gateway
```

Private route table:

```text
0.0.0.0/0 -> NAT Gateway
```

## Security Group Plan

ALB security group:

```text
Inbound HTTP 80 from 0.0.0.0/0
Inbound HTTPS 443 from 0.0.0.0/0
```

EC2 app security group:

```text
Inbound HTTP/app traffic only from ALB security group
Inbound SSH 22 only from your IP address
```

Database security group:

```text
Inbound PostgreSQL 5432 only from EC2 app security group
```

## Screenshots to Capture

- AWS region selected
- VPC created
- Public subnets created
- Private subnets created
- Internet Gateway attached
- NAT Gateway available
- Public route table with Internet Gateway route
- Private route table with NAT Gateway route
- ALB security group
- EC2 app security group
- Database security group

