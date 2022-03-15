/ 1- Temos uma lista com os dados de pessoas inscritas na nossa pagina e com base nesses dados queremos mandar algum tipo de anuncio para elas(todas tem que receber o mesmo anuncio), temos de cerveja (que pagam mais) e de chocolate, mas não podemos mandar o de cerveja para menores de 18 anos, precisamos de um algoritmo que analise um array com as idades das pessoas inscritas e nos diga qual anuncio devemos mandar.
// retorno esperado:
// 'Beba Trybeer, suave como um log de erro vazio'
// ou
// 'ChocoTrybe, melhor que console.log'.

const arrayIdades = [23, 32, 17, 16, 34]; // false 'ChocoTrybe, melhor que console.log'
const arrayIdades2 = [23, 32, 27, 46, 34]; // true 'Beba Trybeer, suave como um log de erro vazio'

const adsChocoOrBeer = [arrayIdades, arrayIdades2];

for (let index = 0; index < adsChocoOrBeer.length; index += 1) {
  if (adsChocoOrBeer[index].every((idade) => idade >= 18)) {
    console.log('Beba Trybeer, suave como um log de erro vazio');
  } else {
    console.log('ChocoTrybe, melhor que console.log');
  }
}

// escreva sua função aqui.

// 2- Aqui na trybe estamos planejando um bot que vai nos ajudar a planejar as mentorias e o primeiro passo é ver se teremos uma mentoria de projetos passados, pra isso precisamos checar os dados das pessoas estudantes e verificar se tem alguem que ainda não terminou o projeto, caso tenha o bot deve nos retornar a msg 'Bora pra mentoria de projetos!' ou 'Pode abrir o suco de laranja que temos 100% de aprovação!'.

const estudantes = [
  {
    nome: 'Joel',
    Projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Mica',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Hugonardo',
    Projeto: 'Trybewarts',
    status: 97,
  },
  {
    nome: 'Aninha',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Joicy',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Ronald',
    Projeto: 'Trybewarts',
    status: 75,
  },
];

// escreva sua função aqui.

const resultado = estudantes.every((item) => item.status >= 80);
resultado
  ? console.log('Pode abrir o suco de laranja que temos 100% de aprovação!')
  : console.log('Bora pra mentoria de projetos!');
console.log(resultado)
