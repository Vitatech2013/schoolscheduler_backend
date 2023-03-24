
import facultyModel from '../Common/facultyModel';
import studentModel from '../Common/studentModel';
import timeTableModel from '../Common/timeTableModel';
import marksModel from '../Common/marksModel';
import {sendEmail} from '../Common/email';

export const facultyLogin = (req, res) => {
  facultyModel.findOne( {"facultyid":req.query.facultyid, "password":req.query.password}, (err,result)=> {
    res.send(result);
  })
}

export const viewProfile = (req, res) => {
  facultyModel.findById( {"_id":req.query._id}, (err, result)=> {
    res.send(result);
  })
}

export const getStudent = (req, res) => {
  studentModel.find( {"studentid":req.query.studentid}, (err, result)=> {
    res.send(result.map(record =>{
      return record;
    }));
  })
}

export const viewStudents = (req, res) => {
  studentModel.find({"classs":req.query.classs, "section":req.query.section}, (err, student) => {
    if (!err) {
      res.send(student);
    } else {
      res.send(err);
    }
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

export const addMarks = (req, res) => {
  marksModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewMarks = (req, res) =>
  marksDetails(req, res);

const marksDetails = (req, res) => {
  marksModel.find({"classs":req.query.classs, "section":req.query.section, "type":req.query.type, "facultyid":req.query.facultyid}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send(err);
    }
  })
}

export const getMarks = (req, res) => {
  marksModel.findById(req.params.id, (err,result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}


export const updateMarks = (req, res) => {
  marksModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      marksDetails(req, res);
    }
  })
}

export const deleteMarks = (req, res) => {
  marksModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      marksDetails(req, res);
    }
  });
}

export const updatePassword = (req, res) =>{
  facultyModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  facultyModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
       result.map(results => {
        const subject = 'Credentials Recived';
        const body = `Faculty Id: ${results.facultyid}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.emailid, subject, body);
       })      
      res.send(result);
    }
  })
}
