import 'dotenv/config'
import { createDatabase } from 'typeorm-extension'
import { createConnection } from 'typeorm'
import { createApp } from './app'
import * as env from './environment'
import { useJwtStrategy } from './auth/jwt.strategy'
import { useLocalStrategy } from './auth/local.strategy'
import { ConnectionOptions, getRepository } from 'typeorm'
import { User } from './user/user.entity'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

async function bootstrap() {
    const dbOptions: ConnectionOptions = {
        type: 'mysql',
        host: env.DB_HOST,
        port: env.DB_PORT,
        username: env.DB_USER,
        password: env.DB_PASS,
        database: env.DB_NAME,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: env.NODE_ENV === 'development',
        namingStrategy: new SnakeNamingStrategy()
    }

    await createDatabase({ ifNotExist: true }, dbOptions)
    await createConnection(dbOptions)

    console.info(`Successfully connected to database`)

    const app = createApp()

    useLocalStrategy(getRepository(User))
    useJwtStrategy()

    app.listen(env.PORT, () => {
        console.info(`App listening on port: ${env.PORT}`)
    })
}

bootstrap()
