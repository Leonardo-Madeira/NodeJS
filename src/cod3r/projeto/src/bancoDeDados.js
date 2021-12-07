const sequence = {
    _id:1,
    get id(){ return this._id++}
}

const produtos ={}

let salvarProduto = (produto) =>{
    if(!produto.id) produto.id = sequence.id
    produto[produto.id] = produto
    return produto
}

let getProduto = (id) => produtos[id] || {}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos}