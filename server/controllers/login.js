const express = require('express')
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const {accountmodel} = require('../models/productmodel.js');
const { Console, profile } = require('console');
const cookieParser = require('cookie-parser')
const {token_generation}  = require('../middlewares/authentication.js')

const app =  express()
const router = express.Router()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))



const account  = async (req,res)=>{
   const userexist = await accountmodel.find({emailid:req.body.email})
   if(userexist!=""){
    res.send({
        status:'1',
        message:'Existing User'
    })
    console.log('User Exist')
   }
   else{
    bcrypt.hash(req.body.password,saltRounds,function(err,hashed_password){
         accountmodel.create({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            emailid:req.body.email,
            password:hashed_password
        }).then(()=>{
            res.send({
                status:'0',
                message:'User Created'
            })
        })
    })
   }
}



const login = async (req,res,next) =>{
   const email = req.body.email
   const result = await accountmodel.find({emailid:email})
    if(result!=""){
        const userdetails = accountmodel.find({emailid:req.body.email}).then((userinfo)=>{
        bcrypt.compare(req.body.password,result.password,function(err,result){
            //console.log(userinfo[0]._id)
            const token_creation_data  = userinfo[0]._id.toString()
            const token  = token_generation(token_creation_data)
            res.cookie('auth',token,{
                expiresIn:'2h'
            })
           res.send(userinfo)  
        })
        })
    }else{
        res.send({
            message:'Useraccount not found'
        })
    }
}



router.route('/userregister').post(account)
router.route('/login').post(login)

module.exports = login
module.exports = router