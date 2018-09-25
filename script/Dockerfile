FROM node:10-alpine

WORKDIR /app

RUN apk add --no-cache bash

ADD package.json /app

RUN yarn install

ADD . /app

CMD ["sh", "script/start.sh"]
