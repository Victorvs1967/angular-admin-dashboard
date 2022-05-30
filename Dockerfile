FROM node:slim as build

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /home permissions we have to create the dir with root and change permissions
# RUN mkdir /home/app && chown node:node /home/app

RUN mkdir /home/app
WORKDIR /home/app

RUN npm install -g @angular/cli

# the official node image provide an unprivileged user as a security best practice but we have to manually enable it.
# We put it here so npm installs dependencies as the same user who run the app.
# https://github.com/nodejs/docker-node/blob/master/doc/BestPractices.md#non-root-user
# USER node

COPY package.json package-lock.json* ./
RUN npm install --omit=optional --legacy-peer-deps && npm cache clean --force
ENV PATH="/home/app/node_modules/.bin:$PATH"

# copy in our source code last, as it changes the most
# COPY --chown=node:node . .

COPY . .
CMD ng serve --host 0.0.0.0
