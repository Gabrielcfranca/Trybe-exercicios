const button = document.querySelector('#submitButton');  // busca o botao a ser cancelado o evento padrao
let inputName = document.querySelector('#fullname'); //cria uma variável para receber o input Fullname
const nameUser = document.querySelector('#nameUser'); //cria uma variável para receber o paragrafo de retorno.

function getUserValue (event) { //cria uma funcao com o eventDefault
    event.preventDefault();
    nameUser.innerHTML = inputName.value; //imprime o user name colocado no input.
}
button.addEventListener('click', getUserValue); //funcao para acionar o botao e com o click acionar a funcao getUserValue


document.getElementById('data').DatePickerX.init();
window.DatePickerX.setDefaults( '#data' options )