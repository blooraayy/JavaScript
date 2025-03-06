/*
- No se puede redeclarar una variable
- Se puede reasignar una variable
*/

let ciudad = "Ponferrada";
console.log(ciudad); // Ponferrada

ciudad = "Málaga";
console.log(ciudad); // Málaga

// let ciudad = "Madrid"; // SyntaxError: Identifier 'ciudad' has already been declared

// Ejemlo de ambito de bloque
if (true) {
    let edad = 30;
    console.log(edad); // 30
}

// console.log(edad); // ReferenceError: edad is not defined ❌ (no se puede acceder a la variable fuera del bloque)