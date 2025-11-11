const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())

app.get('/shafiqa-pro-max',(req, res)=>{
    res.json([{id: 1, name:"Shafiqa", sname:"Alakbarova", age:"18",imageUrl:"https://m.media-amazon.com/images/M/MV5BNDI1YjIyN2EtMWExZC00ZjFjLWI0ODAtMWY0ODYyODBmNGEzXkEyXkFqcGc@._V1_.jpg"}])
})


app.get('/elman-pro-max',(req, res)=>{
    res.json([{id: 1, name:"Elman", sname:"Abdullayev", age:"86"}])
})




app.listen(3000, ()=>{
        console.log('Life is good');
})