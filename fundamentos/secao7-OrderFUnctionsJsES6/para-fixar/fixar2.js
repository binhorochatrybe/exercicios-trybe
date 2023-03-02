const numbers = [19, 21, 30, 3, 45, 22, 15];

/* const numbersVerify = numbers.find((number) => number % 5 === 0 && number % 3 === 0 )
console.log(numbersVerify); */

const names = ['João', 'Irene', 'Fernando', 'Maria'];

/* const wordSize = names.find((name) => name.length === 5)
console.log(wordSize); */

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui
   const idMusic = musicas.find((musica) => musica.id === '31031685') 
