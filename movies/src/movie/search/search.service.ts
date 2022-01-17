import { SearchMoviesDto } from './search.dto'
import { MovieModel } from '../movie.model'
import * as repo from './search.repo'

export function searchMovies(options: SearchMoviesDto) {
    return repo.searchMovies(MovieModel, options)
}
