let userInput, verificarRango, mensaje;
const cotaMinima = 0;
const cotaMaxima = 20;

userInput = parseInt(prompt(`Por favor ingrese un número entre ${cotaMinima} y ${cotaMaxima}`));
mensaje = ""


verificarRango = (userInput >= cotaMinima && userInput <= cotaMaxima) ? `está en el rango` : `no está en el rango`;

parImpar = (userInput % 2 == 0) ? `es par` : `es impar`;

mensaje += `el número <span>${userInput}</span> <span>${verificarRango}</span> y <span>${parImpar}</span>`

document.write(
    `
    <h1>Desafío 1</h1>
    <main>
        <h2>Dados los extremos inferior y superior de un rango, informar si el numero ingresado esta en rango o no. Indicar también si el número es par o impar.</h2>
        <p>El rango ingresado es desde el número <span>${cotaMinima}</span> hasta el número <span>${cotaMaxima}</span></p>
        <p>El número ingresado para verificar es: <span>${userInput}</span>.</p>
        <p>Por lo tanto ${mensaje}.</p>
    </main>
    `
)