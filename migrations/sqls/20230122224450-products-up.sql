/* Replace with your SQL commands */
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price NUMERIC(17, 2) NOT NULL,
    category VARCHAR(50) NOT NULL
)