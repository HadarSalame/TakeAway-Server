const express= require ('express');
const App =express();
const  env  = require('dotenv');
env.config();
const path = require("path")
const bodyParser = require("body-parser")
App.use(bodyParser.json())
const mongoose=require('mongoose')
mongoose.connect(process.env.MONGO_CONNECTION)
.then(()=>{
console.log("connect to mongo")
}).catch(err=>{ "myerr" + err })


// router

App.listen(()=>{
    console.log('listening on 3030')
}
)