const fs = require('fs')

const produto = {
    nome: "Celular",
    preco: 2000,
    desconto: 0.15
}

fs.writeFile(__dirname + '/sistemTest/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!!')
})