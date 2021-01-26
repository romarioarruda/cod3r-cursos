const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

const port = 3003

//Rotas
app.get('/produtos', (req, resp, next) => {
    resp.send(database.getProdutos())
})

app.get('/produtos/:id', (req, resp, next) => {
    resp.send(database.getProduto(req.params.id))
})

app.post('/produtos', (req, resp, next) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }

    resp.send(database.criaProduto(produto))    
})

app.put('/produtos/:id', (req, resp, next) => {
    const produto = {
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    }

    resp.send(database.criaProduto(produto))    
})

app.delete('/produtos/:id', (req, resp, next) => {
    resp.send(database.deleteProduto(req.params.id))
})


app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})