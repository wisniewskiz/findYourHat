const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let stillPlaying = true;
let playerPosX = 0;
let playerPosY = 0;


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
        for (let n = 0; n < numHoles; n++) {
            newField[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)] = hole;
        }
        if (newField[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)] = hat) { };
        if (newField[0][0] = hole) {
            newField[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)] = hole;
            newField[0][0] = pathCharacter;
        } else {
            newField[0][0] = pathCharacter;
        }
        return newField;
    };
};

let gameField = new Field(Field.generateField(5, 5, 3));
console.log(gameField);
gameField.print();

//Starting game logic
do {
    let playerCommand = prompt('Which direction would you like to move? (u)p, (l)eft, (r)ight, or (d)own?');
    switch (playerCommand) {
        case 'u':
            playerPosY -= 1;
            break;
        case 'l':
            playerPosX -= 1;
            break;
        case 'r':
            playerPosX += 1;
            break;
        case 'd':
            playerPosY += 1;
            break;
        default:
            console.log(`${playerCommand} is not a valid move. Please try again.`)
    };
    if(playerPosY >= 0 && playerPosX >=0) {
        console.log(`New position is ${playerPosX}, ${playerPosY} with the space being occupied by ${gameField[playerPosY][playerPosX]}`);
    } else {
        console.log('You have fallen off the game field, game over');
        stillPlaying = false;
    }

} while(stillPlaying);









