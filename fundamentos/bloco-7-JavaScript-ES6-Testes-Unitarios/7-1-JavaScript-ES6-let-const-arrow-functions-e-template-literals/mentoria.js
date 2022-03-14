const isEven = (num) => num % 2 === 0;
console.log(isEven(2));


const soma = (numberArray) => {
  let sum = 0;
  for (let number of numberArray){
    sum += number % 2 === 0 ? number : 0;
  }
  return sum;
}

const teste1 = [1, 3, 4, 2, 6, 9, 10];
console.log(soma(teste1));


const number = (text) => typeof text === 'number' ? true : false;
console.log(number(3.14));

//Exercício 4: Escreva uma função que receba um nome de usuário e retorne a seguinte mensagem: 
//"Boas vindas, USERNAME". Valide que o tipo de dado seja string e o texto tenha pelo menos 1 caracter.


const userName = () => typeof text === 'string' ? text : false;
let text = 'Gabriel';
console.log(userName(`Boas vindas, ${text}`));
