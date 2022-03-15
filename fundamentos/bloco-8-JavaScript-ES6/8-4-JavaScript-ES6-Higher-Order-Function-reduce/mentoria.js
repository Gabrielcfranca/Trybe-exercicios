
// passo 1: dado uma sigla de estado, obter o nome completo do referido estado.

function getStateNameByUF(states, shortName) {
  const state = states.find((state) => state.short === uf);
  return state.name;
}
console.log(getStateNameByUF(states, 'PA'));

// passo 2: Dado um array de cidades, obter um objeto em que suas
// chaves representam as regiões do país e o seu valor é um array 
//com as cidades daquela região.

const mapCities = (cities) => {
  return cities.reduce((acc, city) => {
    const region = city.region;
    
    if (typeof acc[region] === 'undefined') {//se isto acontecer, não existe chave paara a região
      acc[region] = [];
    }
    //aqui nós temos certeza de uma chave para a região.
    //abaixo vai criar o reduce com base no que foi retornado do if.
    acc[region].push({
      city: city.name,
      //aqui está acessando a função 
      state: getStateNameByUF(states, city.state),
    });
    return acc;
  }, {});
}