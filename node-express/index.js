const express = require('express')

const app = express()


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

const port = 3000
app.listen(port, () => {
    console.log(`Escutando na porta: ${port}`)
})

