import { createElement } from "./create_elements.js";
import { createKeyboardEasy, createKeyboardMedium, createKeyboardHard } from "./keyboard.js";
import { createRadioButton } from "./create_elements.js";


export const wrapper = createElement({ tag: 'div', parent: document.body, classes: ['wrapper'] });
const buttonStart = createElement({ tag: 'button', text: 'Start', parent: wrapper, classes: ['btn','btn--primary'] });
const levelsBox = createElement({ tag: 'form', parent: wrapper, classes: ['level__box'] });

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
const buttonsBox = createElement({ tag: 'div', parent: wrapper, classes: ['hidden','btn-box'] });
const newGame = createElement({ tag: 'button', text: 'New game', parent: buttonsBox, classes: ['btn'] });
const repeatSequence = createElement({ tag: 'button', text: 'Repeat sequence', parent: buttonsBox, classes: ['btn'] });
const indicatorOfLevel = createElement({ tag: 'div', text: '1/5 round', parent: buttonsBox });

levelsBox.addEventListener('click', (event) => {
    if(event.target.contains(levelEasy)) {
        createKeyboardEasy();
    } else if (event.target.contains(levelMedium)) {
        createKeyboardMedium();
    } else if (event.target.contains(levelHard)) {
       createKeyboardHard();
    }
});

buttonStart.addEventListener('click', (event) => {
    buttonsBox.classList.remove('hidden');
    buttonStart.classList.add('hidden');
})








