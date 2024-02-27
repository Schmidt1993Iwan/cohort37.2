// Функция принимает массив с перечнем свойств (ключей),  
// а также массив с обьектами. Нужно вернуть массив с с обьектами, 
// у которых есть только ключи из первого аргумента.

// [‘name’, ‘age’]


// Пример массива
// [
//   {name: "Anna", surname: "Schmidt", age: 25, weight: 60, gender: "female"},
//   {name: "Max", surname: "Müller", age: 32, weight: 75, gender: "male"},
//   {name: "Lena", surname: "Meier", age: 28, weight: 65, gender: "female"},
//   {name: "Tom", surname: "Schneider", age: 35, weight: 80, gender: "male"},
//   {name: "Lisa", surname: "Fischer", age: 22, weight: 55, gender: "female"},
//   {name: "Jan", surname: "Weber", age: 30, weight: 70, gender: "male"},
//   {name: "Julia", surname: "Wagner", age: 27, weight: 58, gender: "female"},
//   {name: "Ben", surname: "Schulz", age: 33, weight: 78, gender: "male"},
//   {name: "Sara", surname: "Hoffmann", age: 24, weight: 52, gender: "female"},
//   {name: "Tim", surname: "Klein", age: 31, weight: 72, gender: "male"}
// ]

// На выходе должно получиться
// [
//     {name: "Anna", age: 25},
//     {name: "Max", age: 32},
//     {name: "Lena", age: 28},
//     {name: "Tom", age: 35},
//     {name: "Lisa", age: 22},
//     {name: "Jan", age: 30},
//     {name: "Julia", age: 27},
//     {name: "Ben", age: 33},
//     {name: "Sara", age: 24},
//     {name: "Tim", age: 31}
//   ]

const array1 = ['name', 'age'];
const array2 = [
    {name: "Anna", surname: "Schmidt", age: 25, weight: 60, gender: "female"},
    {name: "Max", surname: "Müller", age: 32, weight: 75, gender: "male"},
    {name: "Lena", surname: "Meier", age: 28, weight: 65, gender: "female"},
    {name: "Tom", surname: "Schneider", age: 35, weight: 80, gender: "male"},
    {name: "Lisa", surname: "Fischer", age: 22, weight: 55, gender: "female"},
    {name: "Jan", surname: "Weber", age: 30, weight: 70, gender: "male"},
    {name: "Julia", surname: "Wagner", age: 27, weight: 58, gender: "female"},
    {name: "Ben", surname: "Schulz", age: 33, weight: 78, gender: "male"},
    {name: "Sara", surname: "Hoffmann", age: 24, weight: 52, gender: "female"},
    {name: "Tim", surname: "Klein", age: 31, weight: 72, gender: "male"}
  ]

  function arrays (array1, array2){
    const result = array2.map 
    (element => {
        element.hasOwnProperty(array1);

    })
    return result;
   
}
       
       
       
       
      
