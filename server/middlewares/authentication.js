SECRET_KEY = 'ab66ddde5dd27e2482614ed638e055676cafd1663252a9669118f334ca7ae653795b5fe29eda0e4ecf0e2aa910ed205716f9bb3806025a2bd275afacf5f9b5de' 
const {sign, verify} =require('jsonwebtoken')
const http = require('http')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const {accountmodel} =require('../models/productmodel')
const express = require('express')
const { Verify } = require('crypto')
const app = express()
app.use(express.json())
app.use(cookieParser())

const token_generation = (token_generation_data) =>{
    const token = sign(token_generation_data,SECRET_KEY)
    //console.log(token)
    return token
}

const token_validation = (req,res,next) =>{
    const request_token = req.cookies
    //console.log(request_token.auth)
    if(request_token){
        const verifying  = verify(request_token.auth,SECRET_KEY)
        const userid = new mongoose.Types.ObjectId(verifying)
        console.log(userid)
        accountmodel.find({
            _id:userid
        }).then(user=>{
            res.send(user)
        })
        next()
    }else{
        console.log('Cookie Not Found')
        res.send('Youre not authorised to use this User')
    }
}


module.exports = {token_generation,token_validation}