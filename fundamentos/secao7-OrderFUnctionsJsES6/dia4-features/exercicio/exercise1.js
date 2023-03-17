/* const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3]; */

/* rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
}); */

const sum = (...parâmetro) => parâmetro.reduce(((acc, curr) => acc + curr));
console.log(sum(1, 2, 3));