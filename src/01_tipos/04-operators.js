// Operadores Aritméticos (Usados para realizar operaciones)
let a = 2;
let b = 4;

// Suma
let sum = a + b; // 6
console.log(sum);
// Resta
let sub = a - b; // -2
console.log(sub);
// Multiplicación
let mult = a * b; // 8
console.log(mult);
// División
let div = a / b; // 0.5
console.log(div);
// Módulo(resto)
let mod = a % b; // 2
console.log(mod);
// Exponente
let exp =  a ** b; // 16
console.log(exp);
// Incremento
let post_inc = a++; // 2 (suma 1, pero después de mostrar por pantalla, post-incremento)
let pre_inc = ++b // 5 (suma 1, antes de mostrar, pre-incremento)
console.log(post_inc);
console.log(pre_inc);
// Decremento
let post_dec = a--; // 3 (resta 1, pero después de mostrar por pantalla, post-decremento)
let pre_dec = --b; // 4 (resta 1, pero antes de mostrar, pre-decremento)
console.log(post_dec);
console.log(pre_dec);

// Operadores de Asignación (usados para asignar valores a variables)

// Igual
let x = 1;
console.log(x); // 1
// Sumar
x += 3; // x = x + 3
console.log(x); // 4
// Resta
x -= 3; // x = x - 3
console.log(x); // 1
// Multiplicación
x *= 10; // x = x * 10
console.log(x); // 10
// División
x /= 5; // x = x / 5
console.log(x); // 2
// Módulo
x %= 4; // x = x % 4
console.log(x); // 2
// Exponencial
x **= 2; // x = x ** 2
console.log(x); // 4

// Operadores de Comparación (Usados para comparar valores y devuelven un booleano)
let y = 10;
let z = "10"

// Igualdad (sin tipo)
console.log(y == z); // true
// Igualdad estricta (con tipo)
console.log(y === z); // false
// Desigualdad (sin tipo)
console.log(y != z); // false
// Desigualdad estricta (con tipo)
console.log(y !== z); // true
// Mayor que
console.log(y > 5); // true
// Menor que
console.log(y < 5); // false
// Mayor o igual que
console.log(y >= 10); // true
// Menor o igual que
console.log(y <= 10); // true

// Operadores Lógicos

// AND
console.log(true && true); // true
// OR
console.log(5 < 10 || 10 < 5); // true
// NOT
console.log(!(5 == 5)); // false

// Operadores de Concatenación (Strings)

// +
console.log("Hola" + " " + "Mundo") // Hola Mundo
// +=
let hola = "Hola";
hola += " Mundo";
console.log(hola); // Hola Mundo

/* 
Operador Ternario (Condicional)
Forma corta de escribir un if-else:
condición ? valor_si_verdadero : valor_si_falso
*/
let edad = 20;
let acceso = (edad >= 18) ? "Permitido" : "Denegado";
console.log(acceso); // Permitido

/*
Operador de Tipo
Verifican el tipo de una variable
*/

// Typeof (Devuelve el tipo de dato)
console.log(typeof 1); // "number"
// Instanceof (Verifica si un objeto pertenece a una clase)
console.log([1,2,3] instanceof Array); // true