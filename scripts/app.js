import { createElement } from "./create_elements.js";


const wrapper = createElement({ tag: 'div', parent: document.body, classes: ['wrapper'] });
const button = createElement({ tag: 'button', text: 'Start', parent: wrapper, classes: ['btn'] });
const levels_box = createElement({ tag: 'button', parent: wrapper, classes: ['levels-box'] });
const level_easy = createElement({ tag: 'div', text: 'easy', parent: levels_box, classes: ['level'] });
const level_medium = createElement({ tag: 'div', text: 'medium', parent: levels_box, classes: ['level'] });
const level_hard = createElement({ tag: 'div', text: 'hard', parent: levels_box, classes: ['level'] });
const input = createElement({ tag: 'input', text: '', parent: wrapper});
const buttons_box = createElement({ tag: 'div', parent: wrapper, classes: ['buttons-box'] });
const new_game = createElement({ tag: 'button', text: 'New game', parent: buttons_box, classes: ['button'] });
const repeat_sequence = createElement({ tag: 'button', text: 'Repeat sequence', parent: buttons_box, classes: ['button'] });
const indicator_of_level = createElement({ tag: 'div', text: '1/5 round', parent: buttons_box, classes: [''] });    
