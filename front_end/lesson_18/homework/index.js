// Задание 1
// Написать функцию, которая принимает на вход массив имен 
// и возвращает массив имен, начинающихся на букву "а" (большую или маленькую).


// function name(john){
// let result = john.startsWith('a') || john.startsWith('A');
// return result;
// }
// console.log(name('Andrew'));

function name(john){
    let result = john.toLowerCase().startsWith('a') ;
    return result;
    }
    console.log(name('Amanda'));



