// const secondItemElem = document.querySelector('#second-item');
// const secondItemElemClick = () => {
//     secondItemElem.classList.toggle('list-item_done'); //add / remove / toggle
//     // secondItemElem.style.backgroundColor = 'blue';
// }
// secondItemElem.addEventListener('click', secondItemElemClick);

//--------------------------

// Находим форму по её идентификатору
const bmiForm = document.querySelector('#bmi-form');

//---------------------------------------

//Находим элемент страницы по id height
const inputElementHeight = document.querySelector('#height');
let userInputHeight;

const inputElementWeight = document.querySelector('#weight');
let userInputWeight;


const inputHeightHandler = (evt) =>{
    userInputHeight = evt.target.value;
    // console.log(userInputHeight);
}
inputElementHeight.addEventListener('input', inputHeightHandler);



const inputWeightHandler = (evt) =>{
    userInputWeight = evt.target.value;
    console.log(userInputWeight);
}
inputElementWeight.addEventListener('input', inputWeightHandler);



const handlerClick = (evt) => {
    evt.preventDefault();
    console.log(userInputHeight, userInputWeight);
    console.log(calculateBMI(userInputHeight, userInputWeight)); // рассчитали коэфф
    console.log(displayBMIresult);
    textResultElement.textContent = "100";
    textStatusElement.textContent = "grjge";
}

const createButtonElement = document.querySelector('#click');
createButtonElement.addEventListener('click', handlerClick);

const textResultElement = document.querySelector('#bmi-value');
// create textResultElement.addEventListener('click', ); 
console.log(textResultElement);

const textStatusElement = document.querySelector('#bmi-result'); 
// create textStatusElement.addEventListener
console.log(textStatusElement);




function calculateBMI(height, weight) {
    // Формула BMI: вес/рост * рост
    const heightInMeters = height / 100; // перевоод сантиметры в метры.
    return weight / (heightInMeters * heightInMeters);
}

//Недостаточный вес: ИМТ менее 18,5. 
//Нормальный вес: ИМТ от 18,5 до 24,9. 
//Избыточный вес: ИМТ от 25 до 29,9. 
//Ожирение: ИМТ от 30 и выше.
// Функция для result
function displayBMIresult(bmi) {
    let result = '';
    if (bmi < 18.5) {
        result = 'Недовес';
    } else if (bmi >= 18.5 && bmi < 25) {
        result = 'Нормальный';
    } else if (bmi >= 25 && bmi < 30) {
        result = 'Лишний вес';
    } else {
        result = 'Ожирение';
    }

    // Вывод вердикта BMI на странице
    document.getElementById('bmi-result').textContent = 'Ваш вес и состояние: ' + result;

}

// } else {
//     alert('Введите корректные значения!');
// }