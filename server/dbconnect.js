const mongoose=require('mongoose')
const nodemon = require('nodemon')
const pass="aRe3Wg1DfEWhKLff"
const conn=async ()=>{
    try{
await mongoose.connect(`mongodb+srv://nikhillende9121:${pass}@cluster0.q2yopff.mongodb.net/`)
console.log("connetion succcefull")
    }
    catch(error){
        console.log("something went wrong while conneting " ,error)
    }

}
module.exports={conn};