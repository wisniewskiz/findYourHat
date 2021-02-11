const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const fieldIcons = [hat, hole, fieldCharacter];

let stillPlaying = true;
let playerPositionX = 0;
let playerPositionY = 0;

let generateSpace = () => {
    return fieldIcons[Math.floor(Math.random() * 3)];
}

class Field{
    constructor(field) {
        this._field = field;
    }

    print() {
        for(let line of this._field) {
            console.log(line.join(''));
        }
    }

    static generateField(width, height) {
        let newField = [];
        for (let h=0; h<height; h++) {
            newField.push([])
            for (let w=0; w<width; w++) {
                let newSpace = generateSpace();
                if (newSpace === hat && !newField.includes(hat)) {
                    newField[h].push(newSpace);
                    fieldIcons[0] = fieldCharacter;
                } else {
                    newField[h].push(newSpace);
                }
            }
        }
        newField[playerPositionX][playerPositionY] = pathCharacter;
        if (!newField.includes(hat)) {
            newField[height - 1][width - 1] = hat
        }
        return newField;
    }
}

let gameField = new Field(Field.generateField(5,5));

console.log(gameField);
gameField.print();






 

