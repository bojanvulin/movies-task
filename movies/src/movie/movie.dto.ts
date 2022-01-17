import { Paginatable, Sortable } from '../util/query'
import { Movie, MovieKind } from './movie.model'

export type GetMoviesDto = Paginatable &
    Sortable & {
        kind?: MovieKind
    }

export type RateMovieDto = Pick<Movie, 'ratingValue'>
