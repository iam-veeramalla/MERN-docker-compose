# A simple MERN stack application 

### Create a network for the docker containers

`docker network create demo`

### Build the client 

```sh
cd mern/frontend
docker build -t mern-frontend .
```

### Run the client

`docker run --name=frontend --network=demo -d -p 5173:5173 mern-frontend`

### Verify the client is running

Open your browser and type `http://localhost:5173`

### Run the mongodb container

`docker run --network=demo --name mongodb -d -p 27017:27017 -v ~/opt/data:/data/db mongodb:latest`

### Build the server

```sh
cd mern/backend
docker build -t mern-backend .
```

### Run the server

`docker run --name=backend --network=demo -d -p 5050:5050 mern-backend`

## Using Docker Compose

`docker compose up -d`

##  Learnings from dockerizing a MERN stack web application
### **1. Dockerizing a MERN Stack Application**
#### Dockerfiles:
->Created separate Dockerfile for the frontend and backend to define the build process and runtime configurations. 

->Specified appropriate base images (e.g., node for frontend/backend, mongo for database).

->Defined commands to install dependencies, build the application, and set the working directory.

->Used .dockerignore to exclude unnecessary files, improving build efficiency.

#### Environment Variables:

->Managed sensitive data like database connection strings using .env files and passed them securely in docker-compose.yaml.

### **2. Networking with Bridge Type**
#### Bridge Networking:
->Configured the Docker network of type bridge to allow communication between containers.

->Ensured the frontend and backend containers could resolve the database container hostname using Docker's internal DNS.

### **3. Using docker-compose.yaml**
#### Service Definition:

->Defined three services in docker-compose.yaml:

**frontend:** To serve the React app.

**backend:** To handle API logic.

**database:** To manage MongoDB data.

->Specified image build contexts pointing to respective directories with their Dockerfile.

#### Networking Configuration:

->Used networks in docker-compose.yaml to link the three services under the same bridge network.

#### Volume Management:

->Mounted volumes for hot-reloading during development.

->Persisted MongoDB data using Docker volumes to ensure data remains after container restarts.

#### Port Mapping:

->Exposed necessary ports to the host machine for frontend (e.g., 5713), backend (e.g., 5050), and database (e.g., 27017).

### 4. **Simplified Multi-Container Management**
#### Building and Running:

->Used docker-compose up to build and start all services simultaneously, reducing complexity.

->Managed logs for all containers in one terminal for easier debugging.

#### Dependency Management:

->Specified service dependencies in docker-compose.yaml to ensure containers start in the correct order (e.g., backend waits for the database).

### **5. Debugging and Optimization**

->Identified issues with inter-container communication by checking logs and connectivity.

->Optimized Dockerfiles to reduce image size (e.g., using multi-stage builds for production).

->Verified that the app worked in both development and production environments.

### **6. Benefits of Containerization**

#### Consistency:

->Ensured that the application runs identically across different environments (development, staging, production).

#### Portability:

->Deployed the entire stack as a set of containers, enabling quick migration across platforms.

### **7. Future Enhancements**

->Automated builds and deployments using CI/CD pipelines with Docker.

->Implemented advanced networking configurations, such as custom subnets or overlay networks, for more complex setups.













