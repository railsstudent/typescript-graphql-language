import 'reflect-metadata'
import { createConnection, useContainer } from 'typeorm'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import * as dotenv from 'dotenv'
// tslint:disable-next-line: no-var-requires
const helmet = require('helmet')
const { urlencoded, json } = bodyParser

dotenv.config()

async function bootstrap() {
    useContainer(Container)
    await createConnection()

    const schema = await buildSchema({
        resolvers: [__dirname + '/**/*.resolver.{ts,js}'],
        container: Container,
        emitSchemaFile: true,
    })

    const server = new ApolloServer({
        schema,
        playground: true,
        introspection: true,
    })

    const app = express()
    app.use(cors())
    app.use(compression())
    app.use(helmet({ contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false }))
    app.use(morgan('dev'))
    app.use(json())
    app.use(urlencoded({ extended: false }))

    server.applyMiddleware({ app })
    const port = process.env.PORT || 4000
    app.listen(port, () => {
        console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
    })
}

bootstrap()
