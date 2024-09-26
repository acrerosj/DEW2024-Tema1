const someTempSubZero = (...temps) => temps.some(t => t<0);

console.log(someTempSubZero(22, 5, 13, 0, 35));
console.log(someTempSubZero(15, 3, -4, 8, -2, 10, 14, 16));
console.log(someTempSubZero());