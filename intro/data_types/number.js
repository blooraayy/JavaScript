/*
No se distingue entre enteros y decimales, todos son del tipo number
*/ 
let age = 19; // Numero entero
let height = 1.82; // Numero decimal

console.log(age); // 19
console.log(typeof age); // number
console.log(height); // 1.82
console.log(typeof height); // number

// Numeros especiales
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log('hola' * 0); // NaN
console.log(typeof NaN); // number, aunque significa Not a Number