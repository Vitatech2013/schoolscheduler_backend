import { Router } from 'express'

import {
  facultyLogin,
  viewProfile,
  getStudent,
  viewStudents,
  viewTimeTable,
  addMarks,
  viewMarks,
  getMarks,
  updateMarks,
  deleteMarks,
  updatePassword,
  forgotPassword
} from './controller'

const router = new Router()

router.get('/facultylogin', facultyLogin)

router.get('/viewprofile', viewProfile)

router.get('/getstudent', getStudent)

router.get('/viewstudents', viewStudents)

router.get('/viewtimetable', viewTimeTable)

router.post('/addmarks', addMarks)

router.get('/viewmarks', viewMarks)

router.get('/viewmarks/:id', getMarks)

router.put('/updatemarks/:id', updateMarks)

router.delete('/deletemarks/:id', deleteMarks)

router.put('/updatepassword/:id',updatePassword)

router.get('/forgotpassword', forgotPassword)

export default router
