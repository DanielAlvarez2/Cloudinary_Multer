require('dotenv').config()
const express = require('express')
const upload = require('./utils/multer.js')
const {cloudinary} = require('./utils/cloudinary.js')
const app = express()



app.set('view engine','ejs')
app.use(express.json({limit:"50m"}))
app.use(express.urlencoded({limit: "50mb", extended:false}))



app.get('/api/upload',async(req,res,next)=>{
    const all_images = await cloudinary.api.resources()
    console.log(all_images)
    const images = await all_images.resources
    console.log(images)
    res.render('index.ejs', {images})
})

app.post('/api/upload',upload.single('img'),async(req,res,next)=>{
    console.log("File Details: ",req.file)
    const result = await cloudinary.uploader.upload(req.file.path)
    console.log('result: ',result)
    const post_details = {
        title: req.body.title,
        image: result.public_id
    }
    res.status(200).json({post_details})
    // res.redirect('/api/upload')
})

const port = process.env.PORT || 5000
app.listen(port,()=>console.log('Server running on: ' +port))