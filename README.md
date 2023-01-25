# Build_store_API_Udacity

### Setup environment

First, create a `.env` file with all the required environment variables:

```bash
# .env
# config for server
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

# If "store_dev" database is not present

create database store_dev;

Next, you need to run the database migrations:

```bash
yarn migrations up
```

```bash
yarn run watch
```

```bash
yarn start
```

The application will run on <http://localhost:5000/>.
