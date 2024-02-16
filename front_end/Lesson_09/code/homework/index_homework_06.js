const sentence = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";
let temp = "";
for(let i=0; i<sentence.length; i++){

    if(sentence[i] !== ','  && sentence[i]!== ':' && 
    sentence[i]!== "."){
       temp+=sentence[i];
    }
   
}

const newArray = temp.split(" ");
console.log(newArray);

for(let i = 0; i < newArray.length; i++){
    console.log(newArray[i]);
}
