import { createElement } from "./create_elements.js";
import { wrapper } from "./app.js";

let createKeyboard = (letters, digits) => {
    letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "a", "s", "d", "f", "g", "h", "j", "k", "l",
        "z", "x", "c", "v", "b", "n", "m"];

    digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let keyboardWrapper = createElement({tag: 'div', parent: wrapper, classes: ['keyboard__wrapper']});

    let firstRow = createElement({tag: 'div', parent: keyboardWrapper, classes: ['keyboard__row']});
    for (let i = 0; i < 10; i++) {
        let letter = createElement({ tag: 'div', text: `${letters[i]}`, parent: firstRow, classes: ['letter'] });
    }

    let secondRow = createElement({tag: 'div', parent: keyboardWrapper, classes: ['keyboard__row']});
    for (let i = 10; i < 19; i++) {
        let letter = createElement({ tag: 'div', text: `${letters[i]}`, parent: secondRow, classes: ['letter'] });
    }

    let thirdRow = createElement({tag: 'div', parent: keyboardWrapper, classes: ['keyboard__row']});
    for (let i = 19; i < 26; i++) {
        let letter = createElement({ tag: 'div', text: `${letters[i]}`, parent: thirdRow, classes: ['letter'] });
    }
    return keyboardWrapper;
}

let letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l",
    "z", "x", "c", "v", "b", "n", "m"];

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(createKeyboard())