require('dotenv').config()
const express = require('express')
const app = express()
// const port =4000

app.get('/instagram',(req , res)=>{
    res.send('rishabhguptaa08')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Your are login</h1>')
})
 
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port`)
})