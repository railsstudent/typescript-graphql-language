FROM node:12.20.0-alpine3.10 as prod

# PROD Config

# update packages
RUN apk update

# default work directory to /app
WORKDIR /app
COPY ["package.json", "package-lock.json*", "tsconfig.json", "tslint.json", "ormconfig.js", "./"]
COPY ["src",  "./src"]

# check files list
RUN ls -al

ENV NODE_ENV=production

RUN npm install -g pg typeorm
RUN npm install

# install dev dependencies
RUN npm install --only=dev

# build backend
RUN npm run build

# check files list
RUN ls -al

# database migration
#RUN npm run typeorm migration:run

CMD ["npm", "start"]