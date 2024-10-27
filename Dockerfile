# Usar uma imagem base do Node.js
FROM node:18

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências da aplicação
RUN npm install

# Copiar o restante do código da aplicação para o contêiner
COPY . .

# Instalar o Nodemon globalmente (opcional)
RUN npm install -g nodemon

# Expor a porta que a aplicação usará
EXPOSE 3000

# Definir o comando que será executado ao iniciar o contêiner
CMD ["nodemon", "app.js"]
