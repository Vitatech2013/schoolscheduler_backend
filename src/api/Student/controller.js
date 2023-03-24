
import studentModel from '../Common/studentModel';
import timeTableModel from '../Common/timeTableModel';
import marksModel from '../Common/marksModel';
import {sendEmail} from '../Common/email';

export const studentLogin = (req, res) => {
  studentModel.findOne( {"studentid":req.query.studentid, "password":req.query.password}, (err,result)=> {
    res.send(result);
  })
}

export const viewProfile = (req, res) => {
  studentModel.findById( {"_id":req.query._id}, (err, result)=> {
    res.send(result);
  })
}

export const viewTimeTable = (req, res) => {
  timeTableModel.find({"classs":req.query.classs, "section":req.query.section}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send(err);
    }
  })
}

export const viewMarks = (req, res) => {
  marksModel.find({"studentid":req.query.studentid, "type":req.query.type}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send(err);
    }
  })
}

export const updatePassword = (req, res) =>{
  studentModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  studentModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
        const subject = 'Credentials Recived';
        const body = `Student Id: ${results.studentid}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.emailid, subject, body);
      })      
      res.send(result);
    }
  })
}
