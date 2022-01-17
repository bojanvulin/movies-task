import { Request, Response, NextFunction } from 'express'

export function logEndpoint(req: Request, res: Response, next: NextFunction) {
    console.info(`${req.method} ${req.url}`)
    return next()
}
