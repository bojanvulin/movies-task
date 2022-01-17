import { Request, Response, NextFunction } from 'express'
import { GetTopMoviesDto } from './top.dto'
import * as topService from './top.service'

export async function getTopMovies(
    req: Request & { query: GetTopMoviesDto },
    res: Response,
    next: NextFunction
) {
    const data = await topService.getTopMovies(req.query)
    return res.json(data)
}
