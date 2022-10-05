const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const HttpError = require("./middlewares/http-error")

require("dotenv").config();

const app = express();

const url = process.env.DB_URL;
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database connected");
  }
);

app.use((req,res,next) =>{
  const error = new HttpError("Could not find this route",404);
  throw error;
})

app.use((error,req,res,next)=>{
  if(res.headerSent){
    return next(error);
  }
  res.status(error.code || 500);
  res.json({message: error.message || "An unknown error occured"});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
