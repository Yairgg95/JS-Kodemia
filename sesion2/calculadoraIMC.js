const peso = 80;
const altura = 1.70;

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}


const imcCalculado = calcularIMC(peso,altura);


const categoriaPeso = determinarCategoria(imcCalculado);


console.log("Tu IMC es:", imcCalculado.toFixed(2));
console.log("Categoría de peso:", categoriaPeso);


function determinarCategoria(imc) {
    if (isNaN(imc)) {
        return "Error: Los valores ingresados no son válidos.";
    } else if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc < 24.9) {
        return "Peso saludable";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}