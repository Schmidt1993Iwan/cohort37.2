// Задание 1
// Написать функцию, которая принимает на вход 2 объекта, 
// и склеивает их в один, на выходе долежн быть объект, 
// который содержит все свойства обоих объектов. 
// Если свойства(ключи) во входящих обьектах повторяются, 
// то взять значение из второго объекта.

const obj1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5'
  };

  const obj2 = {
    key3: 'new_value3',
    key4: 'new_value4',
    key5: 'new_value5',
    key6: 'value6',
    key7: 'value7'
  };

  let obj3 = {};
  
  function allObjects (obj1, obj2){
    

    for( let element in obj1){
        obj3[element] = obj1[element];
    }

    for( let element in obj2){
        obj3[element] = obj2[element];
    }

    return obj3;

  }

  console.log(allObjects(obj1, obj2));




