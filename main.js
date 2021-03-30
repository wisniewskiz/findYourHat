const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let stillPlaying = true;
let playerPosX = 0;
let playerPosY = 0;

///////////////////////////////////////
//CREATING FIELD CLASS////////////////
/////////////////////////////////////
class Field {
    constructor(field) {
        this._field = field;
    }
    print() {
        for (let line of this._field) {
            console.log(line.join(' '));
        }
    }

    static generateField(height, width, numHoles) {
        let newField = [];
        for (let h = 0; h < height; h++) {
            newField.push([])
            for (let w = 0; w < width; w++) {
                newField[h].push(fieldCharacter);
            }
        }
        for (let n = 0; n < numHoles;) {
            let coordX = Math.floor(Math.random() * height);
            let coordY = Math.floor(Math.random() * width);
            if (coordX != 0 && coordY != 0 && newField[coordX][coordY] != hole) {
                newField[coordX][coordY] = hole;
                n++;
            }
        }
        for (let h = 0; h < 1;) {
            let coordX = Math.floor(Math.random() * height);
            let coordY = Math.floor(Math.random() * width);
            if (newField[coordX][coordY] != hole && coordX != 0 && coordY != 0) {
                newField[coordX][coordY] = hat;
                h++;
            }
        };
        newField[0][0] = pathCharacter;

        return newField;
    };
};

///////////////////////////////////////
//GENERATING GAME FIELD///////////////
/////////////////////////////////////
let gameField = new Field(Field.generateField(5, 5, 3));
gameField.print();

///////////////////////////////////////
//CREATING GAME LOGIC/////////////////
/////////////////////////////////////
console.log('Directions to move are: (u)p, (l)eft, (d)own, or (r)ight? \n');
while (stillPlaying) {
    let userDirection = prompt('Which Direction would you like to move?  : ');
    
    if(userDirection === 'u') {
        playerPosY = playerPosY - 1;
        if(playerPosY < 0) {
            console.log('You fell of the game field. Game over');
            stillPlaying = false;
        } else if(gameField._field[playerPosY][playerPosX] === hole) {
            console.log('You fell into a hole. Game over');
            stillPlaying = false;
        }else if (gameField._field[playerPosY][playerPosX] === hat) {
            console.log('YOU WON! CONGRATULATIONS');
            stillPlaying = false;
        }  else{
            gameField._field[playerPosY][playerPosX] = pathCharacter;
            gameField.print();
        };
    };
    if(userDirection === 'd') {
        playerPosY = playerPosY + 1;
        if(playerPosY > (gameField._field.length - 1)) {
            console.log('You fell of the game field. Game over');
            stillPlaying = false;
        } else if(gameField._field[playerPosY][playerPosX] === hole) {
            console.log('You fell into a hole. Game over');
            stillPlaying = false;
        } else if (gameField._field[playerPosY][playerPosX] === hat) {
            console.log('YOU WON! CONGRATULATIONS');
            stillPlaying = false;
        } else{
            gameField._field[playerPosY][playerPosX] = pathCharacter;
            gameField.print();
        };
    };
    if(userDirection === 'l') {
        playerPosX = playerPosX - 1;
        if(playerPosX < 0) {
            console.log('You fell of the game field. Game over');
            stillPlaying = false;
        } else if(gameField._field[playerPosY][playerPosX] === hole) {
            console.log('You fell into a hole. Game over');
            stillPlaying = false;
        }else if (gameField._field[playerPosY][playerPosX] === hat) {
            console.log('YOU WON! CONGRATULATIONS');
            stillPlaying = false;
        }  else{
            gameField._field[playerPosY][playerPosX] = pathCharacter;
            gameField.print();
        };
    };
    if(userDirection === 'r') {
        playerPosX = playerPosX + 1;
        if(playerPosX > (gameField._field[playerPosX].length - 1)) {
            console.log('You fell of the game field. Game over');
            stillPlaying = false;
        } else if(gameField._field[playerPosY][playerPosX] === hole) {
            console.log('You fell into a hole. Game over');
            stillPlaying = false;
        }else if (gameField._field[playerPosY][playerPosX] === hat) {
            console.log('YOU WON! CONGRATULATIONS');
            stillPlaying = false;
        }  else{
            gameField._field[playerPosY][playerPosX] = pathCharacter;
            gameField.print();
        };
    };
};










