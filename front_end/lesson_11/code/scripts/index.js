

const secondItemElem = document.querySelector('#second-item');
// console.log(secondItemElem);
// console.log(secondItemElem.classList);

const secondItemElemClick = () => {
    // secondItemElem.classList.toggle('list-item_done');//add /remove / toggle
    secondItemElem.style.backgroundColor = 'blue';
}

secondItemElem.addEventListener('click', secondItemElemClick);

