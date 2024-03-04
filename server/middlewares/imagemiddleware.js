const multer =require('multer')
const path = require('path')

const image_config=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../server/product_images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+Date.now()+`_product_name_`+path.extname(file.originalname))
    }
})

const image_filter=(req,file,cb)=>{
    if(file.mimetpe==='image/png'
    || file.mimetpe==='image/jpeg'
    || file.mimetpe==='image/jpg'){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}

const upload_images=multer({
    storage:image_config,
    //fileFilter:image_filter,
})

module.exports= upload_images