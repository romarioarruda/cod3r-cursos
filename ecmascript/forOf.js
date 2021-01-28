//itera sobre indice
for (let letra in 'cod3r') {
    console.log(letra)
}
console.log('=======================')
//itera sobre valores
for (let letra of 'cod3r') {
    console.log(letra)
}
console.log('=======================')

const array1 = [
    { nome: 'romario', idade: 25, sexo: 'M' },
    { nome: 'Tati', idade: 25, sexo: 'F' },
]

for (let pessoa of array1.entries()) {
    console.log(pessoa)
}

console.log('=======================')

for (let pessoa of array1.keys()) {
    console.log(pessoa)
}