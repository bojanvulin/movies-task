import { MovieKind } from '../movie.model'

export type GetTopMoviesDto = {
    kind: MovieKind
    limit: number
}
