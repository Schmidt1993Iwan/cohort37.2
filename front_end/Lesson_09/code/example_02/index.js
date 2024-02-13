const arrName = [1, 2, 3, 4, "a", null, undefined, NaN, [1, 2]];

// for (let i=0; i< arrName.length; i++){
//     console.log(arrName[i]);
// }

//for ( let i = arrName.length -1; i >= 0; i-- ) {
// console.log(arrName[i]);
 //}

 
// const arrTwo= [];
// for ( let i = arrName.length -1; i >= 0; i--){
//     arrTwo.push(arrName[i]);
// }
// console.log(arrTwo);

let i = 0;
while (i < arrName.length){
    console.log(arrName[i]);
    i++;
}

const sArray = [1, 2, 3, 4, 5, 6];
const [a, b, ...c] = sArray; // Разобрать массив на части и присвоили каждый элемент массива к переменной
// const a = sArray[0];
// const b = sArray[1];
// const c = sArray[2];

// const copyArray = sArray;
// sArrayp[0] = "a";
// console.log(sArray);
// console.log(copyArray);

const copyArray = [...sArray];
console.log(...sArray);
console.log(c); // c = 3, 4, 5, 6
