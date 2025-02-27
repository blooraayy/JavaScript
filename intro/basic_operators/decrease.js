// El operador -- decrementa de 1 en 1 el valor de una variable
let x = 5;
x--; // Decrementa en 1
console.log(x); // 4

// Si usamos -= podemos decrementar en un valor distinto a 1
x = 5;
x -= 3; // Decrementa en 3
console.log(x); // 2

// Nota: pre-decremento y post-decremento
x = 5;
console.log(x--); // 5 (primero imprime y luego decrementa)

x = 5;
console.log(--x); // 4 (primero decrementa y luego imprime)