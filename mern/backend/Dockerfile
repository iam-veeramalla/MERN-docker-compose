# ----- Stage 1 -----
FROM node:22 AS backend-builder

WORKDIR ./app

COPY package*.json .

RUN npm install 

COPY . .

# ----- Stage 2 -----
FROM node:22-slim 

WORKDIR ./app

COPY --from=backend-builder /app .

EXPOSE 5050

CMD ["npm", "start"]
