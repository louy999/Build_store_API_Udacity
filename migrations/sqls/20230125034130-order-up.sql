/* Replace with your SQL commands */
/* Replace with your SQL commands */
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  status VARCHAR(50),
  user_id BIGSERIAL REFERENCES users(id) NOT Null
);