FROM node:16-alpine

WORKDIR /var/www/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 4000

CMD ["node", "./server.js"]
