const inputSummCurrency = document.querySelector('#currency');
const selectCurrency1 = document.querySelector('#buyCurrency');
const selectCurrency2 = document.querySelector('#typeCurrency2');
const output = document.querySelector('#output');
const button = document.querySelector('#click1');
let change1 =0;
let change2 =0;
let change3 =0;
let summ =0;


// const factorOfEuroToDollar = 1.08;
// const factorOfEuroToGBP = 0.86;
// const factorOfDollarToEuro = 0.92;
// const factorOfDollarToGBP = 0.794;
// const factorOfGBPToEuro = 1.17;
// const factorOfGBPToDollar = 1.26;

const factorOfEuro = 1;
const factorOfDollar = 0.88;
const factorOfGBP = 1.2;

const funk = (evt) =>{
    if (evt.target.value==="Euro") {
        change1 = factorOfEuro;
    }
    if (evt.target.value==="Dollar") {
        change1 = factorOfDollar;
    }
    if (evt.target.value==="GBP") {
        change1 = factorOfGBP;
    }
    console.log(change1)
}
selectCurrency1.addEventListener('change', funk);

const funk2 = (evt) =>{
    if (evt.target.value==="Euro") {
        change2 = factorOfEuro;
    }
    if (evt.target.value==="Dollar") {
        change2 = factorOfDollar;
    }
    if (evt.target.value==="GBP") {
        change2 = factorOfGBP;
    }
    console.log(change2);
}
selectCurrency2.addEventListener('change', funk2);

const funk3 = (evt) =>{
    if (evt.target.value==="Euro") {
        change2 = factorOfEuro;
    }
    if (evt.target.value==="Dollar") {
        change2 = factorOfDollar;
    }
    if (evt.target.value==="GBP") {
        change2 = factorOfGBP;
    }
    console.log(change2);
}
selectCurrency2.addEventListener('change', funk3);



const submitSumm = (evt) => {
    summ = evt.target.value;
    console.log(summ);
}
inputSummCurrency.addEventListener('input', submitSumm);

let summOfchange2 =0;
const calc = (evt) => {
    evt.preventDefault();
    summOfchange2 = (summ/change1)*change2;
    console.log(summOfchange2);
    output.textContent = summOfchange2;
}
button.addEventListener('click', calc);
