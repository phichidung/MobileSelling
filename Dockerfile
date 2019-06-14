FROM node:10

RUN mkdir /app

COPY . /app

WORKDIR /app

ENV NODE_PORT 6060

RUN npm install

CMD ["npm", "start"]

EXPOSE ${NODE_PORT}
