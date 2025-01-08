import { createElement } from "./create_elements.js";
import { createKeyboardEasy, createKeyboardMedium, createKeyboardHard } from "./keyboard.js";
import { createRadioButton } from "./create_elements.js";
import { setAttribute } from "./functions.js";
import { removeAttribute } from "./functions.js";

//header
const header = createElement({ tag: 'header', parent: document.body, classes: ['header'] });
const container = createElement({ tag: 'div', parent: header, classes: ['container'] });
const headerBox = createElement({ tag: 'div', parent: container, classes: ['header__box'] });
const title = createElement({ tag: 'h1', text:'The Simon says game', parent: headerBox, classes: ['header__title'] });

//main
const main = createElement({ tag: 'main', parent: document.body, classes: ['main'] });
const containerMain = createElement({ tag: 'div', parent: main, classes: ['container'] });
export const wrapper = createElement({ tag: 'div', parent: containerMain, classes: ['wrapper'] });
const buttonStart = createElement({ tag: 'button', text: 'Start', parent: wrapper, classes: ['btn', 'btn--primary'] });
const levelsBox = createElement({ tag: 'div', parent: wrapper, classes: ['level__box'] });

const levelEasy = createRadioButton({
    text: 'easy',
    parent: levelsBox,
    classes: ['level'],
    checked: 'true',
    id: 'easy',
    value: 'easy'
});
const levelMedium = createRadioButton({
    text: 'medium',
    parent: levelsBox,
    classes: ['level'],
    id: 'medium',
    value: 'medium'
});
const levelHard = createRadioButton({
    text: 'hard',
    parent: levelsBox,
    classes: ['level'],
    id: 'hard',
    value: 'hard'
});

export const keyboardWrapper = createElement({ tag: 'div', parent: wrapper, classes: ['keyboard__wrapper'] });
let keyboard_easy = createKeyboardEasy();

const input = createElement({ tag: 'input', text: '', parent: wrapper });
const buttonsBox = createElement({ tag: 'div', parent: wrapper, classes: ['hidden', 'btn__box'] });
const newGame = createElement({ tag: 'button', text: 'New game', parent: buttonsBox, classes: ['btn'] });
const repeatSequence = createElement({ tag: 'button', text: 'Repeat sequence', parent: buttonsBox, classes: ['btn'] });
const indicatorOfLevel = createElement({ tag: 'div', text: '1/5 round', parent: buttonsBox });

levelsBox.addEventListener('click', (event) => {
    console.log(event.target)
    if (event.target === (levelEasy) ) {
        createKeyboardEasy();
    } else if (event.target === levelMedium) {
        createKeyboardMedium();
    } else if (event.target === levelHard) {
        createKeyboardHard();
    }
});

buttonStart.addEventListener('click', () => {
    buttonsBox.classList.remove('hidden');
    buttonStart.classList.add('hidden');
    setAttribute(levelEasy);
    setAttribute(levelMedium);
    setAttribute(levelHard);
});

newGame.addEventListener('click', () => {
    buttonStart.classList.remove('hidden');
    removeAttribute(levelEasy);
    removeAttribute(levelMedium);
    removeAttribute(levelHard);
    buttonsBox.classList.add('hidden');
})








