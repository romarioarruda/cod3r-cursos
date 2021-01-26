const increment = {
    _id: 0,
    get id() {
        return this._id++
    }
}

const produtos = {}

const getProdutos = () => {
    return produtos || {}
}

const getProduto = id => {
    return produtos[id] || {}
}

const criaProduto = produto => {
    if(!produto.id) produto.id = increment.id

    produtos[produto.id] = produto

    return produtos
}

const deleteProduto = id => {
    const produto = produtos[id]

    delete produtos[id]

    return produto
}

module.exports = {
    getProdutos,
    criaProduto,
    deleteProduto,
    getProduto
}