import mongoose from 'mongoose'

const ttSchema = new mongoose.Schema({    
    day: {
        type: String
    },
    classs: {
        type: String
    },
    section: {
        type: String
    }, 
    subject1: {
        type: String
    },
    faculty1: {
        type: String
    },
    subject2: {
        type: String
    },
    faculty2: {
        type: String
    }, 
    subject3: {
        type: String
    },
    faculty3: {
        type: String
    }, 
    subject4: {
        type: String
    },
    faculty4: {
        type: String
    }, 
    subject5: {
        type: String
    },
    faculty5: {
        type: String
    },
    subject6: {
        type: String
    },
    faculty6: {
        type: String
    }
},
    {
        timestamps: true
    });

const ttModel = mongoose.model('timetables', ttSchema)

export default ttModel