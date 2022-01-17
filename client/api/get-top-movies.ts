import { Movie, MovieKind } from '../shared/movie'
import { client } from './client'
import { Response } from './types'

type Params = {
    kind: MovieKind
    limit: number
}

export function getTopMovies(params: Params): Response<Movie[]> {
    return client({
        method: 'GET',
        url: '/top',
        params
    })
}
