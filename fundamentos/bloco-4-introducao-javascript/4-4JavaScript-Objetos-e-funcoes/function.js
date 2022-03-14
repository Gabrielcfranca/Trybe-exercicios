function printGreeting () {
    console.log('Olá');
}

printGreeting();


//jogo mega sena

// 1. gerar um numero aleatório


// 2. gerar um jogo (sortear os números)


// 3. conferir o jogo - acertou na mega.

let numAleatorio = [];

function generateRandomNumber () {
    let randomNumber = math.floor(math.random() * 60) + 1;
    return randomNumber;
}

function generateGame () {
    let megaSenaDraw = [];
    for (let index = 1; index <=6; index += 1){
        let randomNumber = generateRandomNumber();
        megaSenaDraw.push();
    }
  
    return megaSenaDraw;
}

let megaSenaNumber = generateRandomNumber;

function checkMegaSenaResult (result, game){
    

}
