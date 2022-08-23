const express = require("express")
const { create } = require("../useCases/koder.userCases")


const router = express.Router()

router.post("/", async (request, response)=>{

    
    try{
        
        const {body} = request
        const koder = await create(body)
        response.status(201)
        response.json({
            succes: true,
            data: {
                koder
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