const wordsLengthFilter = (text, ...lengths) => text.split(' ').filter( word => lengths.includes(word.length)).join(' ');

console.log(wordsLengthFilter('Primero resuelve el problema y después escribe el código', 8));
console.log(wordsLengthFilter('Siempre escribe tu código como si la persona que lo fuera a mantener fuera un peligroso psicópata que sabe quien eres y donde vives', 9))
console.log(wordsLengthFilter('Para entender la recursividad hay que entender lo que es la recursividad', 4, 3, 8))
console.log(wordsLengthFilter('Es más difícil leer código que escribirlo'))