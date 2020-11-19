const mongooses=require('mongoose');
//const {Schema}=mongooses;

var userSchema=new mongooses.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
       
    },

    status:{
        type:String,
    }
})

const userdb=mongooses.model('userdb',userSchema)

module.exports=userdb;
