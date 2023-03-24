import mongoose from 'mongoose'

const marksSchema = new mongoose.Schema({
    facultyid: {
        type: String
    },
    studentid: {
        type: String
    },
    classs: {
        type: String
    },
    section: {
        type: String
    },
    subject: {
        type: String
    },
    type: {
        type: String
    },
    totalmarks: {
        type: Number
    },
    marks: {
        type: Number
    },
    result: {
        type: String
    }
},
    {
        timestamps: true
    });

const marksModel = mongoose.model('marks', marksSchema)

export default marksModel