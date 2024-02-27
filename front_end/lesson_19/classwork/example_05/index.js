const parts = ['wheel', 'engine', 'fender', 'glass'];

const carPartsElements = document.querySelector('ul');

const arrToList = (array) => {
    carPartsElements.innerHTML= ''; // стирает все, что есть в переменной, перед тем как продолжим с ней работать
    const temp = array.map(element =>{
        const newListItem = document.createElement('li'); // создаем элемент листа и присваевываем в переменную
        newListItem.textContent = element; // сохраняем в переменную newListItem тип данных textContent, вводится элемент массива array
        return newListItem;

    })
carPartsElements.append(...temp); //append добавляем

};

arrToList(parts);