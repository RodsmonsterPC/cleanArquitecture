
const express = require("express")

const routerKoder = require("./routes/koder.routes") 
const routerMentor= require("./routes/mentor.routes")

const app = express()

app.use(express.json())

app.use("/koders", routerKoder)

app.use("/mentors", routerMentor)





app.get("/", (request, response) =>{

    response.json( {message: "Hom de arquitectura limpia"})
})

module.exports= app