// Cota minima y máxima

const cotaMinima = 1;
const cotaMaxima = 10;

let userInput = parseInt(prompt(`Por favor ingrese un número entre ${cotaMinima} y ${cotaMaxima}`));

/* if (userInput >= cotaMinima && userInput <= cotaMaxima) {
    console.log(`El número ${userInput} está dentro del rango`);
} */

if (userInput >= cotaMinima) {
    if (userInput <= cotaMaxima) {
        console.log(`El número ${userInput} está dentro del rango`);
    } else {
        console.log(`El número ${userInput} está fuera del rango`);
    }
}  else {
    console.log(`El número ${userInput} está debajo del
    rango
    `);
};


