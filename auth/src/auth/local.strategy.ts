import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Repository } from 'typeorm'
import { hash, compare } from 'bcryptjs'
import { User } from '../user/user.entity'
import { omit } from 'ramda'

export function useLocalStrategy(userRepo: Repository<User>) {
    passport.use(
        'signup',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password'
            },
            async (email, password, done) => {
                try {
                    const hashedPassword = await hash(password, 12)
                    const user = await userRepo.save({
                        email,
                        password: hashedPassword
                    })
                    return done(null, user)
                } catch (err) {
                    return done(err)
                }
            }
        )
    )

    passport.use(
        'login',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password'
            },
            async (email, password, done) => {
                const user = await userRepo.findOne({ where: { email } })

                if (!user) {
                    return done(null, false, { message: 'User not found' })
                }

                const isValidPassword = await compare(password, user.password)
                if (!isValidPassword) {
                    return done(null, false, { message: 'Invalid credentials' })
                }

                return done(null, omit(['password'], user))
            }
        )
    )
}
