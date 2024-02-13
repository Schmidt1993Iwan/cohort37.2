const newArray = [];
for(let i = 0; i<10 ; i++){
    newArray.push(Math.round((Math.random()*100)+1));
}
console.log(newArray);

let sum=0;
for(let i=0; i<newArray.length; i++){
    sum+=newArray[i];
}
console.log(sum);