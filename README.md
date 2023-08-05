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
    - [4. `POST /api/users/verify`](#4-post-apiusersverify)
    - [5. `DELETE /api/users/:id`](#5-delete-apiusersid)
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
    `PORT= # The port on which the server will run (default is 3000)
    DATABASE_URL=... # The URL of your MongoDB database
    JWT_SECRET=... # Secret key for JWT authentication`

5. Start the server:

## Usage

### Endpoints

### 1. `GET /api/users`

- Description: Get a list of all users.
- Usage: This endpoint allows you to retrieve a list of all users registered in the system.

### 2. `GET /api/users/:id`

- Description: Get a user by ID.
- Usage: This endpoint allows you to retrieve a specific user's details based on their unique ID.

### 3. `POST /api/users/register`

- Description: Register a new user.
- Usage: This endpoint allows users to register in the system. It requires a username, email, password, and optional image upload for the user profile.

### 4. `POST /api/users/verify`

- Description: Verify user registration.
- Usage: This endpoint allows users to verify their registration by confirming their email address.

### 5. `DELETE /api/users/:id`

- Description: Delete a user by ID.
- Usage: This endpoint allows you to delete a specific user from the system based on their unique ID.

Once the server is running, you can access the e-commerce application by navigating to `http://localhost:3000` in your web browser.

Here are the main endpoints and functionalities of the application:

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
