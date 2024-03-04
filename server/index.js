const express= require('express')
const mongoose =require('mongoose')
const cors=require('cors')
const router =require('../server/routes/productrouter')
const router1 =require('../server/routes/productrouter')
const loginroute = require('../server/controllers/login')
const path = require('path')

const port =3001

const app = express()
app.set('view engine','ejs')
app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
    methods:['POST','GET','PUT','DELETE']
}))
app.use('/api',router)
app.use('/api',router1)
app.use('/authentication',loginroute)
app.use(express.static('./product_images'))
//app.use(express.static(path.join(__dirname,'..','/client/src')))


app.get('/',(req,res)=>{
    res.status(200)
    res.send('Hello')
})


app.listen(port,(req,res)=>{
    console.log(`${port} listening`)
})
