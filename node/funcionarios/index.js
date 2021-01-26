const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const argentina = f => f.pais === 'Argentina'

const mulher = f => f.genero === 'F'

const maiorSalario = (func, funcAtual) => {
    return func && funcAtual.salario < func.salario ? funcAtual : func
}

axios.get(url).then(resp => {
    const funcionarios = resp.data.filter(argentina).filter(mulher).reduce(maiorSalario)

    console.log(funcionarios)
    console.log(`Total: ${funcionarios.length || 1}`)
})