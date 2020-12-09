FROM node:12.20.0-alpine3.10

# update packages
RUN apk update

# default work directory to /app
WORKDIR /app
COPY ["package.json", "package-lock.json*", "tsconfig.json", "tslint.json", "ormconfig.js", "./"]
COPY ["src",  "./src"]

# check files list
RUN ls -a

RUN npm install
RUN npm run build

# database migration
RUN npm run typeorm migration:run

# expose port 4000
EXPOSE 4000

CMD ["npm", "start"]