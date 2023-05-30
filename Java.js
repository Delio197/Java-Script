
/* Defina um script em linguagem JavaScript que imprima as seguintes sequências de dados:

A tabuada de multiplicação do número 7.
12 primeiros números da sequencia de Fibonacci.
A soma dos números pares entre 12 e 21.
Os números primos entre 37 e 73.*/

console.log("Tabuada de multiplicação do número 7:");
for (let i = 1; i <= 10; i++) {
  let resultado = 7 * i;
  console.log("7 x " + i + " = " + resultado);
}

console.log("\n Os 12 primeiros números da sequência de Fibonacci:");
let fibonacci = [0, 1];
for (let i = 2; i < 12; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci.join(", "));


console.log("\n A soma dos números pares entre 12 e 21:");
let somaPares = 0;
for (let i = 12; i <= 21; i++) {
  if (i % 2 === 0) {
    somaPares += i;
  }
}
console.log(somaPares);

console.log("\n Números primos entre 37 e 73:");
for (let i = 37; i <= 73; i++) {
  let isPrimo = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrimo = false;
      break;
    }
  }
  if (isPrimo) {
    console.log(i);
  }
}
