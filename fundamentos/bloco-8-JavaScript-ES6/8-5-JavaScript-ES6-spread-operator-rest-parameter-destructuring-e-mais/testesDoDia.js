const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'açaí', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['morango', 'maça', 'mamão'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const peopleAllData = {
  ...user,
  ...jobInfos
  
};

const {name, age, nationality, profession, squad, squadInitials} = peopleAllData;

console.log(`Hi, my name is ${name}, I'm ${age} years old I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);


const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

const [saudacao, saudacao2] = saudacoes;
console.log(saudacao2(saudacao));

// Produza o mesmo resultado acima, porém utilizando array destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo


let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
// a virgula zera as posições do array.
console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

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

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  const mult = number * value;
  return mult;
};

console.log(multiply(8, 8));