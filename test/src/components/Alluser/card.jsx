import * as React from 'react';
import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './alluser.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import { Deletenote, Getnote } from '../../service/api';
import Search from '../modal/search';
function NoteCard({setopen,setid,search}) {
const [notes,Setnotes]= useState([0])
const [searchdata,setsearchdada]=useState({});
const[searchval,setsearch]=useState();
useEffect(()=>{

    const getallnotes=async()=>{
    const res=await Getnote();
    Setnotes(res.data)
   console.log("hhhhhh");
  }
    getallnotes()
  
  
  },[])
  const Delete= async(id)=>{
    await Deletenote(id)
  window.location.reload();
};
const Edit =(id)=>{
  setopen("edit")
  setid(id)
}
let lo="nik"
let logval= notes.filter(data=>`${data.Tittle}`.includes(searchval));


 console.log(searchdata);
    return ( 
    <div className="container">


<div className="search">
<Search setsearch={setsearch}/>
</div>
<div id='alluser' >
  
{ logval.length == 0?
 <>
 {
      notes.map(note=>{
       return <Card sx={{ minWidth: 197,maxWidth: 100 ,minHeight: 250,maxHeight: 1000}} id='card'>
       <CardContent>
         
         <Typography id='Tittle'gutterBottom variant="h6" component="div">
           {note.Tittle}
         </Typography>
         <div className="dis"><Typography id='Discription'variant="body3" color="text.secondary">
         {note.Discription}
         </Typography></div>
         <div className='divv'><button id='btn-edit' onClick={()=>{Edit(note._id)}}><EditIcon/></button>
         <button id = "btn-delete" onClick={()=>{Delete(note._id)}}><DeleteIcon/></button>
         </div>
       </CardContent>
       
     </Card>
       })
     }
 </> : 
 <>
 {
  logval.map(note=>{
    return <Card sx={{ minWidth: 197,maxWidth: 100 ,minHeight: 250,maxHeight: 1000}} id='card'>
    <CardContent>
      
      <Typography id='Tittle'gutterBottom variant="h6" component="div">
        {note.Tittle}
      </Typography>
      <div className="dis"><Typography id='Discription'variant="body3" color="text.secondary">
      {note.Discription}
      </Typography></div>
      <div className='divv'><button id='btn-edit' onClick={()=>{Edit(note._id)}}><EditIcon/></button>
      <button id = "btn-delete" onClick={()=>{Delete(note._id)}}><DeleteIcon/></button>
      </div>
    </CardContent>
    
  </Card>
  })
 }
 </>
}

 
      
       
    </div>
    </div>
    );
}

export default NoteCard;