const express = require("express");
const cors= require("cors");
const mongoose = require("mongoose");
const ToDo = require("./model/toDo.js");

const app=express()
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://localhost:27017/toDoApp")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});