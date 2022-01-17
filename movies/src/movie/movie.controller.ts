import { Request, Response, NextFunction } from 'express'
import { GetMoviesDto } from './movie.dto'
import * as movieService from './movie.service'

export async function getMovies(
    req: Request & { query: GetMoviesDto },
    res: Response,
    next: NextFunction
) {
    const data = await movieService.getMovies(req.query)
    return res.json(data)
}

export async function getMovie(req: Request, res: Response, next: NextFunction) {
    const data = await movieService.getMovie(req.params.id)
    return res.json(data)
}

export async function rateMovie(req: Request, res: Response, next: NextFunction) {
    const data = await movieService.rateMovie(req.params.id, req.body)
    return res.json(data)
}
