//Spread com objeto

const funcionario = { nome: "Maria", salario: 10000 }

const clone = { clone: true, ...funcionario }

console.log(clone)

///spread com array
const nomesA = ['Joao', 'Roberto']

const cloneNomes = ['Maria', ...nomesA]

console.log(cloneNomes)