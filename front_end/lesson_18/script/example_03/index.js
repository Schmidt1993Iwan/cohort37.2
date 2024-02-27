const human = {
    height: 180,
    weight: 80,
    sing() {
        console.log('I am')
    }
}

const player = {
    resultat : 2.5,
    __proto__: human
  
}


// for(let property in player){ // property ключи в объекте
//     // console.log(property);
// }

// console.log(player.hasOwnProperty('resultat'));// возвращает true или false

for ( let property in player){
    if(player.hasOwnProperty(property)){
        console.log(property);
    }
    
}
// console.log(property)




const Array = (arr) => {
    const nameWithA = arr.filter(element.toLowerCase().includes('a'))
    return nameWithA
}
console.log(filteredNames())
