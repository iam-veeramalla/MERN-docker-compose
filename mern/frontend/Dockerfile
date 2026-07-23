# Use the official image as a parent image
# Description: Dockerfile for the client side of the MERN stack application

# Use the official image as a parent image
FROM node:18.9.1

# Set the working directory
WORKDIR /app

# Copy the file from your host to your current location
COPY package.json .

# Run the command inside your image filesystem
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime
EXPOSE 5173

COPY . .


CMD ["npm", "run", "dev"]
