const express=require('express');
const dotenv=require('dotenv');
const app=express();
const morgan=require('morgan')
const bodyParser=require('body-parser');
const path=require('path')
const ejs=require('ejs');
const router=require('router');
const Route = require('router/lib/route');
const { Router } = require('express');
const connectDB=require('./server/database/connection');
dotenv.config({path:'dotenv.config.env'})
const PORT=process.env.PORT||8080

//log request
app.use(morgan('tiny'))

//mongo db connection

connectDB();

//set view engine
app.set('view engine','ejs')
//app.set('views',path.resolve(__dirname,'views/ejs'))

app.use('/static', express.static(path.join(__dirname, 'assets')))
//load assets
 app.use('/css',express.static(path.join(__dirname,'assets/css')))
 app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
 app.use('/js',express.static(path.resolve(__dirname,'assets/js')))
 

//parse request to body parser
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',require('./server/routers/router'))

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)})