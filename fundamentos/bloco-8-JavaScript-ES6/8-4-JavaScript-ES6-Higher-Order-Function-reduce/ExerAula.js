const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

//array - tudo q tiver array abaixo vai puxar o numbers por completo
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// funcao que vai receber um acumulador e um parâmetro (números do array) e vai executar a condição do if ternário,
// vai somar o acumulador com os numeros do array.
const getEven = (even, number) => ((number % 2 ===0) ? even + number : even);
// criar uma funcao para obter o array com o resultado esperado, utilizando o reduce, vai somar todos os números
// que corresponderem a números par, chamando a função que obteve esses valores com o parâmetro inicial = 0.
const sumNumbers = (array) => array.reduce(getEven, 0);
// chama a funcão que vai obter o resultado inicial guardado em um array, utilizando o array numbers como parâmetro.r
console.log(sumNumbers(numbers));

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];


const filterNumbers = numbers.filter((number) => number % 2 ===0);
const somaNumbers = (currentNumber, number) => currentNumber + number;
console.log(somaNumbers);
const total = (filterNumbers) => filterNumbers.reduce(somaNumbers);
console.log(total);

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

// criar uma franção 

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};
// cria pra mim uma funcao que vai receber o array estudantes, que vai fazer um novo array de objetos, onde student são cada um dos estudantes, 
// guardando apenas o nome e a materia, para devolver a materia de maior nota do aluno.
// em materia, acesse todas as matérias de cada estudante sendo representado por student, retornando apenas a matéria de maior nota.
// para isso, utilize o .reduce(função), função esta que vai retornar a maior nota do estudante.

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name}));
console.log(reportBetter(estudantes));
//const reportBetter = 