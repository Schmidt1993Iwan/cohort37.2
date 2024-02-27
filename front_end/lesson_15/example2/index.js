const arr = [1, 2, 3, 5, 7, 11, 17, 21];

const arrPlusTwo = (array) => {
const newArr = [];
for ( let i = 0; i < array.length; i++){
    newArr[i] = array[i] + 2;
}
return newArr;
}

console.log(arrPlusTwo(arr));


// const newArrMap = {
    //arr.map((elem) =>  elem + 2);
        //(elem) => { return elem + 2}
//вернет массив с прибавленным числом 2 к каждому элементу массива


const newArrMap = arr.map(
//arr.map((elem) =>  elem + 2);
    //(elem) => { return elem + 2}

    // example 2
    //arr.map(
       (elem, i) => {return  elem + i} // (elem, i) = elem элемент массива , i индекс массива
        //вернется массив с прибавленным номером индекса к самому индексу 
);

  
console.log(newArrMap);



