import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
// tslint:disable-next-line: no-var-requires
const helmet = require('helmet')

async function bootstrap() {
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
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    server.applyMiddleware({ app })
    app.listen(process.env.port || 4000, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    })
}

bootstrap()
