import { MovieModel } from '../movie.model'
import { GetTopMoviesDto } from './top.dto'
import * as topRepo from './top.repo'

export function getTopMovies(options: GetTopMoviesDto) {
    return topRepo.getTopMovies(MovieModel, options)
}
