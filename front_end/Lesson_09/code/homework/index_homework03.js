const newArray = [];
for(let i = 0; i<10 ; i++){
    newArray.push(Math.round((Math.random()*100)+1));
}
console.log(newArray);

let maxValue = newArray[0];
let minValue = newArray[0];

for(i=0; i<newArray.length; i++){
    if(newArray[i]>maxValue){
        maxValue=newArray[i];
    }
    if(minValue[i]< minValue){
        minValue=newArray[i];
        }
}

console.log("maxValue is " + maxValue);
console.log("minValue is " + minValue);
let sum = maxValue + minValue;
console.log(sum);