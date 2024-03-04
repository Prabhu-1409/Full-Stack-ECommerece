const express =require('express')
const app = express()
const multer = require('multer')
const multer_data = multer()
const mongoose =require('mongoose')
const bodyparser = require('body-parser')
const upload_images = require('../middlewares/imagemiddleware')
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(multer_data.array())


mongoose.connect('mongodb://127.0.0.1:27017/shopping').then(()=>{
    console.log('succesfully connected')
}).catch((err)=>{
    console.log(err)
})
const { productmodel, offermodel, accountmodel} = require('../models/productmodel')
const { userInfo } = require('os')
const Formhandle = async (req,res)=>{
    //let file_data = req.file.filename
    //console.log(file_data)
    const data= {
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        stock:req.body.stock,
        price:req.body.price,
        file:req.file.filename
    }
    console.log(data)
    const create = await productmodel.create(data).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
    //console.log(req.body)
    //console.log(req.file)
}

const getproducts =async (req,res)=>{
    try{
       await productmodel.find().then((data)=>{
            res.json(data)
        })
    }catch(error){
        res.send(error)
    }

}

 
const Product_details = async (req,res)=>{
    let id = new mongoose.Types.ObjectId(req.query.id)
    //console.log(id)
    const data_product = await productmodel.findOne(id)
    res.send(data_product)
    //console.log(data_product)
}

const category = async (req,res) =>{
    let catname = req.query.category
    //res.send(catname)
    //console.log(catname)
    const sending = productmodel.find({
        category:catname
    }).then((data)=>{
        res.send(data)
    })
}

const offer = async (req,res)=>{
    const offer_details ={
        file:req.file.filename,
        details:req.body.offer
    }
    const data = offermodel.create(offer_details).then(()=>{
        res.send('Offer details received Successfully')
    })
}

const sliderdata= async (req,res)=>{
    const data = offermodel.find().then((slider_info)=>{
        res.send(slider_info)
        console.log(slider_info)
    }).catch((err)=>{
        console.log(err)
    })
}

const Home = async(req,res)=>{
}

const cart = async (req,res) =>{
    console.log(req.body)
}


const avatar = async (req,res)=>{
    const info ={
        file:req.file.filename,
    }
    console.log(info)
}

const navprofile = async (req,res) =>{
}

const profile = (req,res)=>{

}

module.exports = {Formhandle, getproducts, Product_details, category, offer, sliderdata,Home,cart,avatar, navprofile,profile}

