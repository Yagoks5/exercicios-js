const numeros = [5, 1, 4, 9, 8, 15, 2, 10, 20, 12];
let maiorNumerPar = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    if (numeros[i] > maiorNumerPar) {
      maiorNumerPar = numeros[i];
    }
  }
}
console.log("Maior número par: " + maiorNumerPar);

//MENOR NUMERO IMPAR
let menorNumeroImpar = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 1) {
    if (menorNumeroImpar === 0) {
      menorNumeroImpar = numeros[i];
    } else if (menorNumeroImpar > numeros[i]) {
      menorNumeroImpar = numeros[i];
    }
  }
}
console.log(menorNumeroImpar);
