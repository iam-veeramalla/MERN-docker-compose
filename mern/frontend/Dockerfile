# Stage 1: Builder
FROM node:18.9.1 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Stage 2: Runner
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the built application and dependencies from the builder stage
COPY --from=builder /app .

# Expose the application port
EXPOSE 5173

# Run the application
CMD ["npm", "run", "dev"]
