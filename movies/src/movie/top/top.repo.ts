import { GetTopMoviesDto } from './top.dto'
import { MovieModel } from '../movie.model'

export function getTopMovies(repo: typeof MovieModel, options: GetTopMoviesDto) {
    const { limit, kind } = options
    return repo
        .aggregate([
            {
                $match: { kind }
            },
            {
                $addFields: {
                    ratingAvg: { $divide: ['$ratingValue', '$ratingCount'] }
                }
            },
            {
                $sort: {
                    ratingAvg: -1
                }
            },
            {
                $limit: limit
            },
            {
                $project: { meta: 0 }
            }
        ])
        .exec()
}
