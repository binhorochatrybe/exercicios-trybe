/* const primeNumbers = [17, 23, 37]
const [firstNumber, secondNumber] = primeNumbers;
const sum = (a, b) => {
  console.log(a + b);
}

sum(firstNumber, secondNumber) */ // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

/* let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
let array = []

array.push(comida, animal, bebida)

console.log(array); */ // arroz gato água
//const [animaL, drink, food] = array;

//console.log(animaL, drink, food);
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

/* [,,, ...numerosPares] = numerosPares
console.log(numerosPares);
 */
// Utilize array destructuring para produzir o resultado esperado pelo console.log acima
/* 
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;
  console.log(nationality);  */// Brazilian
  
  const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const multiply = (number, value = 1) => number*value;
  
  console.log(multiply(8));