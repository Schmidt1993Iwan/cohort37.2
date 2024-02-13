const sentence = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";
for(let i=0; i<sentence.length; i++){

    if(sentence[i] !== ','  && sentence[i]!== ':' && 
    sentence[i]!== "."  && sentence[i]!== ' '){
       temp+=sentence[i];
    }
   
}
console.log(temp);