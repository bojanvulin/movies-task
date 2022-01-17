import { body, param, query } from 'express-validator'
import { MovieKind } from './movie.model'

export function getMovie() {
    return [param('id', `Param 'id' must be of type 'ObjectId'`).isMongoId()]
}

export function getMovies() {
    return [
        query('kind', `Query param 'kind' must be one of 'movie|series'`)
            .optional()
            .customSanitizer((value) => {
                return [MovieKind.MOVIE, MovieKind.SERIES].includes(value) && value
            }),
        query('order', `Query param 'order' must be one of 'asc|desc'`)
            .default('asc')
            .isString()
            .customSanitizer((value) => {
                return ['asc', 'desc'].includes(value) ? value : 'asc'
            }),
        query('page', `Query param 'page' must be a positive 'number'`)
            .default(1)
            .isInt({ min: 1 })
            .toInt(),
        query('perPage', `Query param 'perPage' must be between 1 and 250`)
            .toInt()
            .default(10)
            .isInt({ min: 1, max: 250 })
            .toInt(),
        query('sortBy', `Query param must be one of the movie fields`)
            .optional()
            .isString()
    ]
}

export function rateMovie() {
    return [
        param('id', `Param 'id' must be of type 'ObjectId'`).isMongoId(),
        body('ratingValue', `Field 'ratingValue' must be a number between 1 and 5`).isInt(
            {
                min: 1,
                max: 5
            }
        )
    ]
}
