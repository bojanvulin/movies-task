import { Router } from 'express'
import * as ctrl from './top.controller'
import * as v from './top.validator'
import { validate } from '../../util/validate'

export const topRouter = Router()

topRouter.get('/', v.getTopMovies(), validate, ctrl.getTopMovies)
