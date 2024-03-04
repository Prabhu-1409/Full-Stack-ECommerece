const mongoose=require('mongoose')

const product=new mongoose.Schema({
    name:String,
    description:String,
    category:String,
    stock:Number,
    price:Number,
    file:String,
    comments:{
        id:String,
        message:String
    }
})

const offerschema = new mongoose.Schema({
    file:String,
    details:String
})

const accountdata = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    emailid:{
        type:String
    },
    password:{
        type:String
    },
    cart:{
        productname:String,
        image:String
    }
})

const productmodel=new mongoose.model('addingproducts',product)
const offermodel = new mongoose.model('offers',offerschema)
const accountmodel = new mongoose.model('useraccounts',accountdata)

module.exports={productmodel,offermodel, accountmodel}