import { Movie } from '../shared/movie'
import { client } from './client'
import { Response } from './types'

type Params = {
    id: Movie['_id']
}

export function getMovie({ id }: Params): Response<Movie> {
    return client({
        method: 'GET',
        url: `/movies/${id}`
    })
}
