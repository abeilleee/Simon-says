import { createElement } from "./create_elements.js";
import { createKeyboardEasy, createKeyboardMedium, createKeyboardHard } from "./keyboard.js";
import { createRadioButton } from "./create_elements.js";
import { setAttribute } from "./functions.js";
import { removeAttribute } from "./functions.js";


//header
const header = createElement({ tag: 'header', parent: document.body, classes: ['header'] });
const container = createElement({ tag: 'div', parent: header, classes: ['container'] });
const headerBox = createElement({ tag: 'div', parent: container, classes: ['header__box'] });
const title = createElement({ tag: 'h1', text: 'The Simon says game', parent: headerBox, classes: ['header__title'] });

//main
const main = createElement({ tag: 'main', parent: document.body, classes: ['main'] });
const containerMain = createElement({ tag: 'div', parent: main, classes: ['container'] });
export const wrapper = createElement({ tag: 'div', parent: containerMain, classes: ['wrapper'] });
export const wrapperBox = createElement({ tag: 'button', parent: wrapper, classes: ['wrapper__box'] });
export const buttonStart = createElement({ tag: 'button', text: 'Start', parent: wrapperBox, classes: ['btn', 'btn--primary'] });
export const levelsBox = createElement({ tag: 'div', parent: wrapper, classes: ['level__box'] });

export const levelEasy = createRadioButton({
    text: 'easy',
    parent: levelsBox,
    classes: ['level'],
    checked: 'true',
    id: 'easy',
    value: 'easy'
});
export const levelMedium = createRadioButton({
    text: 'medium',
    parent: levelsBox,
    classes: ['level'],
    id: 'medium',
    value: 'medium'
});
export const levelHard = createRadioButton({
    text: 'hard',
    parent: levelsBox,
    classes: ['level'],
    id: 'hard',
    value: 'hard'
});

export const keyboardWrapper = createElement({ tag: 'div', parent: wrapper, classes: ['keyboard__wrapper'] });

export const input = createElement({ tag: 'input', text: '', parent: wrapper, classes: ['input', 'btn--hide'] });
input.setAttribute('readonly', '');
input.setAttribute('disabled', '');
export const buttonsBox = createElement({ tag: 'div', parent: wrapper, classes: ['btn--hide', 'btn__box'] });
export const newGame = createElement({ tag: 'button', text: 'New game', parent: buttonsBox, classes: ['btn'] });
export const repeatSequence = createElement({ tag: 'button', text: 'Repeat sequence', parent: buttonsBox, classes: ['btn'] });
export const nextBtn = createElement({ tag: 'button', text: 'Next', parent: buttonsBox, classes: ['btn--hide', 'btn'] });
export const indicatorOfRound = createElement({ tag: 'p', text: `1/5 round`, parent: buttonsBox, classes: ['text'] });











