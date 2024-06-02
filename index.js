const express = require('express')
const app = express()

app.get('/',(req,res,next)=>{
    res.status(200).json({"msg":"server route"})
})
const port = process.env.PORT || 5000
app.listen(port,()=>console.log('Server running on: ' +port))