const passo1 = (content, next) => {
    content.valor1 = 'mid1'
    next()
}

const passo2 = (content, next) => {
    content.valor2 = 'mid2'
    next()
}

const passo3 = content => content.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }

    execPasso(0)    
}

const ctx = {}
exec(ctx, passo2, passo1, passo3)

console.log(ctx)