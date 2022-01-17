import { query } from 'express-validator'

export function getTopMovies() {
    return [
        query('kind', `Query param 'kind' must be one of 'movie|series'`),
        query('limit', `Query param 'limit' must be between 1-20`)
            .default(10)
            .isInt({
                min: 1,
                max: 20
            })
            .toInt()
    ]
}
