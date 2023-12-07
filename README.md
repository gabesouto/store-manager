# Store Manager Project

In this project, I developed an API using a layered architecture!

The API I created is a sales management system, allowing the creation, viewing, deletion, and updating of products and sales. I used the MySQL database to manage data effectively. Additionally, the API was developed following RESTful principles.

Throughout the development of this project, I created comprehensive tests to ensure the functionality of the implementations, thereby reinforcing my skills as a developer.

During this project, I was able to:

- Successfully interact with a MySQL relational database;
- Implement a robust and well-structured API, following the layered architecture;
- Ensure data integrity by implementing validations for the data received by the API;
- Reinforce my skills by writing effective tests for the APIs, ensuring the correct implementation of endpoints.

I am satisfied with the result of this project and excited to continue improving my skills while facing new exciting challenges!

## Used Stacks

- Node.js
- MySQL
- Docker
- JWT (JSON Web Tokens)
- Mocha / Chai

## Running Locally

Clone the project

```
  git clone git@github.com:gabesouto/store-manager.git
```

Entre no diretório do projeto

```
cd store-manager/backend
```

Install dependencies

```
npm install

```

## running the application

>
> - The `backend` container automatically starts the application.
>
> - Evaluator tests are executed outside the container. If environment variables are not defined, the tests will use values similar to those in the .env-example file
> - ⚠️ It is required to have Node version 16.14 or higher installed locally.

<details>
<summary>🐳 Starting the application with Docker Compose</summary>

```bash
# Install dependencies
npm install

# Start the compose containers for `backend` and `db`
# The application will be available at `http://localhost:3001` in development mode
docker-compose up -d

# You can view the application logs with `docker logs -n 20 -f <container-name>`
docker logs -n 20 -f store_manager
```

</details>

<details>
<summary>🖥️ Starting the application locally</summary>

  
⚠️ Attention: When running locally, the application should receive environment variables as exemplified in env.example to communicate with the database service.
```bash
# Install dependencies
npm install

# Start only the `db` service in compose
docker-compose up -d db

# Start the application in development mode
npm run dev:local


