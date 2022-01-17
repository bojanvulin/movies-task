import { MovieModel } from './movie.model'
import { GetMoviesDto, RateMovieDto } from './movie.dto'
import { pipe } from 'ramda'
import { withPaginationQuery, withSortQuery } from '../util/query'

export function getMovie(repo: typeof MovieModel, id: string) {
    return repo.findById(id).exec()
}

export function getMovies(repo: typeof MovieModel, dto: GetMoviesDto) {
    return pipe(
        (query) => withSortQuery(query, dto),
        (query) => withPaginationQuery(query, dto)
    )(
        repo.find({
            kind: dto.kind
        })
    ).exec()
}

export function rateMovie(repo: typeof MovieModel, id: string, rating: RateMovieDto) {
    return repo
        .findByIdAndUpdate(
            id,
            {
                $inc: {
                    ratingValue: rating.ratingValue,
                    ratingCount: 1
                }
            },
            { new: true }
        )
        .exec()
}
