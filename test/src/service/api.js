import axios from 'axios';
const URL='http://localhost:7000'

//addnote api

export const Addnote=async(data)=>{
try{
    return await axios.post('http://localhost:7000',data)
}catch(error){
    console.log('something went wrong ',error)
}
}

//allnote api

export const Getnote=async(data)=>{
    try{
        return await axios.get(`http://localhost:7000/all`,data)
    }catch(error){
        console.log('something went wrong ',error)
    }
    }

//edit note api
export const Getonenote=async(id)=>{
        try{
            return await axios.get(`http://localhost:7000/edit/${id}`)
             
        }catch(error){
            console.log('something went wrong ',error)
        }
        }


export const Updatenote=async(note,id)=>{
    try{
        return await axios.post(`http://localhost:7000/edit/${id}`,note)
    }catch(error){
        console.log('something went wrong ',error)
    }
    }
//Delete note api
export const Deletenote=async(id)=>{
    try{
        return await axios.post(`http://localhost:7000/all/${id}`)
    }catch(error){
        console.log('something went wrong ',error)
    }
    }
    
