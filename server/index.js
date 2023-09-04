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

app.use(router)
router.post('/',Addnote)
router.get('/all',Getnote)
router.get('/edit/:id',Getonenote) // path and callback function
router.post('/all/:id',Deletenote)
router.post('/edit/:id',Updatenote)

// listen server on port 8000
app.listen(7000,(req,res)=>{
    console.log("server is running")})