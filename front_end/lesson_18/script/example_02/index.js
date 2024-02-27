// Constructors

function Player(name, weight, height, resultat){
    this.height = height;
    this.weight = weight;
    this.resultat = resultat;
    this.name = name;
    // this.makeGoal = function() {
    //     console.log('Goal!!!')
    // }
}

Player.prototype.makeGoal = function() {
    console.log(`${this.name} making a Goal!!!`);
}

const playerJohn = new Player ('John', 88, 180, 3.5);

const playerMike = new Player ('Mike', 95, 175, 3);
console.log(playerJohn.makeGoal === playerMike.makeGoal);
console.log(playerJohn);







