import { TextField,Button} from "@mui/material";
import { useState } from "react";
import { Addnote } from "../../service/api";
import { useNavigate} from 'react-router-dom';
import './adduser.css';
function Adduser({setopen}) {


const closemodal =()=>{
    setopen("");
    
 }
const defaultnote={
    Tittle:'',
    Discription:''
}
    const [note,setnote]=useState(defaultnote)
const onvaluechage=(e)=>{
    setnote({...note,[e.target.name]:e.target.value});

};
const save= async()=>{
     Addnote(note);
     setopen("");
     window.location.reload();
};

    return ( 
        <div  className='adduser'>
            <p>Create</p>
            
            <TextField onChange={(e)=>{onvaluechage(e)}} id="tittle" label="Tittle" variant="outlined" name='Tittle'/>
            <div id='form'>
            <TextField onChange={(e)=>{onvaluechage(e)}} id="discription"label="Discription" multiline rows={10} name='Discription' />
            </div>
           <div className="btns">
           <button id='btn' onClick={(e)=>{save(e)}}>Save</button>
             <button id='btn' onClick={closemodal}>close</button>
           </div>
        </div>
        
        
    );
    
}

export default Adduser;