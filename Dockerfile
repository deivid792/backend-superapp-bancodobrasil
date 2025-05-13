# build da aplicação
FROM node:23.11.0-alpine AS builder

# Define diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários
COPY package*.json ./
COPY tsconfig.json ./
COPY ./src ./src
COPY ./prisma ./prisma

# Instala dependências e compila o código TypeScript
RUN npm install

# Gera o Prisma Client
RUN npx prisma generate

# Compila o código TypeScript
RUN npm run build

# imagem final para produção
FROM node:23.11.0-alpine

WORKDIR /app

# Copia apenas os artefatos finais da etapa de build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package*.json ./

# Define o comando para rodar a aplicação
CMD ["node", "dist/server.js"]
