const express = require('express')
const app = express()



app.set('view engine','ejs')

app.get('/api/upload',(req,res,next)=>{
    res.render('index.ejs')
})

app.post('/api/upload',(req,res,next)=>{
    res.redirect('/')
})

const port = process.env.PORT || 5000
app.listen(port,()=>console.log('Server running on: ' +port))