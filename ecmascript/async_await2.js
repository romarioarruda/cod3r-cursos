const { parse } = require("path")

function testeAsyncAwait(timer) {
    return new Promise((resolve, reject) => {
        if (parseInt(timer)) {
            setTimeout(() => {
                resolve('O timer finalizou')
            }, timer)
        } else {
            reject('O valor de timer não é um número!')
        }
        
    })
}

async function executar() {
    try {
        const teste1 = await testeAsyncAwait(2000)
        console.log(`1 - ${teste1}`)

        const teste2 = await testeAsyncAwait(1000)
        console.log(`2 - ${teste2}`)

        const teste3 = await testeAsyncAwait('sssss')
        console.log(`3 - ${teste3}`)
    } catch(err) {
        console.log(err)
    }
}

executar()