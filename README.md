# Node.js E-commerce Project

Welcome to the Node.js E-commerce Project repository! This project is a simple e-commerce application built with Node.js.

## Table of Contents

- [Node.js E-commerce Project](#nodejs-e-commerce-project)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
    - [1. `GET /api/users`](#1-get-apiusers)
    - [2. `GET /api/users/:id`](#2-get-apiusersid)
    - [3. `POST /api/users/register`](#3-post-apiusersregister)
    - [4. `POST /api/users/activate`](#4-post-apiusersactivate)
    - [5. `DELETE /api/users/:id`](#5-delete-apiusersid)
    - [6. `PUT /api/users/:id`](#6-put-apiusersid)
    - [7. `POST /api/auth/login`](#7-post-apiauthlogin)
    - [8. `POST /api/auth/logout`](#8-post-apiauthlogout)
  - [Middlewares](#middlewares)
    - [1. `fileupload`](#1-fileupload)
    - [2. `isLoggedin`](#2-isloggedin)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

This project is a basic e-commerce application built with Node.js. It provides functionality for managing products, placing orders, and processing payments.

## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository to your local machine using the following command:

2. Change into the project directory:

3. Install the required dependencies using npm: `npm install`

4. Set up the environment variables. You will need to create a `.env` file in the root directory of the project and configure the following variables:

    ```
    PORT= # The port on which the server will run (default is 3000)
    DATABASE_URL=... # The URL of your MongoDB database
    JWT_SECRET=... # Secret key for JWT authentication
    ```

5. Start the server:

## Usage

Once the server is running, you can access the e-commerce application by navigating to `http://localhost:3000` in your web browser.

Here are the main endpoints and functionalities of the application:

## Endpoints

### 1. `GET /api/users`

- Description: Get a list of all users.
- Usage: This endpoint allows you to retrieve a list of all users registered in the system.

### 2. `GET /api/users/:id`

- Description: Get a user by ID.
- Usage: This endpoint allows you to retrieve a specific user's details based on their unique ID.

### 3. `POST /api/users/register`

- Description: Register a new user.
- Usage: This endpoint allows users to register in the system. It requires a username, email, password, and optional image upload for the user profile.

### 4. `POST /api/users/activate`

- Description: Verify user registration and activate user account.
- Usage: This endpoint allows users to verify their registration by confirming their email address.

### 5. `DELETE /api/users/:id`

- Description: Delete a user by ID.
- Usage: This endpoint allows you to delete a specific user from the system based on their unique ID.

### 6. `PUT /api/users/:id`

- Description: Update user by ID.
- Usage: This endpoint allows you to update a specific user's details based on their unique ID. It accepts new data, including an optional image upload for the user profile.

### 7. `POST /api/auth/login`

- Description: User login.
- Usage: This endpoint allows users to log in to the system. It requires a username/email and password for authentication.

### 8. `POST /api/auth/logout`

- Description: User login.
- Usage: This endpoint allows users to log out from the system.

</br>

## Middlewares

### 1. `fileupload`

- Description: This middleware utilizes `multer` for handling file uploads, such as user profile images.
- Usage: It intercepts requests that include file uploads and processes them, saving the files to the appropriate destination on the server.

### 2. `isLoggedin`

- Description: This middleware checks if a user is logged in before allowing access to specific routes.
- Usage: It can be applied to routes that require authentication. If the user is authenticated, the middleware allows access; otherwise, it may redirect to a login page or return an appropriate error response.

</br>

Feel free to explore the codebase and customize the application to suit your needs!

## Contributing

We welcome contributions to this project. If you would like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your feature/bug fix.
3. Make your changes and commit them with a clear message.
4. Push your changes to your forked repository.
5. Create a pull request to merge your changes into the main repository.

## License

This project is licensed under the [MIT License](LICENSE).
