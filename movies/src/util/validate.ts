import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export function validate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next()
    }

    return res.status(422).json({
        errors: errors.array().map(formatError)
    })
}

type ValidationError = {
    param: string
    msg: string
}

function formatError(error: ValidationError) {
    return { [error.param]: error.msg }
}
