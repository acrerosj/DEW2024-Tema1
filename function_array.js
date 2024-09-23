// Ejercicio Par/Impar
// Crea una función llamada evenOrOdd que recibe como argumento un array de números y devuelve otro array de Strings con las palabras "Even" o "Odd" indicando si el número de esa posición es par o impar.

// Por ejemplo, con la entrada [2, 5, 7, 0, 16]

// Devolverá ["Even", "Odd", "Odd", "Even", "Even"]

// function evenOrOdd(list) {
//     let result = [];
//     for (let i=0; i<list.length; i++) {
//         if (list[i]%2==0) result[i]="Even";
//         else result[i]="Odd";
//     }
//     return result;
// }

// function evenOrOdd(list) {
//     let result = [];
//     for (let i=0; i<list.length; i++) {
//         result[i] = list[i]%2==0 ? "Even" : "Odd";
//     }
//     return result;
// }

// function evenOrOdd(list) {
//     return list.map( n => n%2==0 ? "Even" : "Odd" )
// }

const evenOrOdd = (list) => list.map( n => n%2==0 ? "Even" : "Odd" );

console.log(evenOrOdd([2, 5, 7, 0, 16]));

// Ejercicio Sumar Números
// Crea una función llamada sumNumbers que recibe como argumento un número indeterminado de números y devuelve un número con la suma de todos ellos.

// Por ejemplo, con la entrada sumNumbers(1,2,3,4)

// Devolverá 1

function sumNumbers(...list) {
    return list.reduce( (a,n) => a+=n);
}

function sumNumbers2(...list){
    let a = list[0];
    for (let i=1; i<list.length; i++) {
        a += list[i];
    }
    return a; 
}
console.log(sumNumbers2(1,2,3,4,5));

// Ejercicio Sumar Positivos
// Crea una función llamada sumPositives que recibe como argumento un número indeterminado de números y devuelve un número con la suma de todos los que son positivos. Es decir, los negativos los ignora.

// Por ejemplo, con la entrada sumPositives(1,-2,-3,4)

// Devolverá 5

function sumPositives(...list) {
    return list.filter( n => n>=0 )
        .reduce( (a,n) => a+=n);
}

console.log(sumPositives(1,-2,-3,4));

// Ejercicio Sumar Cubos
// Crea una función llamada sumCubes que recibe como argumento un número y devuelve un número con la suma de todos cubos empezando por el 1 y acabando en ese número. 

// Por ejemplo:

// sumCubes(2) Debe hacer la suma de 1**3+2**3=9
// sumCubes(4) Debe hacer la suma de 1**3+2**3+3**3+4**3=100;

function sumCubesT(n) {
    let result = 0;
    for(let i=1; i<=n; i++) {
        result += i**3; 
    }
    return result;
}

function sumCubes(n) {
    return Array(n).fill(0).map((n,i) => i+1).reduce( (a,n) => a+=n**3);
} 

console.log(sumCubes(2));
console.log(sumCubes(4));

// Ejercicio Cuadrado de cada dígito
// Crea una función llamada squareDigits que recibe como argumento un número y devuelve un número que se forma al unir todos los cuadrados de cada dígito.

// Por ejemplo:

// squareDigits(213) Debe hacer los cuadrados de cada dígito: 2**2=4, 1**2=1, 3**2=9. Devolverá: 419
// squareDigits(90345) Debe hacer los cuadrados de cada dígito: 9**2=81, 0**2=0, 3**2=9, 4**2=16, 5**2=25. Devolverá: 81091625

function squareDigits(n) {
    let numberStr = n.toString();
    let numberArray = numberStr.split('');
    return numberArray.reduce( (a,n) => a+=n**2, ""); 
}

console.log(squareDigits(213));
console.log(squareDigits(90345))

// Ejercicio Categorizar programadores
// Se quiere categorizar un listado de programadores entre Juniors y Seniors basándonos en su experiencia como programador (meses) y la cantidad de lenguajes que domina.

// Se puede calificar de programador Seniors aquel que ha trabajado 24 meses o más y domina más de 2 lenguajes de programación.

// Por ejemplo: un programador con 21 meses de experiencia y que domina 4 lenguajes se representa con el array [21,4] y es Junior porque le faltan 3 meses de experiencia.

// Crea una función llamada categorizeProgrammers que recibe como argumentos un número indeterminado arrays de 2 elementos (que representan a un programador). El programa devolverá un array con los strings "Junior" o "Senior" indicando la categoría del programador de esa posición.

// Por ejemplo:

// categorizeProgrammers([10,1], [21,4],[42,3],[24,4],[30,2],[24,3]) Devolverá: ["Junior","Junior","Senior","Senior","Junior","Senior"]

function categorizeProgrammers(...programers) {
    return programers.map( programer => (programer[0]>=24 && programer[1]>2) ? "Senior" : "Junior");
}

console.log(categorizeProgrammers([10,1], [21,4],[42,3],[24,4],[30,2],[24,3]));

// Ejercicio Persistencia de un número
// La persistencia de un número consiste en averiguar cuantas veces puedes multiplicar sus dígitos hasta conseguir un único dígito.

// Por ejemplo:

//  persistence(39) es 3 // porque podemos ir multiplicando los dígitos 3 veces:

//  3*9 = 27
//  2*7 = 14, 
//  1*4= 4     // 4 ya sólo tiene un dígito.
// persistence(999) es 4 /

// 9*9*9 = 729, 
// 7*2*9 = 126,
// 1*2*6 = 12
// 1*2 = 2  // 2 ya sólo tiene un dígito
// persistence(8) es 0 // porque 8 ya es un dígito solo.

// Crea una función llamada persistence que recibe como argumento un número y devuelva la persistencia de dicho número.

// Por ejemplo:

// persistence(39). Devolverá: 3
// persistence(999). Devolverá: 4 
// persistence(4). Devolverá: 0 

function persistence(n) {
    if (n<10) return 0;
    return 1+persistence(n.toString().split('').reduce( (a,n) => a*=n));
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
console.log(persistence(1111111111));