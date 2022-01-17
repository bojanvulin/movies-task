import { Router } from 'express'
import * as ctrl from './movie.controller'
import * as v from './movie.validator'
import { validate } from '../util/validate'

export const movieRouter = Router()

movieRouter.get('/:id', v.getMovie(), validate, ctrl.getMovie)
movieRouter.get('/', v.getMovies(), validate, ctrl.getMovies)
movieRouter.patch('/:id/rating', v.rateMovie(), validate, ctrl.rateMovie)
