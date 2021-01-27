const objeto = new Map()

objeto.set('valor1', 123)
objeto.set('valor2', { status: true })

console.log(objeto.get('valor2'))

console.log(objeto.has('valor1'))