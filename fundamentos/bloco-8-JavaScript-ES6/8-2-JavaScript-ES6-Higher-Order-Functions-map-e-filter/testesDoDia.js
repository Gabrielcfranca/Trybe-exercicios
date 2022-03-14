const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

emailListInData.forEach(showEmailList);

//  funcao que acessa todas as posições do array e tenta dividi-los por 3 e 5, 
//  o primeiro número que entre nesta condição será impresso no console.log.

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5)


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => name.length === 5); 

console.log(findNameWithFiveLetters);