let array = [2, 2, 3, 'a'];
function verifiedNumber() {
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (typeof element !== 'number') {
      throw new Error('Digite apenas numeros');
    }
    if (element % 2 !== 0) {
      throw new Error("Tem numero impar");
    }
  }
}function isPar() {
  try {
    verifiedNumber(array);
    console.log('Esse Array só tem numero par')  
  } catch (error) {
    console.log(error);
  }
}
isPar();

