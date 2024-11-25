<h1>ANGULAR EXPRESS TODO</h1>

<hr />

This is a basic Todo application built using Angular and ExpressJS. Utilizing Angular Signals, and an OOP-MVC type of architecture for the server.

The system is served through NGINX.

## Prerequisites
* Docker installed on your system.

## Usage
1. Clone the repository containing the Dockerfiles and the docker-compose.yml file:
    ```bash
    git clone https://github.com/Ammar-Raneez/Angular_Express_Todo.git
    cd Angular_Express_Todo
    ```

2. Include a `.env` file within the root and the server directories following the `.env.example` files present.

3. Build and start the Docker containers using Docker Compose:
    ```bash
    docker-compose up --build
    ```

4. Access the services:
    * Client: accessible at `http://localhost:80`
    * Server: accessible at `http://localhost:4200`

## Environment Variables
The required environment variables are as follows:
    * SERVER_PORT: The port for the server to run on.
    * CLIENT_PORT: The port for the client to run on.
    * MONGO_URI: MongoDB database connection.
    * NODE_ENV: The environment to run the system on.

## Networking
All services are connected to the `todo-app-network`, allowing communication between them if needed.

## Cleaning Up
To stop and remove the created containers, run the following command:
```bash
docker-compose down
```

This will remove all containers used.
