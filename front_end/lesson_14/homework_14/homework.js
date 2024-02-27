// Задание 1.
// Напишите фукнцию, которая будет принимать массив. 
// Массив может содержать любые строки и числа. 
// Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. 
// Пример работы функции:
// ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

const array1 = ['a', 36.6, 'John Doe'];

const result = (array1) => {
    let object1 = {};
    for( let i = 0; i<array1.length; i++){
        object1[array1[i]]= array1[i];
    }
 return object1;
}
console.log(result(array1));



// Задание 2.
// Напишите функцию, которая превратит массив , 
// который содержит элементы в виде массивов из двух элементов, в объект. 
// Первый элемент каждого внутреннего массива ключ, второй - значение. 
// Например такой:
// [
//   [ 'height', 170 ],
//   [ 'weight', 80 ],
//   [ 'sport', 'regbi' ],
//   [ 'full name', 'John Doe' ],
//   [ 'sing', 'love' ],
//   [ 'speed', 90 ]
// ]

const array = [
    [ 'height', 170 ],
    [ 'weight', 80 ],
    [ 'sport', 'regbi' ],
    [ 'full name', 'John Doe' ],
    [ 'sing', 'love' ],
    [ 'speed', 90 ]
];

function arrToObject(arr){
    let obj = {};
    for( let i=0; i<array.length; i++){
        let element1 = arr[i][0];
        let element2 = arr[i][1];
        obj [element1] = element2;
    }
    return obj;
}
console.log(arrToObject(array));



// Задание 3.
// Функция должна принимать объект и возвращать строку, где будут перечислены 
// все значения свойств объекта через запятую.
// Пример работы функции:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'

const getValueInString = (obj) => {
    const arrOfValues = Object.values(obj);
    console.log(arrOfValues.join(', '));
}
getValueInString({a: 'a', '36.6': 36.6, 'John Doe': 'John Doe'});