//template string / repeat
const nameA = 'John';
const stringA = `Меня зовут ${nameA}`;


//Classes
class Player {

    constructor(name, weight, height, resultat){
    this.height = height;
    this.weight = weight;
    this.resultat = resultat;
    this.name = name;
    }
    makeGoal(){
        console.log('GOAL!!!');
    }
}

// Player.prototype.makeGoal = function() {
//     console.log(`${this.name} making a Goal!!!`);
// }

const playerJohn = new Player ('John', 88, 180, 3.5);

// const playerMike = new Player ('Mike', 95, 175, 3);
// console.log(playerJohn.makeGoal === playerMike.makeGoal);
console.log(playerJohn);

playerJohn.makeGoal();


class ChessPlayer extends Player {
    constructor (name, weight, height, speed){
        super(name, weight, height, null)
        this.speed = speed;
    }

    makeStep(){
        console.log('I am making a step');
        super.makeGoal();
    }
    makeGoal(){
        super.makeGoal();
        console.log('This was chessmate')
        console.log('Falling');

    }

    static theBetterPlayer(chessPlayer1, chessPlayer2){
        return chessPlayer2.speed < chessPlayer1.speed ? chessPlayer2 : chessPlayer1 ;
    }
}


const harry = new chessPlayer('Harry', 78, 175, 3);
const karlson = new chessPlayer('Magnus', 78, 180, 1);
// harry.makeStep();
// harry.makeGoal();
console.log(chessPlayer.theBetterPlayer(harry, karlson));



