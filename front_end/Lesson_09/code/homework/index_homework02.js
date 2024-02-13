const arrNumbers = [10, 15, 13, 8, 100, 45, 67, 24, 40, 90];
let shiftNumber = arrNumbers.shift();
console.log(shiftNumber);
console.log(arrNumbers);

arrNumbers.push(shiftNumber);
console.log(arrNumbers);