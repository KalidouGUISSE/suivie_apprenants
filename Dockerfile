# Étape 1 : Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Étape 2 : Exécution
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
COPY prisma ./prisma

# Expose le port
EXPOSE 3000

# Lance la migration + démarre le serveur
CMD npx prisma migrate deploy && node dist/index.js
