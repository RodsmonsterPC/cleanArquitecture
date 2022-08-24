
const express = require("express")
const { ReturnDocument } = require("mongodb")
const { findByIdAndUpdate, find } = require("../models/mentor.model")
const { create, update, erase, search } = require("../useCases/mentor.userCases")


const router = express.Router()

router.post("/", async (request, response)=>{

    
    try{
        
        const {body} = request
        const mentor = await create(body)
        response.status(201)
        response.json({
            succes: true,
            data: {
                mentor
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

router.put("/:id", async (request, response)=>{
    
    try{
        const {params} = request
        const {body} = request
        
        const mentor = await update(params.id,body, {returnDocument: "after"})
        response.status(201)
        response.json({
            succes: true,
            data: {
                mentor
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

router.get("/:id", async (request, response)=>{
    
    try{
        const {params} = request
       
        
        const mentor = await search({_id:params.id})
        response.status(201)
        response.json({
            succes: true,
            data: {
                mentor
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

router.delete("/:id", async (request, response)=>{
    
    try{
        const {params} = request
         await erase(params.id)
        response.status(201)
        response.json({
            succes: true,
            message: "Se elimino el mentor"
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