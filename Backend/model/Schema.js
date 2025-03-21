const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name:{
     type: String,
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
})

const SchemaModel = mongoose.model("people", Schema)

module.exports = SchemaModel;