const { json } = require("express")
const { notes } = require("./schema")


// add note controller

const Addnote= async(req,res)=>{
const note =req.body
const newnotes = new notes(note)
 try{
    await newnotes.save()
}catch(error){
    console.log('Data not saved',error)
}
} 


// get note controller

const Getnote= async(req,res)=>{
    try{
     let  data=  await notes.find()


    res.status(200).send(data)
    }catch(error){
        res.status(404)
    }
    }


// get one note controller

const Getonenote= async(req,res)=>{
    const id=req.params.id
    
        try{
         let  data=  await notes.findOne({_id:id})
         
        res.status(200).send(data)
        
        }catch(error){
            res.status(404)
        }
        }



// update note controller

const Updatenote= async(req,res)=>{
    const id=req.params.id;
    const not =req.body
    const newnote=new notes(not)
        try{
            let  data =  await notes.updateOne({_id:id},newnote)
        res.status(200).send(newnote)
        }catch(error){
            res.status(404)
        }}


// delete note controller


const Deletenote= async(req,res)=>{
    const id=req.params.id
        try{
            let  data =  await notes.deleteOne({_id:id})
        res.status(200).send('deleted')
        }catch(error){
            res.status(404)
        }
        }
    module.exports={Addnote,Getnote,Getonenote,Deletenote,Updatenote}