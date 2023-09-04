import { TextField,Button} from "@mui/material";
import { useState,useEffect } from "react";
import { Addnote, Getnote, Getonenote, Updatenote } from "../../service/api";
import { useNavigate, useParams} from 'react-router-dom';
import '../adduser/adduser.css';
function Editnote({id,setopen}) {
  
useEffect(() =>{
    lodnotes()
},[])
const [note,setnote]=useState([])
const lodnotes= async()=>{
const res=await Getonenote(id)
setnote(res.data)
    }
const navigate = useNavigate()
const defaultnote={
        Tittle:'',
        Discription:''
    }


const onvaluechage=(e)=>{
    setnote({...note,[e.target.name]:e.target.value});

};
const saveedit= async()=>{
    Updatenote(note,id)
    setopen("");
    window.location.reload();
};
const close=()=>{
    setopen("");
   
}
    return ( 
        <div  className='adduser'>
            <p>Edit</p>
            <TextField onChange={(e)=>{onvaluechage(e)}} id="tittle" variant="outlined" name='Tittle' value={note.Tittle}/>
            <div id='form'>
            <TextField onChange={(e)=>{onvaluechage(e)}} id="discription" multiline rows={10} name='Discription' value={note.Discription} />
            </div>
<div className="btns">
<button id='btn' onClick={(e)=>{saveedit(e)}}>Save Edit</button>
<button id='btn' onClick={close}>close</button>

    </div>        </div>
        
        
    );
    
}

export default Editnote;