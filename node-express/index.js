const express = require('express')
const bodyParser = require('body-parser')
const moduloTeste = require('./api/moduloTeste')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, resp) => {
    resp.json([
        { nome: "Romário", idade: 26 },
        { nome: "Tatiane", idade: 25 },
        { nome: "Maria", idade: 03 },
    ])
})


app.get('/user/:id', (req, resp) => {
    resp.send(`Usuário ${req.params.id}`)
})

app.get('/user/:id/relatorio', (req, resp) => {
    resp.send(`Relatório ${req.query.completo} do usuário ${req.params.id} no ano ${req.query.ano}`)
})

app.post('/post', (req, resp) => {
    resp.send(req.body)
})

app.get('/getUser', moduloTeste.getUsuario)

app.post('/saveUser', moduloTeste.salveUsuario)

const port = 3000
app.listen(port, () => {
    console.log(`Escutando na porta: ${port}`)
})

