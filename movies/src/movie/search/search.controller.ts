import { NextFunction, Request, Response } from 'express'
import * as searchService from '../search/search.service'
import { SearchMoviesDto } from './search.dto'

export async function searchMovies(
    req: Request & { query: SearchMoviesDto },
    res: Response,
    next: NextFunction
) {
    const data = await searchService.searchMovies(req.query)
    return res.json(data)
}
