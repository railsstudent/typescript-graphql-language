FROM node:12.20.0-alpine3.10 as prod

# PROD Config

# update packages
RUN apk update

# default work directory to /app
WORKDIR /app
COPY ["package.json", "package-lock.json*", "tsconfig.json", "tslint.json", "ormconfig.js", "./"]
COPY ["src",  "./src"]

# check files list
RUN ls -a

ENV NODE_ENV=production

RUN npm install

# build backend
RUN npm run build

# database migration
RUN npm run typeorm migration:run

CMD ["npm", "start"]