import { Router, Request, Response, NextFunction } from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import * as env from '../environment'
import { omit } from 'ramda'

export const authRouter = Router()

authRouter.post(
    '/signup',
    passport.authenticate('signup', { session: false }),
    (req: Request, res: Response, next: NextFunction) => {
        return res.json(omit(['password'], req.user))
    }
)

authRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('An error occurred.')
                return next(error)
            }

            req.login(user, { session: false }, async (error) => {
                if (error) return next(error)

                const payload = { id: user.id, email: user.email }
                const token = jwt.sign({ sub: payload.id, user: payload }, env.JWT_SECRET)
                return res.json({ token })
            })
        } catch (error) {
            return next(error)
        }
    })(req, res, next)
})
