const fs = require('fs')

const caminho = './sistemTest/arquivo.txt'
//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    console.log('===============================')
    console.log(conteudo)
})