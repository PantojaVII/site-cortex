FROM node:22.14.0 AS builder

WORKDIR /app


# Como o Dockerfile está na pasta app, copie sem o prefixo 'app/'
COPY package*.json ./
RUN npm install --verbose

COPY . .
RUN npm run build

# Etapa de produção
FROM node:22.14.0

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]