const axios=require('axios');
const { response } = require('express');
const { param } = require('../routers/router');


exports.homeRoutes=(req,res)=>{

    axios.get('http://localhost:8080/api/users')
    .then(function(response){
      
        res.render('index',{users:response})
    }).catch(err=>{
        res.send(err)

       
    })

    //res.render('index',{users:'new data'});

}

exports.add_user=(req,res)=>{

    console.log('add_user page on')
    res.render('add_user')
}

exports.update_user=(req,res)=>{

    console.log('http find request got')

    axios.get("http://localhost:8080/api/users",{param:{id:req.query.id}}).then(function(userr){

     
        res.render('update_user',{user:userr.data})


    }).catch(err=>{

        res.send(err)
    })
    
}


