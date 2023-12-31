const { urlencoded, Router, json } = require('express')
const cors = require('cors')
const Express=require('express');
const router = new Express.Router();
const { Addnote, Notes, Getnote, Getonenote, Deletenote, Updatenote } = require('./controller');
const c=require('./dbconnect')
// import ExpressJs
const app=Express();

// middlewares

app.use(Express.urlencoded({extended:true}))    // for post api this middleware is must to use
c.conn()                                        // database connection
app.use(Express.json())                         // to pass incoming requests to JSON payloads
app.use(cors())                                 // to share data within two ports or servers

// routes 


app.post('/',Addnote)
app.get('/all',Getnote)
app.get('/edit/:id',Getonenote) // path and callback function
app.post('/all/:id',Deletenote)
app.post('/edit/:id',Updatenote)

// listen server on port 7000
app.listen(7000,(req,res)=>{
    console.log("server is running")})