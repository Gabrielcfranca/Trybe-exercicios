const newEmployees = (createEmail) => {
  const employees = {
    id1: createEmail(), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

function createEmail (nome){
  const emailPeople = nome.toLowerCase().replace(/ /g,"_");
  // const correctEmail = emailPeople.toLowerCase();
  return { nome, email: `${emailPeople}@betrybe.com`};
};
let resultCreate = createEmail('Pedro Guerra')
console.log(resultCreate);


//1. Criar uma HOF
//2. Ela precisa retornar o resultado de um sorteio 
//3. essa funçao deve gerar um número aleatório entre 1 e 5
//4. Parametros da minha função são: numero apostado e uma funcao que checa:
//   se o número apostado é igual ao número sorteado.
//5. o retorno HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
//6. 

const numberCheck = (myNumber, number) => myNumber === number;

const sorteio = (myNumber, callback) => {
  min = Math.ceil(1);
  max = Math.floor(5);
const number = Math.floor(Math.random() * (5 - 1)) + min;
return callback (myNumber, number) ? 'Tente novamente' : 'Parabéns você ganhou';
}


console.log(sorteio(2, numberCheck));

// hof que receberá três parametros

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const checkAnswers = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers){
    return 1;
  }
  if (rightAnswers !== studentAnswers){
    return -0.5;
  }
  if (studentAnswers === 'N.A'){
    return 0;
  }
};
const resultAnswers = (rightAnswers, studentAnswers, action) => {
let contador = 0;
for (let index = 0; index < rightAnswers.length; index++) {
  const actionReturn = action(rightAnswers[index], studentAnswers[index]);
  contador += 1;
}
return `Resultado Final: ${contador} pontos`;
};


console.log(resultAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));