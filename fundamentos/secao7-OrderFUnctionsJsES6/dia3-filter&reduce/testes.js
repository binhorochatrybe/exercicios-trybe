/* const listaNumeros = [10, 20, 30, 40];

const onlyMoreThan20 = listaNumeros.filter((item) => (item > 20));

console.log(onlyMoreThan20); */
/* 
const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  console.log(`valor atual é ${curr}`);
  // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
  // Iteração 1: valor do acc é 1 e o de curr é 32;
  // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
  // Iteração 2: valor do acc é 33 e o de curr é 44;
  // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
  // Iteração 3: valor do acc é 77 e o de curr é 2;
  // Iteração 4: valor do acc é 79 e o de curr é 3;
  // Valor final de `acc` é 82 e `curr` para no 3.

  return acc + curr; // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
});
 */

/* const numbers = [50, 15, -30, 3, 15]; */

/* const thebiggestNumbers = numbers.reduce((acc, curr) => {return acc > curr ? acc : curr});

console.log(thebiggestNumbers); */

/* const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPairs = numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc);

console.log(sumPairs);
 */
//O ACC ACUMULA O VALOR NO RETORNO

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

  const functionBetterNote = estudantes.map((element) => {
    let betterNote = element.materias.reduce((primeiranota, segundanota) => primeiranota.nota > segundanota.nota ? primeiranota.name : segundanota.name);
    return { 
        nome: element.nome,
        matéria: betterNote
    }
    //`A maior nota de ${element.nome} é na matéria ${betterNote}` 
  })

  console.log(functionBetterNote);

  const functionBetterNote1 = estudantes.map((element) => {
    let betterNote = element.materias.reduce((primeiranota, segundanota) => (primeiranota.nota > segundanota.nota ? primeiranota : segundanota));

    return {
        nome: element.nome,
        matéria: betterNote.name,
    };
  })
