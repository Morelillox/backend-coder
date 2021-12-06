const express = require('express')
const path = require("path")

const app = express()

const PORT =  8080;

let visitas = 0

const server = app.listen(PORT,() => {
    
})

server.on("error", error=>console.log(`error en el servidor ${error}`))

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"src/pages/index.html"))
})

app.get("/visitas", (req,res) =>{
    visitas++
    res.send(`la cantidad de visitas es ${visitas}`)
})

app.get("/fyh", (req,res) =>{
    let fecha = {};
    fecha.fyh = new Date().toLocaleString();

    res.send(fecha)
})

app.get('/productos', (req, res) => {
    allProducts.getAll().then((data) => {
        res.send(`PRODUCTOS DISPONIBLES:  ${JSON.stringify(data)}`)
    }).catch((err) =>{throw err});
})
 
app.get('/productoRandom', (req, res) => {
    allProducts.getById(randomObj()).then((datos) => {
        res.send(`Productos random: ${JSON.stringify(datos)}`)
    }).catch((err) =>{throw err});
})



