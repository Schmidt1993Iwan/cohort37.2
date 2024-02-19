const thirthItemElem = document.querySelector('#input-field');
const secondItemElem = document.querySelector('#input-field');
const inputElement = document.querySelector('#input-field');
// console.log(inputElement);
let userInput;

const inputFieldInput = (evt) => {
    userInput = evt.target.value;
    console.log(userInput);
}

inputElement.addEventListener('input', inputFieldInput);

const createButtonElement = document.querySelector('button.btn');

const submitButtonHandler = (evt) => {
    console.log(evt);
    testTextElement.textContent = userInput;
}

createButtonElement.addEventListener('click', submitButtonHandler);
////////////////////////////////////////////////////////////
const testTextElement = document.querySelector('#text');
// console.log(testTextElement);

