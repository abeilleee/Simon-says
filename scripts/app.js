import { createElement } from "./create_elements.js";
import { createKeyboardEasy, createKeyboardMedium, createKeyboardHard } from "./keyboard.js";
import { createRadioButton } from "./create_elements.js";


export const wrapper = createElement({ tag: 'div', parent: document.body, classes: ['wrapper'] });
const buttonStart = createElement({ tag: 'button', text: 'Start', parent: wrapper, classes: ['btn'] });
const levelsBox = createElement({ tag: 'form', parent: wrapper, classes: ['levels-box'] });

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


levelsBox.addEventListener('click', (event) => {
    if(event.target.contains(levelEasy)) {
        createKeyboardEasy();
    } else if (event.target.contains(levelMedium)) {
        keyboard = createKeyboardMedium();
    } else if (event.target.contains(levelHard)) {
        keyboard = createKeyboardHard();
    }
});

const input = createElement({ tag: 'input', text: '', parent: wrapper });
const buttons_box = createElement({ tag: 'div', parent: wrapper, classes: ['buttons-box'] });
const new_game = createElement({ tag: 'button', text: 'New game', parent: buttons_box, classes: ['button'] });
const repeat_sequence = createElement({ tag: 'button', text: 'Repeat sequence', parent: buttons_box, classes: ['button'] });
const indicator_of_level = createElement({ tag: 'div', text: '1/5 round', parent: buttons_box });


