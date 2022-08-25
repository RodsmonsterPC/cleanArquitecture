
const express = require("express")

const routerKoder = require("./routes/koder.routes") 
const routerMentor= require("./routes/mentor.routes")
const routerGeneration = require("./routes/generation.routes")
const routerUser = require("./routes/user.routes")
const routerAuth = require("./routes/auth.route")

const app = express()

app.use(express.json())

app.use("/koders", routerKoder)

app.use("/mentors", routerMentor)

app.use("/generation", routerGeneration)

app.use("/user", routerUser)

app.use("/auth", routerAuth)



app.get("/", (request, response) =>{

    response.json( {message: "Hom de arquitectura limpia"})
})

module.exports= app