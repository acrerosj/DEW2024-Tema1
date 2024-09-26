const countDigit = (...digits) => {
    const counter = new Array(10).fill(0);
    digits.forEach(d => counter[d]++);
    return counter;
}

console.log(countDigit(4,5,2,3,2,2,0,6,5,2))
console.log(countDigit(1,2,2,3,3,3,4,4,4,4,5,5,5,5,6,6,6,7,7,8))
console.log(countDigit());
console.log(countDigit(9,8,7,6,5,4,3,2,1,0));