import { randomIndex } from "./functions.js";

export let game = (arrOfElements) => {
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



