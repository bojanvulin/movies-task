import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import passport from 'passport'
import * as env from '../environment'
import { authRouter } from '../auth/auth.router'

export function createApp() {
    const app = express()

    app.use(cors())
    app.use(helmet())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(passport.initialize())

    app.use(buildEndpointUrl('auth'), authRouter)

    return app
}

function buildEndpointUrl(endpoint: string) {
    return ['/api', env.API_VERSION, endpoint].join('/')
}
