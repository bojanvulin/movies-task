import 'dotenv/config'
import { connectToDb } from './db'
import { createApp } from './app'
import * as env from './environment'

async function bootstrap() {
    await connectToDb({
        host: env.DB_HOST,
        port: env.DB_PORT,
        user: env.DB_USER,
        pass: env.DB_PASS,
        name: env.DB_NAME
    })

    console.info(`Successfully connected to database`)

    const app = createApp()

    app.listen(env.PORT, () => {
        console.info(`Listening on port ${env.PORT}`)
    })
}

bootstrap()
