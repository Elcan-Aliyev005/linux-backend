const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())

app.get('/api/shafiqa-pro-max',(req, res)=>{
    res.json([{id: 1, name:"Shafiqa", sname:"Alakbarova", age:"18",imageUrl:"https://media.tenor.com/OZad3V7-ZgwAAAAM/baby-gumball-gumball.gif"}])
})


app.get('/api/elman-pro-max',(req, res)=>{
    res.json([{id: 1, name:"Elman", sname:"Abdullayev", age:"86"}])
})




app.listen(3000, ()=>{
        console.log('Life is good');
})