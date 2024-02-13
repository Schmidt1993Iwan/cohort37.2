const arrNumbers = [];

for(let i=0; i<10; i++){
    arrNumbers.push(Math.round((Math.random()*100)+1));
}
console.log(arrNumbers);

let maxValue = arrNumbers[0];
let minValue = arrNumbers[0]; 


for( let i=0; i<arrNumbers.length; i++){
    if( arrNumbers[i] > maxValue){
    maxValue = arrNumbers[i];
}
    if(arrNumbers[i] < minValue){
    minValue = arrNumbers[i];
    }
}

console.log(maxValue);
console.log(minValue);