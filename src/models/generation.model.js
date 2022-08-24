const mongoose = require("mongoose")

const generationSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required : true
    },
    type:{
        type: String,
        required : true
    },
    startDate:{
        type: Date,
        required : true
    },
    endDate:{
        type: Date,
        required: true,
    },
    mentors: {
        type:
      [
        {
          name: {
            type: String
          },
          module: {
            type: String
          },
          age:{
            type: Number
          },
          type:{
            type: String,
            enum:["ProgramLead","Mentor" ,"B-Mentor"]
          }
        }
      ]
    }
})



module.exports = mongoose.model("generation", generationSchema)