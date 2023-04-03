FROM node:16.13.0-alpine

RUN apk add --no-cache bash
RUN apk add busybox-extras

WORKDIR '/app'
ADD '/dist' '/app'
#ADD '/.env.production' '/app/.env'

RUN yarn install --production=true

CMD ["node", "server.js"]
