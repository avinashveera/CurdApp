const express=require('express');
const route=express.Router();
const service=require('../services/render')

const controller=require('../controller/controller')
/*
@description Root Route
@method Get
*/
route.get('/',service.homeRoutes)

/**
 * @description Root Route
 * @method Get /add user
 */

route.get('/add_user',service.add_user)

/**
 * @description Root Route
 * @method Get /update_user
 */

route.get('/update_user',service.update_user)

//API
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
// route.put('/api/user:id',controller.update)
route.delete('/api/users/:id',controller.delete)

route.get('/api/user',controller.findone)


module.exports=route