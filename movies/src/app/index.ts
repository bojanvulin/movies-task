import express from 'express'
import 'express-async-errors'
import bodyParser from 'body-parser'
import cors from 'cors'
import { movieRouter } from '../movie/movie.router'
import { topRouter } from '../movie/top/top.router'
import { searchRouter } from '../movie/search/search.router'
import { logEndpoint } from './middleware/log-endpoint'
import { catchError } from './middleware/catch-error'
import { catchAll } from './middleware/catch-all'
import * as env from '../environment'

export function createApp() {
    const app = express()

    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    app.use(logEndpoint)

    app.use(buildEndpointUrl('movies'), movieRouter)
    app.use(buildEndpointUrl('top'), topRouter)
    app.use(buildEndpointUrl('search'), searchRouter)

    app.use(catchAll)
    app.use(catchError)

    return app
}

function buildEndpointUrl(endpoint: string) {
    return ['/api', env.API_VERSION, endpoint].join('/')
}
