# Day 12: RDS Database Setup

## Goal

Create a managed PostgreSQL database for SecureBlog using Amazon RDS.

## RDS Plan

- Use PostgreSQL database engine
- Place database inside private DB subnets
- Use a DB subnet group
- Attach `secureblog-db-sg`
- Disable public access
- Enable automated backups
- Store connection details safely for application deployment

## Recommended Settings

```text
Database engine: PostgreSQL
Template: Free tier, if available
DB instance identifier: secureblog-db
Master username: secureblog_admin
Public access: No
VPC: secureblog-vpc
DB subnet group: secureblog-db-subnet-group
Security group: secureblog-db-sg
Initial database name: secureblog
Backup retention: 7 days
```

## DB Subnet Group

Use these private database subnets:

```text
secureblog-private-db-subnet-1
secureblog-private-db-subnet-2
```

## Security Rule

Database security group:

```text
PostgreSQL 5432 from secureblog-ec2-sg only
```

## Application Connection Format

Use this format later in backend `.env`:

```text
DATABASE_URL=postgresql://secureblog_admin:YOUR_PASSWORD@RDS_ENDPOINT:5432/secureblog
```

## Screenshots to Capture

- RDS create database configuration
- PostgreSQL engine selected
- DB identifier and username
- VPC and DB subnet group selected
- Public access disabled
- `secureblog-db-sg` attached
- RDS instance available
- RDS endpoint
- Backup retention settings
- DB subnet group
- DB security group inbound rule

