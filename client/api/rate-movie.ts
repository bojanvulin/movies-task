import { Movie } from '../shared/movie'
import { client } from './client'
import { Response } from './types'

type Params = {
    id: Movie['_id']
    ratingValue: number
}

export function rateMovie({ id, ratingValue }: Params): Response<Movie> {
    return client({
        method: 'PATCH',
        url: `/movies/${id}/rating`,
        data: {
            ratingValue
        }
    })
}
