import {
    levelsBox, buttonStart, buttonsBox, indicatorOfLevel,
    levelEasy, levelMedium, levelHard, repeatSequence, newGame, nextBtn, input
} from "./generate_elements.js";
import { setAttribute, removeAttribute } from "./functions.js";
import { createKeyboardEasy, createKeyboardMedium, createKeyboardHard } from "./keyboard.js";
import { highlightTheSequence } from "./game_sequences.js";
import { getRandomElements } from "./game_sequences.js";
import { letters, digits, lettersAndDigits } from "./keyboard.js";

let keyboardElements = digits;
let randomElements;
let round = 1;

keyboard = createKeyboardEasy();

//прорисовка клавиатуры в зависимости от выбранного уровня
levelsBox.addEventListener('click', (event) => {
    if (event.target === (levelEasy)) {
        keyboard = createKeyboardEasy();
        keyboardElements = digits;
    } else if (event.target === levelMedium) {
        keyboard = createKeyboardMedium();
        keyboardElements = letters;
    } else if (event.target === levelHard) {
        keyboard = createKeyboardHard();
        keyboardElements = lettersAndDigits;
    }
});

buttonStart.addEventListener('click', () => {
    buttonsBox.classList.remove('btn--hide');
    buttonStart.classList.add('hidden');
    indicatorOfLevel.classList.remove('btn--hide');
    input.classList.remove('btn--hide');
    setAttribute(levelEasy);
    setAttribute(levelMedium);
    setAttribute(levelHard);

    randomElements = getRandomElements(keyboardElements, round);
    console.log(randomElements);
    highlightTheSequence({ arr: randomElements, buttons: [newGame, repeatSequence], btn: input });
});

newGame.addEventListener('click', (event) => {
    buttonStart.classList.remove('hidden');
    removeAttribute(levelEasy);
    removeAttribute(levelMedium);
    removeAttribute(levelHard);
    buttonsBox.classList.add('btn--hide');
    input.classList.add('btn--hide');
    round = 1;
    indicatorOfLevel.textContent = `${round}/5 round`;
    console.log(round);
    input.value = '';
});

//логика при нажатии кнопки повторение последовательности
repeatSequence.addEventListener('click', (event) => {
    repeatSequence.setAttribute('disabled', '');
    repeatSequence.classList.add('btn--disabled');
    highlightTheSequence({ arr: randomElements, buttons: [newGame], btn: input });
});

nextBtn.addEventListener('click', (event) => {
    if (round < 5) {
        round += 1;
        indicatorOfLevel.textContent = `${round}/5 round`;              //смена индикатора раундов
        randomElements = getRandomElements(keyboardElements, round);
        highlightTheSequence(randomElements, newGame);
    }
    if (round === 5) {
        nextBtn.classList.add('btn--disabled');
    }
});

let pressedKeys = [];

document.addEventListener('keydown', (event) => {
    console.log(event.key)
    if (!input.disabled) {
        const isAlphanumeric = /^[a-zA-Z0-9\u0400-\u04FF\u0500-\u052F]$/;       //проверка на буквы или цифры
        if (isAlphanumeric.test(event.key)) {
            if ((/[a-zA-Z]/).test(event.key)) {
                pressedKeys.push(event.key.toUpperCase());
                input.value += event.key.toUpperCase();
                document.getElementById(`${event.key.toUpperCase()}`).style.backgroundColor = 'red'; //подсветка клавиш при нажатии
            } else if (+event.key >= 0 && +event.key <= 9) {
                pressedKeys.push(+(event.key));
                input.value += event.key;
                document.getElementById(`${event.key}`).style.backgroundColor = 'red';
            }
        }
        event.key.style.backgroundColor = 'red'
    }
});

//отключение подсветки клавиш при нажатии
document.addEventListener('keyup', (event) => {
    document.getElementById(`${event.key.toUpperCase()}`).style.backgroundColor = '';
});

//подсветка клавиш при нажатии на ПКМ
document.addEventListener('mousedown', (event) => {
    if (!input.disabled) {
        if (event.target.classList.contains('letter')) {
            event.target.style.backgroundColor = 'blue';
        }
    }
});

//отключение подсветки при mouseup
document.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = '';
});






