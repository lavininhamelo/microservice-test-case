FROM node:14

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node package*.json ./
RUN yarn install

COPY --chown=node ./ .
COPY --chown=node ./.docker/docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh





