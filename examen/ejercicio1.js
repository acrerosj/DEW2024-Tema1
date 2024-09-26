const fahrenheitToCelcius = (temperatures) => temperatures.map(temp => (temp - 32) * 5/9);

console.log(fahrenheitToCelcius([68, 50, 46.4, 39, 90]));
console.log(fahrenheitToCelcius([20, 0, -10]));
console.log(fahrenheitToCelcius([]));