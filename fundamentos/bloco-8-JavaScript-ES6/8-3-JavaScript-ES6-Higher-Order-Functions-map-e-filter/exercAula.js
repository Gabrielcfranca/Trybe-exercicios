// const numbers = [1, 2, 3, 4, -5];

// const negativeNumber = numbers.map((elemento) => (elemento > 0) ? elemento * (-1) : elemento);

// console.log(negativeNumber);

// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const updateProducts = (products, prices) => products.map((products, index) => (
//   {[products]: prices[index]}
// ));
// const listProducts = updateProducts (products, prices);
// console.log(listProducts);

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
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// const allNameStudents = estudantes.filter((estudantes) => (
// estudantes.turno === 'Manhã')).map((estudantes) => `${estudantes.nome} ${estudantes.sobrenome}`);

// console.log(allNameStudents);


// const reportStatus = (name, students) => {
//   const studentInfo = students.find((student) => student.nome === name);
//   return studentInfo.materias.map((materia) => (
//     `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
//   ));
// };

// console.log(reportStatus('Natalia', estudantes));

const reportStatus = (name, students) => {
  const studentInfo = students.find((student) => student.nome === name);
  return studentInfo.materias.map((materia) => (
    `${materia.name} ${(materia.nota >= 60) ? `aprovado` : 'reprovado'}`
  ));
};

console.log(reportStatus('Wilson', estudantes));