import { randomIndex } from "./functions.js";

const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const LETTERS = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M"];
const DIGITS_AND_LETTERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M"];

let game = (arrOfElements) => {
    let randomIndexes = [];
    let randNum;
    let amountOfElements = 6;

    // if (round === 1) {
    //     amountOfElements = 2;
    // } else if (round === 2) {
    //     amountOfElements = 4;
    // } else if (round === 3) {
    //     amountOfElements = 6;
    // } else if (round === 4) {
    //     amountOfElements = 8;
    // } else if (round === 5) {
    //     amountOfElements = 10;
    // }

    for (let i = 0; i < amountOfElements; i++) {
        randNum = randomIndex(arrOfElements);
        randomIndexes.push(arrOfElements[randNum]);
        console.log(randNum);
    }
    return randomIndexes;
}


console.log(game(DIGITS));
