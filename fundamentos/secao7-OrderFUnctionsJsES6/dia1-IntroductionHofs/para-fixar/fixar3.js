const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
   return names.some((namearray) => namearray === name)
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
    const verifyAges = (objectPeople, age) => {
        return people.every((personAge) => personAge.age >= age)
    };
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));