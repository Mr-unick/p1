import { TextField,Button} from "@mui/material";
import { useNavigate,useParams} from 'react-router-dom';
import { useState,useEffect } from "react";
import { Deletenote,Getonenote } from "../../service/api";
import '../adduser/adduser.css';


function Delete() {
const navigate =useNavigate()
const {id}=useParams();

useEffect(() =>{
    lodnotes()
},[])
const lodnotes= async()=>{
const res=await Getonenote(id)
setnote(res.data)
    }

const [note,setnote]=useState([])

const cancel= async()=>{
        await navigate('/All')
    }
const Delete= async()=>{
    await Deletenote(id)
    await navigate('/All')
};
    return ( 
        <div  className='adduser'>
            <h1> DELETE NOTE</h1>
            <TextField  id="tittle" variant="outlined" name='Tittle' value={note.Tittle}/>
            <div id='form'>
            <TextField  id="discription" multiline rows={10} name='Discription' value={note.Discription} />
            </div>
            <div id='btndiv'><Button id='btn' onClick={(e)=>{Delete(e)}}variant="contained">DELETE</Button>
            <Button id='btn' onClick={(e)=>{cancel(e)}}variant="contained">CANCEL</Button></div>
        </div>
        
        
    );
    
}

export default Delete;