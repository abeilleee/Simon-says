import { createElement } from "./create_elements.js";
import { createKeyboard, createKeyboardOfDigits, createKeyboardofLetters } from "./keyboard.js";
import { createRadioButton } from "./create_elements.js";


export const wrapper = createElement({ tag: 'div', parent: document.body, classes: ['wrapper'] });
const button = createElement({ tag: 'button', text: 'Start', parent: wrapper, classes: ['btn'] });

const levels_box = createElement({ tag: 'form', parent: wrapper, classes: ['levels-box'] });

const level_easy = createRadioButton({
    text: 'easy',
    parent: levels_box,
    classes: ['level'],
    checked: 'true',
    id: 'easy',
    value: 'easy'
});
const level_medium = createRadioButton({
    text: 'medium',
    parent: levels_box,
    classes: ['level'],
    id: 'medium',
    value: 'medium'
});
const level_hard = createRadioButton({
    text: 'hard',
    parent: levels_box,
    classes: ['level'],
    id: 'hard',
    value: 'hard'
});

createKeyboard();
const input = createElement({ tag: 'input', text: '', parent: wrapper });
const buttons_box = createElement({ tag: 'div', parent: wrapper, classes: ['buttons-box'] });
const new_game = createElement({ tag: 'button', text: 'New game', parent: buttons_box, classes: ['button'] });
const repeat_sequence = createElement({ tag: 'button', text: 'Repeat sequence', parent: buttons_box, classes: ['button'] });
const indicator_of_level = createElement({ tag: 'div', text: '1/5 round', parent: buttons_box });


