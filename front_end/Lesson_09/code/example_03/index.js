const sentence = "Сегодня, мы изучаем, loops";

// console.log(sentence.length); //Длина предложения
// console.log(sentence[1]); // Элемент массива
// console.log(sentence.toLowerCase()); // все маленькими буквами
// console.log(sentence.toUpperCase()); // все большими буквами

// console.log(sentence.split(' ')); //разбивка по ' пробелу '
// console.log(sentence.substring(0,7));

// const tempVar = sentence.split(',');
// console.log(tempVar);
// console.log(...tempVar);

for(let i=0; i< sentence.length; i++){
    if(sentence[i]===','){
        sentence[i]= '';
    }
}

// const tempVar = sentence.replaceAll(',', '');
// console.log(tempVar);
// console.log(tempVar.split(' '));
// console.log(tempVar);

// let newSentences = '';

// for(let i = 0; i < sentence.length; i++){
//     if(sentence[i] !==  ","){
//         newSentences += sentence[i];
//     }
// }

console.log(sentence);