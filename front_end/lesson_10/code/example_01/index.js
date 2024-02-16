const sum =  function(a, b){ // function expression
return a + b;
}


// const resultSum = sum(1, 5);
// console.log(sum(1));

const resultSumA = sum(1, 5);
console.log(resultSumA);



function sumA(a, b){ //function deklaration
return (a + b);
}
// return(a);
// }
// const resultSum = sum(1, 5);
// console.log(sum(1));
///////////////////////////////////////////////


const sumAr = (a, b) => { // стрелочная функция
    console.log("Hi");
    return a + b;
}
console.log(sumAr(5,2));
// const summa = sumAr(5,3);
// console.log(summa);


//const sumAr = (a, b) => a + b;
// const summa = sumAr(5,3);
// console.log(summa);


// const pow = a => a**a; // const pow = (a) => a**a;
// const powRes = pow(3); // 3**3
// console.log(powRes);


const print = () => 'Hello'; // тоже самое, что    const print = () => {return 'Hello'};
const printRes = print();
console.log(printRes);