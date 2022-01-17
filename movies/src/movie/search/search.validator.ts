import { query } from 'express-validator'
import { MovieKind } from '../movie.model'

export function searchMovies() {
    return [
        query('limit', `Query param 'limit' must be a number between 1-20`)
            .default(10)
            .isInt({
                min: 1,
                max: 20
            }),
        query('term', `Query param 'term' must be a string`).isString(),
        query('kind', `Query param 'kind' must be one of 'movie|series'`)
            .optional()
            .customSanitizer((value) => {
                return [MovieKind.MOVIE, MovieKind.SERIES].includes(value) && value
            })
    ]
}
