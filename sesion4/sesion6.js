const phrase = "La mejor forma de predecir el futuro es creándolo"

let phraseLen = (phrase) => {
console.log("La frase tiene", phrase.length, "caracteres");
}

phraseLen(phrase);

let phraseLetters = (phrase) => {
const phraseNoSpace =  phrase.replace(/\s/g, '');
    console.log("Esta frase esta formada por", phraseNoSpace.length, "letras");
}

phraseLetters(phrase);

let phraseTUC = (phrase) => {
    console.log(phrase.toUpperCase())
}

phraseTUC(phrase); 

let phraseRep = (phrase) => {
    const phraseRepA = phrase.replace(/a/g, "4")
    console.log(phraseRepA)
} 

phraseRep(phrase);

let countWords = (phrase) => {
    const WordsSplit = phrase.split(/\s+/)
    const wordsLength = WordsSplit.length
    console.log("La frase tiene", wordsLength, "palabras" )
}

countWords(phrase);