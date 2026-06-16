# BMI Calculator - Backend

This is the backend service for the BMI (Body Mass Index) Calculator application. Built with **NestJS**, **TypeScript**, and **PostgreSQL**, it provides a robust, scalable, and type-safe API for managing BMI data, user records, and health insights.

## Features

- **RESTful API**: Clean and structured endpoints for BMI computation and history tracking.
- **Data Validation**: Strict request validation using **Class-Validator** schemas.
- **ORM Integration**: Database management and type-safety with **TypeORM** / **Prisma**.
- **PostgreSQL Database**: Relational data storage optimized for user analytics.
- **Environment Configuration**: Secure management of credentials via `.env`.

## Tech Stack

- **Framework:** [NestJS](https://nestjs.com/) (TypeScript)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Validation:** [Class-Validator](https://github.com/typestack/class-validator/)

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [pnpm](https://pnpm.io/) (or npm / yarn)

### Installation

```bash
$ pnpm install
```

### Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
