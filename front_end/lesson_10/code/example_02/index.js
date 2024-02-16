// const sum = (a = 2, b ) => a + b;
// const sumResult = sum(5);
// console.log(sumResult);

const multiply = (a,b) => a*b;
const pow = (a, b) => a ** b;


const universal = (a, b, f) => { 
    return f(a, b);
}

console.log(universal(3, 2, multiply)); //call back function
console.log(universal(3, 2, (a, b) => a / b));


///////////////////////////////////////////////////////
// Написать функцию "hello" которая принимает строку, и колбек функцию.
// И колбек функция должна выполниться с первым аргументом (строкой), и 
//результат ее выполнения должен вернуться из функции "hello"

const hello = (str,f) => {
    return f(str);
}

//Теперь вызовим функцию hello и передадим ей свое 
//имя и стрелочную функцию, которая принимает строку и возвращает строку "Привет" *строка аргумент*
const iwan = (str) => "Привет " + str;
const str2 = hello ("Iwan", str => "Привет " + str);

console.log(iwan("Iwan")) ;

////////////////////////////////

// function example(a, b){
//     return(a + b);
// }
// let a = 39;
// let b = 12;

// example(a,b);

function example2(a,f){
    let temp = f(a);
    return(temp);
}
console.log(example2(13.131314,Math.ceil));


