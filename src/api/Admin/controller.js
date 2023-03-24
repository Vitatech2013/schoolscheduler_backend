
import adminModel from './adminModel';
import facultyModel from '../Common/facultyModel';
import studentModel from '../Common/studentModel';
import timeTableModel from '../Common/timeTableModel';
import marksModel from '../Common/marksModel';
import {sendEmail} from '../Common/email';

export const adminLogin = (req, res) => {
  adminModel.findOne( {"username":req.query.username, "password":req.query.password}, (err,result)=> {
    res.send(result);
  })
}

export const facultyCount = (req, res) => {
  facultyModel.count({}, (err,result)=> {
    res.send([result]);
  })
}

export const facultyRegistration = (req, res) => {
  facultyModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are Successfully Registered in School Scheduler<br><br>Faculty Id: ${req.body.facultyid}<br>Password: ${req.body.password}<br>Please Login using these Credentials<br>Thank You.`;
      sendEmail(req.body.emailid, subject, body);
      res.send(result);
    }
  })
}

export const viewFaculty = (req, res) =>
  facultyDetails(res);

const facultyDetails = (res) => {
  facultyModel.find((err, faculty) => {
    if (!err) {
      res.send(faculty);
    } else {
      res.send(err);
    }
  })
}

export const getFaculty = (req, res) => {
  facultyModel.findById(req.params.id, (err,result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updateFaculty = (req, res) => {
  facultyModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      facultyDetails(res);
    }
  })
}

export const deleteFaculty = (req, res) => {
  facultyModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      facultyDetails(res);
    }
  });
}

export const studentCount = (req, res) =>{
  studentModel.count({}, (err,result)=> {
    res.send([result]);
  })
}

export const studentRegistration = (req, res) => {
  studentModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are Successfully Registered in School Scheduler<br><br>Student Id: ${req.body.studentid}<br>Password: ${req.body.password}<br>Please Login using these Credentials<br>Thank You.`;
      sendEmail(req.body.emailid, subject, body);
      res.send(result);
    }
  })
}

export const viewStudent = (req, res) => {
  studentModel.find({"classs":req.query.classs, "section":req.query.section}, (err, student) => {
    if (!err) {
      res.send(student);
    } else {
      res.send(err);
    }
  })
}

export const getStudent = (req, res) => {
  studentModel.findById(req.params.id, (err,result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updateStudent = (req, res) => {
  studentModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const deleteStudent = (req, res) => {
  studentModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  });
}

export const addTimeTable = (req, res) => {
  timeTableModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewTimeTable = (req, res) =>
  timeTableDetails(req, res);

const timeTableDetails = (req, res) => {
  timeTableModel.find({"classs":req.query.classs, "section":req.query.section}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send(err);
    }
  })
}

export const getTimeTable = (req, res) => {
  timeTableModel.findById(req.params.id, (err,result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updateTimeTable = (req, res) => {
  timeTableModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      timeTableDetails(req, res);
    }
  })
}

export const deleteTimeTable = (req, res) => {
  timeTableModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      timeTableDetails(req, res);
    }
  });
}

export const viewMarks = (req, res) => {
  marksModel.find({"classs":req.query.classs, "section":req.query.section, "type":req.query.type}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send(err);
    }
  })
}

export const updatePassword = (req, res) =>{
  adminModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  adminModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
        const subject = 'Credentials Recived';
        const body = `UserName: ${results.username}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.emailid, subject, body);
      })      
      res.send(result);
    }
  })
}
