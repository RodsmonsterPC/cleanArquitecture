const express = require("express")

const { create, createMentor } = require("../useCases/generation.userCases")

const router = express.Router()

router.post("/", async (request, response)=>{

    try{
        
        const {body} = request
        
        const generation = await create(body)
        let newMentor = body.mentors.map((cv) =>{

              let mentorUpdate = 
                {
                    name: `${cv.name}`,
                    modulo: `${cv.module}`,
                    edad: `${cv.age}`,
                    type: `${cv.type}`,
                    generacion:`${body.name}`
                }
                 
                
            
            return mentorUpdate
                
            
        })
        
        newMentor.forEach(async element => {
            await createMentor(element)
        });
        
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