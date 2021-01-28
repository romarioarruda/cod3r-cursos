const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, resp => {
            let resultado = ''

            resp.on('data', dados => {
                resultado += dados
            })

            resp.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(err) {
                    reject(err)
                }
            })
        })
    })
}

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
}//Retorna um objeto do tipo asyncFunction

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(err => console.log(err))