import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    studentid: {
        type: String
    },
    name: {
        type: String
    },
    fathername: {
        type: String
    },
    gender: {
        type: String
    },
    mobileno: {
        type: Number
    },
	emailid: {
		type: String
	},	
	password: {
		type: String
	},
    dob: {
        type: String
    },
    classs: {
        type: String
    },
    section: {
        type: String
    },
    academicyear: {
        type: String
    },
    doj: {
        type: String
    },
    address: {
        type: String
    }
},
    {
        timestamps: true
    });

const studentModel = mongoose.model('students', studentSchema)

export default studentModel