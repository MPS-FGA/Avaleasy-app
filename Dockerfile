FROM node:10-alpine

RUN mkdir /app

WORKDIR /app

RUN apk add --no-cache bash

ADD package.json /app

RUN yarn install

ADD . /app

RUN chmod +x start.sh

CMD ["./start.sh"]
