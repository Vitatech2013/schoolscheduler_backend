import { Router } from 'express'

import Admin from './Admin'
import Faculty from './Faculty'
import Student from './Student'

const router = new Router()

router.use('/admin', Admin)
router.use('/faculty', Faculty)
router.use('/student', Student)

export default router