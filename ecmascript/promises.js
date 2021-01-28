function falarDepoisDe(segundos, frase) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Testando Promisse')
    .then(resp => {
        console.log(resp)
    }).catch(err => {
        console.log('Error: ', err)
    })