// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// nova variável
const newItems = [...items, 'Escova de dente'];

const product = {
    id: 1,
    name: 'Camiseta',
};

const productPrice = {
  price: 23
}

const productInfo = {...product, ...productPrice}

console.log(productInfo);