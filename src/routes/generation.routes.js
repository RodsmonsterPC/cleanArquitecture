const express = require("express")

const { create, createMentor } = require("../useCases/generation.userCases")

const router = express.Router()

router.post("/", async (request, response)=>{

    try{
        
        const {body} = request
        
        const generation = await create(body)
        mentors.reduce((acc, cv) =>{

            
        })
        response.status(201)
        response.json({
            succes: true,
            data: {
                generation
            }
        })
       

 }catch(err) {
    response.status(400)
    response.json({
        succes: false,
        message: err.message
    })
 }
})

module.exports = router