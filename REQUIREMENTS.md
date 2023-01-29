# API and Database Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

**_Table of Contents_**

- [API and Database Requirements](#api-and-database-requirements)
  - [API Endpoints](#api-endpoints)
    - [Users](#users)
    - [Products](#products)
    - [Orders](#orders)
    - [Order Products](#order-products)
  - [Data Schema](#data-schema)
    - [Products Schema](#products-schema)
    - [Users Schema](#users-schema)
    - [Orders Schema](#orders-schema)
    - [Products for each Order Schema](#products-for-each-order-schema)
  - [Data Shapes](#data-shapes)
    - [User](#user)
    - [Product](#product)
    - [Order](#order)
    - [Order Product](#order-product)

## API Endpoints

### Users

- Index - **`token required`**

  - HTTP verb `GET`
  - Endpoint:- `/api/users/`
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `Array of user objects`

    ```json
    {
    	"status": "success",
    	"data": {
    		"users": [
    			{
    				"id": 3,
    				"first_name": "louy",
    				"last_name": "hany",
    				"password": "$2b$10$fC5JI.p3q/3kDTPbUfT0oO4c3Wfai3dc4rb6BUKZ3T0QtuVJBKoRy"
    			}
    		]
    	},
    	"message": "users retrieved successfully"
    }
    ```

- Show **`token required`**

  - HTTP verb `GET`
  - Endpoint:- `/api/users/:id` - **id of the user to be retrieved**
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `User object`

    ```json
    {
    	"status": "success",
    	"data": {
    		"id": 3,
    		"first_name": "louy",
    		"last_name": "hany",
    		"password": "$2b$10$fC5JI.p3q/3kDTPbUfT0oO4c3Wfai3dc4rb6BUKZ3T0QtuVJBKoRy"
    	},
    	"message": "user retrieved successfully"
    }
    ```

- Create **`token required`**

  - HTTP verb `POST`
  - Endpoint:- `/api/users`
  - Request Body

    ```json
    {
    	"first_name": "louy",
    	"last_name": "hany",
    	"password": "123asdF"
    }
    ```

  - Response Body -- `User object`

    ```json
    {
    	"status": "success",
    	"data": {
    		"id": 1,
    		"first_name": "louy",
    		"last_name": "hany"
    	},
    	"message": "user created successfully"
    }
    ```

- Authenticate

  - HTTP verb `POST`
  - Endpoint:- `/api/users/auth`
  - Request Body

    ```json
    {
    	"first_name": "louy",
    	"password": "123asdF"
    }
    ```

  - Response Body -- `Updated User object`

    ```json
    {
    	"status": "success",
    	"data": {
    		"id": "1",
    		"first_name": "louy",
    		"last_name": "hany",
    		"password": "$2b$10$l1M3diYluNYKx4u6rllsfu6eysQtymnkNywMtUdN7hx22TpjaNov6",
    		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoibG91eSIsImxhc3RfbmFtZSI6ImhhbnkiLCJwYXNzd29yZCI6IiQyYiQxMCRsMU0zZGlZbHVOWUt4NHU2cmxsc2Z1NmV5c1F0eW1ua055d010VWRON2h4MjJUcGphTm92NiJ9LCJpYXQiOjE2NzQ5Njc1NDB9.-5y0cFDda6R7Eo97aRVRIg3RkP9j-pv00sK6XykLUaA"
    	},
    	"message": "user authenticated successfully"
    }
    ```

### Products

- Index

  - HTTP verb `GET`
  - Endpoint:- `/api/products/`
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `Array of products`

    ```json
    {
    	"status": "success",
    	"data": {
    		"products": [
    			{
    				"id": 1,
    				"name": "product name",
    				"price": "9.99",
    				"category": "Electronics."
    			}
    		]
    	},
    	"message": "Products retrieved successfully"
    }
    ```

- Show

  - HTTP verb `GET`
  - Endpoint:- `/api/products/:id` - **id of the product to be retrieved**
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `Product object`

    ```json
    {
    	"status": "success",
    	"data": {
    		"product": {
    			"id": 1,
    			"name": "product name",
    			"price": "9.99",
    			"category": "Electronics."
    		}
    	},
    	"message": "Product retrieved successfully"
    }
    ```

- Create **`token required`**

  - HTTP verb `POST`
  - Endpoint:- `/api/products`
  - Request Body

    ```json
    {
    	"name": "product name",
    	"description": "product description",
    	"price": 9.99,
    	"category": "Electronics."
    }
    ```

  - Response Body -- `User object`

    ```json
    {
    	"status": "success",
    	"data": {
    		"id": 1,
    		"name": "product name",
    		"price": "9.99",
    		"category": "Electronics."
    	},
    	"message": "Product created successfully"
    }
    ```

## Orders

- Create **`token required`**

  - HTTP verb `POST`
  - Endpoint:- `/api/orders`
  - Request Body

    ```json
    {
    	"userId": 1,
    	"status": "active"
    }
    ```

  - Response Body -- `User object`

    ```json
    {
    	"status": "success",
    	"data": {
    		"id": 1,
    		"status": "active",
    		"userId": 1
    	},
    	"message": "Order created successfully"
    }
    ```

### Order Products

- Index - **`token required`**

  - HTTP verb `GET`
  - Endpoint:- `/api/order-products/:order_id/products` - **id of the order**
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `An array of the products associated with an order`

    ```json
    {
    	"status": "success",
    	"data": {
    		"orderProducts": [
    			{
    				"id": 1,
    				"orderId": 1,
    				"productId": 1,
    				"products": [
    					{
    						"name": "product name",
    						"price": 20,
    						"category": "Electronics.",
    						"quantity": 1,
    						"productId": 1,
    						"description": "product description"
    					}
    				]
    			}
    		]
    	},
    	"message": "Order Products retrieved successfully"
    }
    ```

- Show - **`token required`**

  - HTTP verb `GET`
  - Endpoint:- `/api/order-products/:order_id/products/:product_id` - **id of the order abd id of the product to return**
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `An array of the products associated with an order`

    ```json
    {
    	"status": "success",
    	"data": {
    		"orderProduct": {
    			"id": 1,
    			"orderId": 1,
    			"productId": 1,
    			"quantity": 1,
    			"name": "product name",
    			"description": "product description",
    			"category": "Electronics.",
    			"price": 20
    		}
    	},
    	"message": "Product at target Order retrieved successfully"
    }
    ```

## Data Schema

### Products Schema

```sql
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price NUMERIC(17, 2) NOT NULL,
    category VARCHAR(50) NOT NULL
)
```

### Users Schema

```sql
CREATE TABLE users(
id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
 password VARCHAR(255) NOT NULL
);
```

### Orders Schema

```sql
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  status VARCHAR(50),
  user_id BIGSERIAL REFERENCES users(id) NOT Null
);
```

### Products for each Order Schema

```sql
CREATE TABLE order_products(
  id SERIAL PRIMARY KEY,
  order_id BIGINT REFERENCES orders(id) NOT NULL,
  product_id BIGINT REFERENCES products(id) NOT NULL,
  quantity INT
);
```
