const phrase = "La mejor forma de predecir el futuro es creándolo"

 let selectWordLength = (text,index) => {
    const WordsArray = text.split(" ");
    if (index >=0 && index < WordsArray.length) {
        const selectWord = WordsArray[index];
        const wordString = String(selectWord);
        const wordLength = wordString.length;
        return wordLength;
    } else {
        return "Error: El indice especificado no existe en el array de palabras.";
    }
}

// 1.- Llamado 
console.log("La longitud de caracteres en la palabra selecionada es:", selectWordLength(phrase,1));

let deleteWordInPhrase = (text,index) => {
    const arrayPhrase = text.split(" ");
    const deleteWord = arrayPhrase.splice (index,1);
    const joinPhrase = arrayPhrase.join(" ");
    return joinPhrase; 
} 

// 2.- Llamado
console.log("La frase eliminando el index seleccionado es la siguiente:", deleteWordInPhrase(phrase,1))

let filterWords = (text) => {
    const splitWords = text.split(" ");
    const wordsLength = splitWords.map(word => word.length);
    const filteredWords = splitWords.filter((word, index) => wordsLength[index] >= 3);
    const filterPhrase = filteredWords.join(" ")
    return filterPhrase
} 

//3.- Llamado 
console.log("La frase con el filtro aplicado es la siguiente:",filterWords(phrase))


let reversePhrase = (text) => text.split("").reverse().join("");

// 4.- Llamado 
console.log("La frase ivertida es la siguiente:",reversePhrase(phrase));






