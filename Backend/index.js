const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("database connected successfully");
}).catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("welcome")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server is running at port " + PORT)
})