
let Palindromo = 'Arara';
function verificaPalindrome (Palindromo){


for (index = 0; index < Palindromo.length; index +=1){
    for (index2 = 0; index2 > Palindromo.length-1; index -=1){
        if (Palindromo[index] === Palindromo[index2]){
            console.log(Palindromo[index2]);
        } else {
            console.log('Não é palindromo.');
        }
    }
}

} console.log(verificaPalindrome());
