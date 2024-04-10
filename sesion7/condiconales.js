const phrase = "La mejor forma de predecir el futuro es creándolo"

let obtenerLongitudDePalabra = (phrase, index) => {
    
    const palabras = phrase.split(' ');

    // Paso 2: Seleccionar la palabra en el índice especificado
    if (index >= 0 && index < palabras.length) {
        const palabraSeleccionada = palabras[index];

        // Paso 3: Convertir la palabra seleccionada a string explícitamente
        const palabraComoString = String(palabraSeleccionada);

        // Paso 4: Calcular la longitud de la palabra como string
        const longitudPalabra = palabraComoString.length;

        // Paso 5: Retornar el resultado (longitud de la palabra)
        return longitudPalabra;
    } else {
        // Manejar el caso en el que el índice está fuera del rango válido
        return "Error: El índice especificado no existe en el array de palabras.";
    }
}

const indice = 1;

const resultado = obtenerLongitudDePalabra (phrase, indice);
console.log("La longitud de la palabra seleccionada es",resultado);

const eliminarPalabraPorIndice = (frase, index) => {
    const palabras = frase.split(' ');

   palabras.splice(index, 1);

    
    const fraseModificada = palabras.join(' ');

    
    return fraseModificada;
}



const phraseModif = eliminarPalabraPorIndice(phrase, 1);






