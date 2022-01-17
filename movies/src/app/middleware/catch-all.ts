import { Request, Response, NextFunction } from 'express'

export function catchAll(req: Request, res: Response, next: NextFunction) {
    return res.status(404).json({ message: 'Endpoint not found' })
}
