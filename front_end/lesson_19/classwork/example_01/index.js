// Написать функцию, принимающую масив, где могут быть вложенные массивы. 
// Вернуть нужно “плоский массив”. 
// Например:
// На вход [1, 5, [67, 78, 34], 12, 14]
// Должна вернуть [1, 5, 67, 78, 34, 12, 14]
// Array.isArray



// const array = [1, 5, [67, 78, 34], 12, 14];

// function newArray (array){
//     return array.flat();
// }
// const result = newArray(array);
// console.log(result);




// const flatArr = (arr) => {
//     const newArr = [];
//     arr.forEach((element => {
//         if (Array.isArray(element)){
//             element.forEach(subelement => {
//                 newArr.push(subelement);
//             });;
//         }else{
//             newArr.push(element);
//         }
       
// }))
// return newArr;
// }

// console.log(flatArr(nummbersArr));



const arrayC = [1, 2, 3];
console.log(...arrayC);
const objC = {a:1, b:2};
const objCa = {...objC, c:3};
// console.log(...[1,2,4]);
console.log(objCa);