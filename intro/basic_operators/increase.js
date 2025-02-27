// El operador ++ incremneta de 1 en 1 el valor de una variable
let count = 5;
count++; // Incrementa en 1
console.log(count); // 6

// Si usamos += podemos incrementar en un valor distinto a 1
count = 5;
count += 3; // Incrementa en 3
console.log(count); // 8

// Nota: pre-incrmento y post-incremento
count = 5;
console.log(count++); // 5 (primero imprime y luego incrementa)

count = 5;
console.log(++count); // 6 (primero incrementa y luego imprime)