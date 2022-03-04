// function testingScope(escopo) {
//   if (escopo === true) {
//     const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
  }
}
testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortedOddsArrays = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}
const sortedArray = sortedOddsArrays();
console.log(`${sortedArray}`);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`segue o array crescente ${oddsAndEvens.sort((a,b) => a - b)}, confirma?`);


const sortArray = array => {
  const sortOddsAndEvens = array.sort((a,b) => a - b);
  return sortOddsAndEvens
}
const sortedArrayBonus = sortArray(oddsAndEvens);
console.log(`${sortedArrayBonus}`);

 const fatorial = num => {
   let result = 1;
   for (let i = 2; i <= num; i ++){
     result *= i;
   }
   return result
 }
 console.log(fatorial(5));
 
 const fatorial = num => num > 1 ? num * fatorial(num - 1) : 1;
 console.log(fatorial(5));


 function contWords (frase){ //criei uma funcao que recebe frase.
   let words = frase.split(' '); //criei um variável para receber as palavras separadas
   let maxLength = 0; //criei uma variável para receber o tamanho das palavras
   let result = ''; //uma variavel para o resultado
   
   for (const word of words){ //um for que vai testar o indice word (q vai receber as palavras de words)
     if (word.length > maxLength){ //se a palavra do indice for maior do que o tamanho daa palara já guardada segue
       maxLength = word.length; // maxLength guarda a maior palavra
       result = word; // result recebe a palavra q for maior.
     }
   }
   return result; //retorna a maior palavra inserida no texto.
 }
 console.log(contWords("Antônio foi no banheiro e não sabemos o que aconteceu"));

 const contWords = frase => {
  let words = frase.split(' '); //criei um variável para receber as palavras separadas
  let maxLength = 0; //criei uma variável para receber o tamanho das palavras
  let result = ''; //uma variavel para o resultado
  
  for (const word of words){ //um for que vai testar o indice word (q vai receber as palavras de words)
    if (word.length > maxLength){ //se a palavra do indice for maior do que o tamanho daa palara já guardada segue
      maxLength = word.length; // maxLength guarda a maior palavra
      result = word; // result recebe a palavra q for maior.
    }
  }
  return result; //retorna a maior palavra inserida no texto.
}
console.log(contWords("Antônio foi no banheiro e não sabemos o que aconteceu"));

