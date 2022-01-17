import { Movie, MovieKind } from '../shared/movie'
import { client } from './client'
import { MovieOrder, Response } from './types'

type Params = {
    kind: MovieKind
    page: number
    perPage: number
    order: MovieOrder
}

export function getMovies(params: Params): Response<Movie[]> {
    return client({
        method: 'GET',
        url: '/movies',
        params
    })
}
