//прототипное наследование

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
    // sing() {
    //     console.log('I am')
    // }
}
console.log(player.sing === human.sing);



//getter & setters

const playerJohn = {
    name : "John",
    surname: "Doe",
    get fullName() {
        return `${this.name} ${this.fullName}`
    
    },
    set fullName(value) {
    const[firstName, lastName] = value.split(' ');
    this.name = firstName;
    this.surname = lastName;
    }
}

playerJohn.fullName = 'Johnny Depp';

// console.log(playerJohn.fullName);

//установка прототипа

Object.setPrototypeOf(player, human); // устанавливает протип второго элемента к первому
console.log(player)




