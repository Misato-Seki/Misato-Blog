FROM node:latest

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY --chown=node:node . /app

USER node

EXPOSE 8000

CMD ["node", "index.js"]
