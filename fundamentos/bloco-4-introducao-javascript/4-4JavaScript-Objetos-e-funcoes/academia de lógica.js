// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
//Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: { area: 0, perimetro: 0 }.

// Fórmulas: perimetro = (2base) + (2altura) area = base * altura

function areaPerimetro(base, altura) {
  let resultadoPerimetro = 2 * base + 2 * altura;
  let resultadoArea = base * altura;

  let total = {
    area: resultadoArea,
    perimetro: resultadoPerimetro,
  };

  return total;
}

console.log(areaPerimetro(10, 25));

// Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 }

function ParesImpares(numeros) {
  let inteiros = {
    pares: 0,
    impares: 0
  };

  for (const number of numeros) {
      if (number % 2 === 0) {
          inteiros.pares += 1;
      } else {
          inteiros.impares += 1;
      }

   }



  return inteiros;

  
}
let numbers = [12, 7, 10, 32, 49, 23, 27];

console.log(ParesImpares(numbers));

// Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
//Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be' valor esperado no retorno da função: true verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false;

// Dica: Use o SPLIT.1

function endingWord (word, ending) {
let word = '';
let end = '';

}

