FROM node:18.9.1 AS builder

WORKDIR /app

COPY package.*json ./

RUN npm install


FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

COPY . .

EXPOSE 5050

CMD ["npm", "start"]

