const jwt = require("jsonwebtoken")

const {JWT_SECRET_HEY} = process.env
const sign = (payload = {}) =>{
   return jwt.sign(payload, JWT_SECRET_HEY, {expiresIn: "8h"} )
}



module.exports = {sign}