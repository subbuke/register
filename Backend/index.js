const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const mongooseSchema = require("./model/Schema");


const app = express();
require("dotenv").config();
app.use(cors({
    origin: 'https://automatic-goldfish-wr7gwgxxj7qvcg66x-3000.app.github.dev'
  }));
  
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("database connected successfully");
}).catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("welcome")
})

app.post("/register", (req, res) => {
    const {name, email, password} = req.body;

    mongooseSchema.find({email:email})
    .then(user => {
        if(user){
            res.json("Already have a account")
        } else {
            mongooseSchema.create({name:name, email:email, password:password})
            .then(result => res.json("account created" + result))
            .catch(err => console.log(err))
        }
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server is running at port " + PORT)
})