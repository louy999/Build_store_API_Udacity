# Build Store API Backend Project

**_Table of Contents_**

- [Build store api Backend Project](#Build-Store-API-backend-project)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Setup environment](#setup-environment)
  - [Running the application](#running-the-application)
  - [Running the unit tests](#running-the-unit-tests)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)
  - [Endpoints](#endpoints)
  - [Database Schema](#database-schema)

A Build Store API backend written in NodeJS for Udacity. This application has APIs for Users, Products, and Orders.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

You need the following modules and dependencies installed to run this project:

```bash
docker-compose   # To run the Postgres database on Docker
node 12          # To run the application
yarn             # For dependency management
```

### Installing

Simply, run the following command to install the project dependencies:

```bash
yarn
```

### Setup environment

First, create a `.env` file with all the required environment variables:

```bash
# .env
PORT =5000
NODE_ENV=dev
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=store_dev
DB_DATABASE_TEST=store_dev_test
DB_DATABASE_USER=postgres
DB_DATABASE_PASS=4523asdf
BCRYPT_PASSWORD=pass4563
SALT_ROUNDS=10
TOKEN_SECRET=jass

```

Next, start the Postgres server on Docker:

```bash
docker-compose up
```

Now, check if Postgres has the database `store`, if not create it:

```bash
# Connect to Postgres container
docker exec -it <postgres_container_id> bash

# Login to Postgres
psql -U postgres

# Postgres shell
# This will list out all the databases
\l

# If "store" database is not present
create database store;
```

Next, you need to run the database migrations:

```bash
yarn migrations up
```

## Running the application

Use the following command to run the application in watch mode:

```bash
yarn run watch
```

Use the following command to run the application in using node:

```bash
yarn start
```

The application will run on <http://localhost:3000/>.

## Running the unit tests

Use the following command to run the unit tests:

```bash
yarn test
```

You may also use the Postman collection present in the repository for testing.

## Endpoints

- See [REQUIREMENTS.md](./REQUIREMENTS.md) file

## Database Schema

- See [REQUIREMENTS.md](./REQUIREMENTS.md) file
