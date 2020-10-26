# typescript-graphql-language

Setup a GraphQL playground in to query Spanish phrases I learnt

## Docker Compose

```bash
docker-compose up -d
```

## Docker Compose Down

```bash
docker-compose down
```

### Environment file for development

```
.env file
HOST=<host>
DB_HOST=<database host>
DB_PORT=<database port number>
DB_USER=<database user>
DB_PASSWORD=<database password>
DB_NAME=<database name>
NODE_ENV=<node environment>
```

### PgAdmin login to access data in local environment

```
Browser: http://localhost:5050
Username: pgadmin4@pgadmin.org
Password: pgadmin
```

### TypeORM generate migration

```
npm run typeorm migration:generate --n -n <script name>
```

### TypeORM migration

```
npm run typeorm migration:run
```

### TypeORM revert

```
npm run typeorm migration:revert
```

## Development

```bash
npm run dev
```

## Graphql Playground

http://localhost:4000/graphql

## Production

```bash
npm start
```
