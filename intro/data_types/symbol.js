/*
Se usa para crear identificadores únicos para objetos.
Se usa para estructuras avanzadas como objetos o propiedades privadas.
*/

let id = Symbol('id');
let id2 = Symbol('id');
console.log(id === id2); // false (aunque tengan el mismo nombre, son únicos para cada variable)
console.log(id); // Symbol(id)
console.log(typeof id); // symbol