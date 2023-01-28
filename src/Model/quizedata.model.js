const mongoose=require("mongoose");

const quizeSchema=new mongoose.Schema({
    category:{
        type:String
    },
    type:{
        type:String
    },
    difficulty:{
        type:String
    },
    question:{
        type:String
    },
    correct_answer:{
        type:String
    },
    incorrect_answers:{
        type:Array(String)
    }
})

const quizeModel=mongoose.model("quizedata",quizeSchema);

module.exports=quizeModel