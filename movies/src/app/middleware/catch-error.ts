import { Request, Response, NextFunction } from 'express'

export function catchError(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(error)
    console.debug(`${req.method} ${req.url}`)
    return res.status(500).json({
        status: 500,
        message: 'Internal server error'
    })
}
