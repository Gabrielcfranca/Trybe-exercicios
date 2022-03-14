// const favoriteLanguage = 'Javascript';
// //favoriteLanguage = 'Python';
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology); // Facial recognition

// const userInfo = {
//   name: 'Cláudio',
//   id: '5489-2',
//   email: 'claudio@email.com',
// };

// userInfo.name = 'João';
// userInfo.id = 'trocaID'
// console.log(userInfo);

// const technologies = ['Javascript', 'CSS', 'HTML'];
// technologies.push('React');
// console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro

// Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// ); inclusao de testes

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

const contaPalavras = frase => frase.split(' ').length;
console.log(contaPalavras('Sera que deu certo? num eh que deu?'));

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
console.log(objetoPessoa('Gabriel', 33));