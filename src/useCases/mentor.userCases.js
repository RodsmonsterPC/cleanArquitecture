
const Mentor = require("../models/mentor.model")

const create = (mentorData) => {

    const mentor = Mentor.create(mentorData)
    return mentor
}




const update = (mentorID, mentorBody, mentorAfter) =>{
    
    const mentor = Mentor.findByIdAndUpdate(mentorID, mentorBody, mentorAfter)
    return mentor
}

const search = (mentorID) =>{
    
    const mentor = Mentor.findById(mentorID)
    return mentor
}

const erase = (mentorID) =>{
    
    const mentor = Mentor.findByIdAndDelete(mentorID)
    return mentor
}

module.exports = {create, update, search, erase}