import { Router } from 'express'

import {
  adminLogin,
  facultyCount,
  facultyRegistration,
  viewFaculty,
  getFaculty,
  updateFaculty,
  deleteFaculty,
  studentCount,
  studentRegistration,
  viewStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  addTimeTable,
  viewTimeTable,
  getTimeTable,
  updateTimeTable,
  deleteTimeTable,
  viewMarks,
  updatePassword,
  forgotPassword
} from './controller'

const router = new Router()

router.get('/adminlogin', adminLogin)

router.get('/fcount', facultyCount)

router.post('/fregistration', facultyRegistration)

router.get('/fview', viewFaculty)

router.get('/fview/:id', getFaculty)

router.put('/fupdate/:id', updateFaculty)

router.delete('/fdelete/:id', deleteFaculty)

router.get('/scount', studentCount)

router.post('/sregistration', studentRegistration)

router.get('/sview', viewStudent)

router.get('/sview/:id', getStudent)

router.put('/supdate/:id', updateStudent)

router.delete('/sdelete/:id', deleteStudent)

router.post('/ttadd', addTimeTable)

router.get('/ttview', viewTimeTable)

router.get('/ttview/:id', getTimeTable)

router.put('/ttupdate/:id', updateTimeTable)

router.delete('/ttdelete/:id', deleteTimeTable)

router.get('/viewmarks', viewMarks)

router.put('/updatepassword/:id',updatePassword)

router.get('/forgotpassword', forgotPassword)

export default router
