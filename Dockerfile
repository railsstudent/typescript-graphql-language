FROM node:12.20.0-alpine3.10
COPY src  .
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY tslint.json .
COPY ormconfig.js .
WORKDIR /src
RUN npm install
RUN npm run build
#RUN npm run typeorm migration:run
#CMD ["npm", "start"]