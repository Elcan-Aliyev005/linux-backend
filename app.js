const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())

app.get('/shafiqa-pro-max',(req, res)=>{
    res.json([{id: 1, name:"Shafiqa", sname:"Alakbarova", age:"18"}])
})





app.listen(3000, ()=>{
        console.log('Life is good');
})