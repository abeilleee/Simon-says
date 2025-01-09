import {
    levelsBox, buttonStart, buttonsBox, indicatorOfRound,
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
let keyboard;
let level = 'easy';
let pressedKeys = [];
let eventHandled = false;   //флаг для проверки обработки только одного события
let keyPressed = false;     //флаг для обработки только первого обнаруженного нажатия

keyboard = createKeyboardEasy();

//прорисовка клавиатуры в зависимости от выбранного уровня
levelsBox.addEventListener('click', (event) => {
    if (event.target === (levelEasy)) {
        keyboard = createKeyboardEasy();
        keyboardElements = digits;
        level = 'easy';
    } else if (event.target === levelMedium) {
        keyboard = createKeyboardMedium();
        keyboardElements = letters;
        level = 'medium';
    } else if (event.target === levelHard) {
        keyboard = createKeyboardHard();
        keyboardElements = lettersAndDigits;
        level = 'hard';
    }
});

buttonStart.addEventListener('click', () => {
    buttonsBox.classList.remove('btn--hide');
    buttonStart.classList.add('hidden');
    indicatorOfRound.classList.remove('btn--hide');
    input.classList.remove('btn--hide');
    setAttribute(levelEasy);
    setAttribute(levelMedium);
    setAttribute(levelHard);

    randomElements = getRandomElements(keyboardElements, round);
    highlightTheSequence({ arr: randomElements, buttons: [newGame, repeatSequence], btn: input });
});

newGame.addEventListener('click', () => {
    buttonStart.classList.remove('hidden');
    removeAttribute(levelEasy);
    removeAttribute(levelMedium);
    removeAttribute(levelHard);
    buttonsBox.classList.add('btn--hide');
    input.classList.add('btn--hide');
    round = 1;
    indicatorOfRound.textContent = `${round}/5 round`;
    input.value = '';
});

//логика при нажатии кнопки повторение последовательности
repeatSequence.addEventListener('click', () => {
    repeatSequence.setAttribute('disabled', '');
    repeatSequence.classList.add('btn--disabled');
    highlightTheSequence({ arr: randomElements, buttons: [newGame], btn: input });
});

nextBtn.addEventListener('click', () => {
    if (round < 5) {
        round += 1;
        indicatorOfRound.textContent = `${round}/5 round`;                  //смена индикатора раундов
        randomElements = getRandomElements(keyboardElements, round);
        highlightTheSequence(randomElements, newGame);
    }
    if (round === 5) {
        nextBtn.classList.add('btn--disabled');
    }
});

// обработчик события клавиатуры
let handleKeyPress = (event) => {
    if (!eventHandled) {                                                       //обработка для первого обнаруженного события (мышь или клавиатура)
        eventHandled = true;
        if (!keyPressed) {                                                     //обработка для первого обнаруженного нажатия клавиши
            keyPressed = true;

            const isAlphanumeric = /^[a-zA-Z0-9\u0400-\u04FF\u0500-\u052F]$/;  //проверка на буквы и цифры
            if (isAlphanumeric.test(event.key)) {
                if (!input.disabled) {                                         //пока работает функция highlightTheSequence
                    if (level === 'easy') {                                    //в зависимости от уровня игнорируются другие клавиши
                        if (+event.key >= 0 && +event.key <= 9) {
                            pressedKeys.push(+(event.key));
                            input.value += event.key;
                            document.getElementById(`${event.key}`).style.backgroundColor = 'red';    //подсветка клавиш при нажатии
                        }
                    }
                    if (level === 'medium') {
                        if ((/[a-zA-Z]/).test(event.key)) {
                            pressedKeys.push(event.key.toUpperCase());
                            input.value += event.key.toUpperCase();
                            document.getElementById(`${event.key.toUpperCase()}`).style.backgroundColor = 'red';
                        }
                    }
                    if (level === 'hard') {
                        if ((/[a-zA-Z]/).test(event.key)) {
                            pressedKeys.push(event.key.toUpperCase());
                            input.value += event.key.toUpperCase();
                            document.getElementById(`${event.key.toUpperCase()}`).style.backgroundColor = 'red';
                        } else if (+event.key >= 0 && +event.key <= 9) {
                            pressedKeys.push(+(event.key));
                            input.value += event.key;
                            document.getElementById(`${event.key}`).style.backgroundColor = 'red';
                        }
                    }
                }
            }
        }
    }
}

// обработчик события мыши
let handleMouseClick = (event) => {
    if (!eventHandled) {
        eventHandled = true;                                //флаг, что событие уже обработано
        if (!input.disabled) {
            if (event.target.classList.contains('letter')) {
                event.target.style.backgroundColor = 'blue';
                input.value += event.target.id;
            }
        }
    }
}

// функция для сброса флага при отпускании клавиши или кнопки мыши
let resetEventHandled = () => {
    eventHandled = false;
}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', resetEventHandled);

document.addEventListener('mousedown', handleMouseClick);
document.addEventListener('mouseup', resetEventHandled);

//отключение подсветки клавиш при нажатии
document.addEventListener('keyup', (event) => {
    keyPressed = false;
    const isAlphanumeric = /^[a-zA-Z0-9\u0400-\u04FF\u0500-\u052F]$/;
    if (isAlphanumeric.test(event.key)) {
        if (!input.disabled) {
            if (level === 'easy') {
                if (+event.key >= 0 && +event.key <= 9) {
                    document.getElementById(`${event.key}`).style.backgroundColor = '';
                }
            }

            if (level === 'medium') {
                if ((/[a-zA-Z]/).test(event.key)) {
                    document.getElementById(`${event.key.toUpperCase()}`).style.backgroundColor = '';
                }
            }
            if (level === 'hard') {
                if ((/[a-zA-Z]/).test(event.key)) {
                    document.getElementById(`${event.key.toUpperCase()}`).style.backgroundColor = '';
                } else if (+event.key >= 0 && +event.key <= 9) {
                    document.getElementById(`${event.key}`).style.backgroundColor = '';
                }
            }
        }
    }
});

//отключение подсветки при mouseup
document.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = '';
});






