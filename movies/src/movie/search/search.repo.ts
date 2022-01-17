import { SearchMoviesDto } from './search.dto'
import { MovieModel } from '../movie.model'

export function searchMovies(repo: typeof MovieModel, dto: SearchMoviesDto) {
    const { term, limit, kind } = dto
    return (
        repo
            // Search by exact term (Mongoose will sort items by textScore automatically)
            // https://docs.mongodb.com/manual/text-search/#exact-phrase
            .find({ kind, $text: { $search: `"${term}"` } })
            .limit(limit)
            .exec()
    )
}
