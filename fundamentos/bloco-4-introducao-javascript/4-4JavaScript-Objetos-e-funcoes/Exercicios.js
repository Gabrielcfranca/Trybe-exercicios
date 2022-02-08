// let player = {
//     name :'Marta',
//     lastName : 'Silva',
//     age : 34,
//     medals : {
//         golden: 2,
//         silver: 3
//     }
// }

// console.log('A jogadora Marta ' + player.name + ' tem ' + player.age + ' anos de idade');

// player ['bestInTheWorld'] = ['2006', '2007', '2008', '2009', '2010', '2018'];

// console.log ('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro' + ' e ' + player.medals.silver + ' medalhas de prata.');

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let person in names) {
//       console.log('Olá ' +names[person]);
//   }

//   let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let types in car) {
//       console.log (types + ': ' + car[types]);
//   }


// function sum(a, b) {
//      return a+b;
// } console.log('A soma é: ' + sum(2, 8));

// function sub(a, b){
//     return a-b;
// } console.log('A subtração é: ' + sub(20, 13));

// function mult(a,b){
//     return a*b;
// }console.log('A multiplicação é: ' + mult(3,6));



// function maiorNum () {


//     let maior = 0;
//     for (let index = 0; index < numbers.length; index +=1) {
//         if (numbers [index] > maior){
//         maior = numbers[index];


//         }

//     }
//     return maior;

// } let numbers = [10, 25, 30, 99, 130, 88, 46];
// console.log('O maior número da lista é: ' + maiorNum (numbers));

// function verdadeiroOuFalso (){

// }


let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
 
//   console.log('Bem-vinda, ' + info.personagem);
 
//   console.log(info);

//   for (let chaves in info) {
//     //   console.log(chaves);
//     console.log(info[chaves]);
//     // console.log(info);
//   } 

//   let info2 ={
//       personagem: 'Tio Patinhas',
//       origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//       nota: 'O último MacPatinhas'
//       }
      
//       info ["recorrente"] = 'Sim';
//       info2 ["recorrente"] = 'Sim';

//   for (let chaves in info){ 
//       console.log(info[chaves] + ' e ' + (info2[chaves]));
      
//       }

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ]
  };

  console.log('O livro favorito de ' + leitor.nome, leitor.sobrenome, 'se chama ' + leitor.livrosFavoritos[0].titulo);

  leitor.livrosFavoritos[1] =
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }


  console.log('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');