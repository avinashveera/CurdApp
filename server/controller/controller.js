//var userdb=require('../model/model');
const userdb = require('../model/model');
const connectDB = require('../database/connection');
const { db } = require('../model/model');

//create and save new user

exports.create=(req,res)=>{


   
    if(!req.body){

        
        //validate request
        res.status(400).send({message:'content can not be empty'});
        return;
       
    }

    //new user const 
    const user= new userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
        
    })

    //save user in database

    user.save(user).then(data=>{
        res.redirect('/add_user')
    }).catch(err=>{
        res.status(500).send({
            message:err.message || 'some error occurred while creating a create operation'
        })
    })


}

// retrive and return all user /retrive and return a single user

exports.find=(req,res)=>{

 

   

    console.log('find request')

    userdb.find({id:req.body.id})
    .then(userdb=>{
        res.send(userdb)
    })
    .catch(err=>{
        res.status(500).send({ message:err.message || "error occured while retrive user" })
    })


    
}




//find one id
exports.findone=(req,res)=>{

    console.log('findone functions run')

    console.log(req.body.id)


    userdb.findById(req.query.id,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
 .then(data=>{
     
    res.render('update_user',{user:data})
     })   

}


//update a new identify user id

exports.update=(req,res)=>{
    console.log('hii')


    if(!req.body){
        return res.status(400)
        .send({message:"Data to update can not be empty"})
    }

    const id=req.params.id;
    // console.log("this is id "+req.params.id)
    // userdb.findById({id:`${req.params.id}`,

// })  


    userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){

        
        res.status(440).send({message:`cannot update user with ${id}.maybe user not found`})

    }else{
        res.send(data)
    }
    }).catch(err=>{
        res.status(500).send({message:'error update user information'})
    })
    
}

//delete a user with special user id in the request 


exports.delete=(req,res)=>{

    const id=req.params.id;

    userdb.findByIdAndDelete(id).then(data=>{
        if(!data)
        {
            res.message({message:`can not delete with id${id},maybe id is wrong`})
        }else{
            res.message({message:`user deleted successully!`})
        }
    }).catch(error=>{

        res.status(500).send({
            message:" deleted user with id"+id
        })

    })
    
}