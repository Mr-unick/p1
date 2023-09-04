const { default: mongoose } = require("mongoose");

const notesschema=new mongoose.Schema(
    {
        Tittle:String,
        Discription:String
    }
)
const notes=mongoose.model('notes',notesschema)
module.exports={notesschema,notes}