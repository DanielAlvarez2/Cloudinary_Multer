const express = require('express')
const upload = require('./utils/multer.js')
const app = express()



app.set('view engine','ejs')
app.use(express.json({limit:"50m"}))
app.use(express.urlencoded({limit: "50mb", extended:false}))
app.get('/api/upload',(req,res,next)=>{
    res.render('index.ejs')
})

app.post('/api/upload',upload.single('img'),async(req,res,next)=>{
    console.log("File Details: ",req.file)
    res.redirect('/api/upload')
})

const port = process.env.PORT || 5000
app.listen(port,()=>console.log('Server running on: ' +port))