////////////////////////////
function double (a){
return a * 2;
}
//////////////////////////////////////
function powMe (a) {
return a * a;
}


////////////////////////////////////////
function evenOrNot(number){
if( number % 2 === 0){
    return double;
}
if( number % 2 !== 0 ){
    return powMe;
}
}
console.log(evenOrNot(8));
