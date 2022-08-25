const User = require("../models/user.model")

const bcrypt = require("bcrypt")

const login = async (email, textplainPassword) =>{

    const user = await User.findOne({email})

    if(!user){
        const error = new Error("No estas autorizado")
        error.status = 401

        throw error
    }

    const isValidPassword = await bcrypt.compare(textplainPassword, user.password)

    if(!isValidPassword){
        const error = new Error("No estas autorizado")
        error.status = 401

        throw error
    }
}

module.exports = { login}