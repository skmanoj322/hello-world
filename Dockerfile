FROM node:22-alpine
WORKDIR /usr/local/app

# COPY package.json ./
# COPY package-lock.json ./
COPY package*.json ./
RUN npm install
COPY index.js .


EXPOSE 5000
CMD ["node" ,"index.js"]
