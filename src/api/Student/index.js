import { Router } from 'express'

import {
  studentLogin,
  viewProfile,
  viewTimeTable,
  viewMarks,
  updatePassword,
  forgotPassword
} from './controller'

const router = new Router()

router.get('/studentlogin', studentLogin)

router.get('/viewprofile', viewProfile)

router.get('/viewtimetable', viewTimeTable)

router.get('/viewmarks', viewMarks)

router.put('/updatepassword/:id',updatePassword)

router.get('/forgotpassword', forgotPassword)

export default router
