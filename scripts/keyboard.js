import { createElement } from "./create_elements.js";
import { wrapper } from "./app.js";

export let createKeyboard = (letters, digits) => {
    letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Z", "X", "C", "V", "B", "N", "M"];

    digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    let keyboardWrapper = createElement({ tag: 'div', parent: wrapper, classes: ['keyboard__wrapper'] });

    let numbersRow = createElement({ tag: 'div', parent: keyboardWrapper, classes: ['keyboard__row'] });
    digits.forEach((elem) => {
        let digit = createElement({ tag: 'div', text: `${elem}`, parent: numbersRow, classes: ['letter'] });
    });

    let firstRow = createElement({ tag: 'div', parent: keyboardWrapper, classes: ['keyboard__row'] });
    for (let i = 0; i < 10; i++) {
        let letter = createElement({ tag: 'div', text: `${letters[i]}`, parent: firstRow, classes: ['letter'] });
    }

    let secondRow = createElement({ tag: 'div', parent: keyboardWrapper, classes: ['keyboard__row'] });
    for (let i = 10; i < 19; i++) {
        let letter = createElement({ tag: 'div', text: `${letters[i]}`, parent: secondRow, classes: ['letter'] });
    }

    let thirdRow = createElement({ tag: 'div', parent: keyboardWrapper, classes: ['keyboard__row'] });
    for (let i = 19; i < 26; i++) {
        let letter = createElement({ tag: 'div', text: `${letters[i]}`, parent: thirdRow, classes: ['letter'] });
    }
    return keyboardWrapper;
}


export let createKeyboardOfDigits = (digits) => {
    digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    let keyboardWrapper = createElement({ tag: 'div', parent: wrapper, classes: ['keyboard__wrapper'] });

    let numbersRow = createElement({ tag: 'div', parent: keyboardWrapper, classes: ['keyboard__row'] });
    digits.forEach((elem) => {
        let digit = createElement({ tag: 'div', text: `${elem}`, parent: numbersRow, classes: ['letter'] });
    });
}


export let createKeyboardofLetters = (letters) => {
    letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "a", "s", "d", "f", "g", "h", "j", "k", "l",
        "z", "x", "c", "v", "b", "n", "m"];

    let keyboardWrapper = createElement({ tag: 'div', parent: wrapper, classes: ['keyboard__wrapper'] });

    let firstRow = createElement({ tag: 'div', parent: keyboardWrapper, classes: ['keyboard__row'] });
    for (let i = 0; i < 10; i++) {
        let letter = createElement({ tag: 'div', text: `${letters[i]}`, parent: firstRow, classes: ['letter'] });
    }

    let secondRow = createElement({ tag: 'div', parent: keyboardWrapper, classes: ['keyboard__row'] });
    for (let i = 10; i < 19; i++) {
        let letter = createElement({ tag: 'div', text: `${letters[i]}`, parent: secondRow, classes: ['letter'] });
    }

    let thirdRow = createElement({ tag: 'div', parent: keyboardWrapper, classes: ['keyboard__row'] });
    for (let i = 19; i < 26; i++) {
        let letter = createElement({ tag: 'div', text: `${letters[i]}`, parent: thirdRow, classes: ['letter'] });
    }
    return keyboardWrapper;
}
