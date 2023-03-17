/* const n = 9 ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);
 */
/* let array = [];
for(index = 1; index <= 100; index += 1) {
 array.push(index);
}
let sum = 0;
 for (let index = 0; index < array.length; index += 1) {
sum += array[index]
    }
    console.log(sum) 
    exercicio 1*/
/* 
    let fatorial = 1;

    for (let index = 10; index > 0; index -= 1) {
      fatorial *= index;
    }
    
    console.log(fatorial); 
    inverter palavra*/
    /* let word = 'tryber';
    let reverseWord = '';
    
    for (let index = 0; index < word.length; index += 1) {
      reverseWord += word[word.length - 1 - index];
    }
    
    console.log(reverseWord); 
    menor e maior palavra*/
     let array = ['java', 'javascript', 'python', 'html', 'css'];
    let palavraMaior = array[0];
    for (let index = 1; index < array.length; index += 1) {
     if (array[index].length > palavraMaior.length)
     palavraMaior = array[index];
    }
    
    console.log(palavraMaior);