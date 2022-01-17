import { Router } from 'express'
import * as ctrl from './search.controller'
import * as v from './search.validator'
import { validate } from '../../util/validate'

export const searchRouter = Router()

searchRouter.get('/', v.searchMovies(), validate, ctrl.searchMovies)
