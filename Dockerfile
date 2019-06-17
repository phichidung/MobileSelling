FROM node:10

RUN mkdir /app

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY ./app.js ./app.js

RUN mkdir /config

ADD ./ ./

EXPOSE 5000

CMD ["npm", "start"]
