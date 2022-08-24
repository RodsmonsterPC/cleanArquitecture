
const Generation = require("../models/generation.model")
const Mentor = require("../models/mentor.model")


const create = (generationData) => {

    const generation = Generation.create(generationData)
    return generation
}

const createMentor = (mentorData) => {

    const mentor = Mentor.create(mentorData)
    return mentor
}
module.exports = {create, createMentor}