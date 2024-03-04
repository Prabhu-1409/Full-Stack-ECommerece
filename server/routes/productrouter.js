const express =require('express')
const router = express.Router()
const {Formhandle,getproducts, Product_details, category, offer, sliderdata, Home, cart, avatar, navprofile, profile} = require('../controllers/addproductcontroller')
//const navprofile = require('../controllers/profilecontroller')
const login =  require('../controllers/login')
const upload_images = require('../middlewares/imagemiddleware')
const cookieParser = require('cookie-parser')
const {token_validation} = require('../middlewares/authentication')
const app=express()


app.use(express.json())
app.use(cookieParser())

app.post('/addproducts',upload_images.single('image'),Formhandle)
app.get('/gettingproduct',getproducts)
app.get('/productbyid',Product_details)
app.get('/category',category)
app.post('/offers',upload_images.single('banners'),offer)
app.get('/sliderdata',sliderdata)
//app.post('/userregister',account)
//app.post('/login',login)
app.get('/home',token_validation,Home)
app.post('/adding_to_cart',cart)
app.post('/profileavatar',upload_images.single('avatar'),avatar)
app.get('/navprofile',token_validation,navprofile)
app.get('/profile',token_validation,profile)
app.post('/cart',token_validation,cart)

module.exports =  router,
module.exports = app