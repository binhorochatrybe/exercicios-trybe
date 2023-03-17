// Faça uma lista com as suas frutas favoritas
const specialFruit = ['kiwi', 'maçã', 'lichia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'leite em pó', 'farinha láctea'];

const fruitSalad = (fruit, additional) => {
    const larica = [...fruit, ...additional]
  return larica
};

console.log(fruitSalad(specialFruit, additionalItens));