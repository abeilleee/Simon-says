import { createElement } from "./create_elements.js";
import { keyboardWrapper } from "./generate_elements.js";

export let letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M"];
export let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
export let lettersAndDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M"];

export let createKeyboardHard = (letters, digits) => {
    letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Z", "X", "C", "V", "B", "N", "M"];

    digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    let keyboardHard = createElement({ tag: 'div', classes: ['keyboard'], parent: keyboardWrapper, removeChildren: 'true' });

    let numbersRow = createElement({ tag: 'div', parent: keyboardHard, classes: ['keyboard__row'] });
    digits.forEach((elem) => {
        createElement({ tag: 'div', text: `${elem}`, parent: numbersRow, classes: ['letter'], id: 'true' });
    });

    let firstRow = createElement({ tag: 'div', parent: keyboardHard, classes: ['keyboard__row'] });
    for (let i = 0; i < 10; i++) {
        createElement({ tag: 'div', text: `${letters[i]}`, parent: firstRow, classes: ['letter'], id: 'true' });
    }

    let secondRow = createElement({ tag: 'div', parent: keyboardHard, classes: ['keyboard__row'] });
    for (let i = 10; i < 19; i++) {
        createElement({ tag: 'div', text: `${letters[i]}`, parent: secondRow, classes: ['letter'], id: 'true' });
    }

    let thirdRow = createElement({ tag: 'div', parent: keyboardHard, classes: ['keyboard__row'] });
    for (let i = 19; i < 26; i++) {
        createElement({ tag: 'div', text: `${letters[i]}`, parent: thirdRow, classes: ['letter'], id: 'true' });
    }
    return keyboardHard;
}


export let createKeyboardEasy = (digits) => {
    digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    let keyboardEasy = createElement({ tag: 'div', classes: ['keyboard'], parent: keyboardWrapper, removeChildren: 'true'});

    let numbersRow = createElement({ tag: 'div', parent: keyboardEasy, classes: ['keyboard__row'] });
    digits.forEach((elem) => {
        createElement({ tag: 'div', text: `${elem}`, parent: numbersRow, classes: ['letter'], id: 'true' });
    });

    return keyboardEasy;
}


export let createKeyboardMedium = (letters) => {
    letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Z", "X", "C", "V", "B", "N", "M"];

    let keyboardMedium = createElement({ tag: 'div', classes: ['keyboard'], parent: keyboardWrapper, removeChildren: 'true'});

    let firstRow = createElement({ tag: 'div', parent: keyboardMedium, classes: ['keyboard__row'] });
    for (let i = 0; i < 10; i++) {
        createElement({ tag: 'div', text: `${letters[i]}`, parent: firstRow, classes: ['letter'], id: 'true' });
    }

    let secondRow = createElement({ tag: 'div', parent: keyboardMedium, classes: ['keyboard__row'] });
    for (let i = 10; i < 19; i++) {
        createElement({ tag: 'div', text: `${letters[i]}`, parent: secondRow, classes: ['letter'], id: 'true' });
    }

    let thirdRow = createElement({ tag: 'div', parent: keyboardMedium, classes: ['keyboard__row'] });
    for (let i = 19; i < 26; i++) {
        createElement({ tag: 'div', text: `${letters[i]}`, parent: thirdRow, classes: ['letter'], id: 'true' });
    }
    return keyboardMedium;
}
