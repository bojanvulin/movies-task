import { Movie, MovieKind } from '../shared/movie'
import { client } from './client'
import { Response } from './types'

type Params = {
    kind?: MovieKind
    term: string
    limit: number
}

export function searchMovies(params: Params): Response<Movie[]> {
    return client({
        method: 'GET',
        url: '/search',
        params
    })
}
