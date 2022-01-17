import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import * as env from '../environment'

export function useJwtStrategy() {
    passport.use(
        new JwtStrategy(
            {
                secretOrKey: env.JWT_SECRET,
                jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token')
            },
            async (token, done) => {
                try {
                    return done(null, token.user)
                } catch (error) {
                    done(error)
                }
            }
        )
    )
}
