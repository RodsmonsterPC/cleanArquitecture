
const Generation = require("../models/generation.model")
const {create} = require("../useCases/mentor.userCases")


const createGeneration = async (generationData) => {
    const mentorsWithGeneration = generationData.mentors.map((mentor) => ({...mentor, generation: generationData.name}))
    const mentors = await create(mentorsWithGeneration)
    const generation = await Generation.create({...generationData, mentors})
    return generation
  }

module.exports = {createGeneration}