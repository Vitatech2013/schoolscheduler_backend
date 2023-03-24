import mongoose from 'mongoose'

const facultySchema = new mongoose.Schema({
    facultyid: {
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
    experiance: {
        type: String
    },
    subject: {
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

const facultyModel = mongoose.model('facultys', facultySchema)

export default facultyModel