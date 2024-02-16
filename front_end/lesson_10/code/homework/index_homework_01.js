function whatIsNumber (number){
    let zNumber = Math.floor(number);
    if (number % 2 === 0) {
        return (number + " - is even");
    }
    if(number % 2 !== 0){
        return( number + " - is odd");
    }
}

console.log(whatIsNumber(9));