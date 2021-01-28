//Testando requisição com callback pra comparar usando promisse.
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    http.get(url, resp => {
        let resultado = ''

        resp.on('data', dados => {
            resultado += dados
        })

        resp.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

getTurma('A', alunos => {
    alunos.forEach((aluno) => {
        console.log(`${aluno.id}: ${aluno.nome}`)
    })
})