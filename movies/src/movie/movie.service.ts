import { GetMoviesDto, RateMovieDto } from './movie.dto'
import { MovieModel } from './movie.model'
import * as movieRepo from './movie.repo'

export function getMovie(id: string) {
    return movieRepo.getMovie(MovieModel, id)
}

export function getMovies(options: GetMoviesDto) {
    return movieRepo.getMovies(MovieModel, options)
}

export function rateMovie(id: string, rating: RateMovieDto) {
    return movieRepo.rateMovie(MovieModel, id, rating)
}
