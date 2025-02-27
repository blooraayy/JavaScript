var name = "Jaime";
console.log(name); // Jaime

// Redeclaring a variable
var name = "Adriana";
console.log(name); // Adriana

// Reasinging a variable
name = "Jaime";
console.log(name); // Jaime

/*
 Note: no respeta el ambito de bloque: if, for, while, etc.
 
if (true) {
    var edad = 30;
}
console.log(edad); // 30 ❌ (debería estar dentro del if, pero se puede acceder)
*/