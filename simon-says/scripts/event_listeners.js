import {
    levelsBox, buttonStart, buttonsBox, indicatorOfRound,
    levelEasy, levelMedium, levelHard, repeatSequence, newGame, btnNext, input, feedbackWrong, feedbackRight, feedbackWin
} from "./generate_elements.js";
import { setAttribute, removeAttribute, removeHover } from "./functions.js";
import { createKeyboardEasy, createKeyboardMedium, createKeyboardHard } from "./keyboard.js";
import { highlightTheSequence } from "./game_sequences.js";
import { getRandomElements } from "./game_sequences.js";
import { letters, digits, lettersAndDigits } from "./keyboard.js";

let keyboardElements = digits;
let randomElements;
let round = 1;
let level = 'easy';
let pressedKeys = [];
 
let eventHandled = false;   //флаг для проверки (обработки) только одного события
let keyPressed = false;     //флаг для обработки только первого обнаруженного нажатия

let stopInput = false;      //флаг для прекращения подсветки клавиш при вводе при неправильном ответе
let currentIndex = 0;       //для проверки введенной буквы/цифры co сгенерированной последовательностью (randomElements)

let labelEasy = document.querySelector('label[for="easy"]');
let labelMedium = document.querySelector('label[for="medium"]');
let labelHard = document.querySelector('label[for="hard"]');
createKeyboardEasy();
labelEasy.classList.add('level--checked');
let keyboardLetters = document.querySelectorAll('.letter'); //клавиши клавиатуры


//прорисовка клавиатуры в зависимости от выбранного уровня
levelsBox.addEventListener('click', (event) => {
    if (event.target === levelEasy) {
        createKeyboardEasy();
        keyboardElements = digits;
        level = 'easy';
        labelEasy.classList.add('level--checked');
        labelMedium.classList.remove('level--checked');
        labelHard.classList.remove('level--checked');
        keyboardLetters = document.querySelectorAll('.letter');
    } else if (event.target === levelMedium) {
        createKeyboardMedium();
        keyboardElements = letters;
        level = 'medium';
        labelMedium.classList.add('level--checked');
        labelEasy.classList.remove('level--checked');
        labelHard.classList.remove('level--checked');
        keyboardLetters = document.querySelectorAll('.letter');
    } else if (event.target === levelHard) {
        createKeyboardHard();
        keyboardElements = lettersAndDigits;
        level = 'hard';
        labelHard.classList.add('level--checked');
        labelEasy.classList.remove('level--checked');
        labelMedium.classList.remove('level--checked');
        keyboardLetters = document.querySelectorAll('.letter');
    }
});

buttonStart.addEventListener('click', () => {
    buttonsBox.classList.remove('btn--hide');
    buttonStart.classList.add('btn--hide');
    indicatorOfRound.classList.remove('btn--hide');
    input.classList.remove('btn--hide');
    setAttribute(levelEasy);
    labelEasy.classList.add('level--disabled');
    setAttribute(levelMedium);
    labelMedium.classList.add('level--disabled');
    setAttribute(levelHard);
    labelHard.classList.add('level--disabled');
    randomElements = getRandomElements(keyboardElements, round);
    highlightTheSequence({ arr: randomElements, buttons: [newGame, repeatSequence], btn: input, keyboardLetters });
    stopInput = false;
});

newGame.addEventListener('click', () => {
    buttonStart.classList.remove('btn--hide');
    feedbackWrong.classList.add('feedback--hide');
    feedbackWin.classList.add('feedback--hide');
    removeAttribute(levelEasy);
    labelEasy.classList.remove('level--disabled');
    removeAttribute(levelMedium);
    labelMedium.classList.remove('level--disabled');
    removeAttribute(levelHard);
    labelHard.classList.remove('level--disabled');
    buttonsBox.classList.add('btn--hide');
    input.classList.add('btn--hide');
    round = 1;
    indicatorOfRound.textContent = `${round}/5 round`;
    input.value = '';
    pressedKeys = [];
    currentIndex = 0;
    feedbackWrong.classList.add('feedback--hide');
    feedbackRight.classList.add('feedback--hide');
    stopInput = true;
    removeHover(keyboardLetters);
});

//логика при нажатии кнопки повторение последовательности
repeatSequence.addEventListener('click', () => {
    repeatSequence.setAttribute('disabled', '');
    repeatSequence.classList.add('btn--disabled');
    highlightTheSequence({ arr: randomElements, buttons: [newGame], btn: input, keyboardLetters });
    feedbackWrong.classList.add('feedback--hide');
    stopInput = false;
    input.value = '';
    currentIndex = 0;
});

btnNext.addEventListener('click', () => {
    repeatSequence.removeAttribute('disabled', '');
    repeatSequence.classList.remove('btn--disabled');
    repeatSequence.classList.remove('btn--hide');
    btnNext.classList.add('btn--hide');
    input.value = '';
    currentIndex = 0;
    pressedKeys = [];
    feedbackRight.classList.add('feedback--hide');
    stopInput = false;
    if (round < 5) {
        round += 1;
        indicatorOfRound.textContent = `${round}/5 round`;                  //смена индикатора раундов
        randomElements = getRandomElements(keyboardElements, round);
        highlightTheSequence({ arr: randomElements, buttons: [newGame, repeatSequence], btn: input, keyboardLetters });
    }
    console.log('randomElements: ' + randomElements);
});


// обработчик события клавиатуры
let handleKeyPress = (event) => {
    //пока работает функция highlightTheSequence
    if (!input.disabled && !stopInput === true) {
        //обработка для первого обнаруженного события (мышь или клавиатура)                        
        if (!eventHandled) {
            eventHandled = true;
            //обработка для первого обнаруженного нажатия клавиши
            if (!keyPressed) {
                keyPressed = true;
                //проверка на буквы и цифры
                const isAlphanumeric = /^[a-zA-Z0-9\u0400-\u04FF\u0500-\u052F]$/;
                if (isAlphanumeric.test(event.key)) {
                    //в зависимости от уровня игнорируются другие клавиши
                    if (level === 'easy') {
                        if (+event.key >= 0 && +event.key <= 9) {
                            pressedKeys.push(+(event.key));
                            input.value += event.key;
                            //подсветка клавиш при нажатии
                            document.getElementById(`${event.key}`).style.boxShadow = `0 0 17px 2px #402ffc,
                            0px 0px 25px rgba(14, 119, 231, 0.732)`;
                            if (+event.key === randomElements[currentIndex]) {
                                currentIndex++;
                            }
                            else {
                                feedbackWrong.classList.remove('feedback--hide');
                                stopInput = true;
                                removeHover(keyboardLetters);
                            }
                        }
                    }
                    if (level === 'medium') {
                        if ((/[a-zA-Z]/).test(event.key)) {
                            pressedKeys.push(event.key.toUpperCase());
                            input.value += event.key.toUpperCase();
                            document.getElementById(`${event.key.toUpperCase()}`).style.boxShadow = `0 0 17px 2px #402ffc,
                            0px 0px 25px rgba(14, 119, 231, 0.732)`;
                            if (event.key.toUpperCase() === randomElements[currentIndex]) {
                                currentIndex++;
                            } else {
                                feedbackWrong.classList.remove('feedback--hide');
                                stopInput = true;
                                removeHover(keyboardLetters);
                            }
                        }
                    }
                    if (level === 'hard') {
                        if ((/[a-zA-Z]/).test(event.key)) {
                            pressedKeys.push(event.key.toUpperCase());
                            input.value += event.key.toUpperCase();
                            document.getElementById(`${event.key.toUpperCase()}`).style.boxShadow = `0 0 17px 2px #402ffc,
                            0px 0px 25px rgba(14, 119, 231, 0.732)`;
                            if (event.key.toUpperCase() === randomElements[currentIndex]) {
                                currentIndex++;
                            } else {
                                feedbackWrong.classList.remove('feedback--hide');
                                stopInput = true;
                                removeHover(keyboardLetters);
                            }
                        } else if (+event.key >= 0 && +event.key <= 9) {
                            pressedKeys.push(+(event.key));
                            input.value += event.key;
                            document.getElementById(`${event.key}`).style.boxShadow = `0 0 17px 2px #402ffc,
                            0px 0px 25px rgba(14, 119, 231, 0.732)`;
                            if (+event.key === randomElements[currentIndex]) {
                                currentIndex++;
                            } else {
                                feedbackWrong.classList.remove('feedback--hide');
                                stopInput = true;
                                removeHover(keyboardLetters);
                            }
                        }
                    }
                }
            }
        }
        if (currentIndex === randomElements.length && round < 5) {
            stopInput = true;
            feedbackRight.classList.remove('feedback--hide');
            repeatSequence.classList.add('btn--hide');
            btnNext.classList.remove('btn--hide');
            removeHover(keyboardLetters);
            //при успешном завершении игры:
        } else if (currentIndex === randomElements.length && round === 5) {
            repeatSequence.setAttribute('disabled', '');
            repeatSequence.classList.add('btn--disabled');
            feedbackWin.classList.remove('feedback--hide');
            stopInput = true;
        }

    }
}


// обработчик события мыши
let handleMouseClick = (event) => {
    if (!input.disabled && !stopInput === true) {
        if (!eventHandled) {
            //флаг, что событие уже обработано
            eventHandled = true;

            if (event.target.classList.contains('letter')) {
                event.target.style.boxShadow = `0 0 17px 2px #402ffc,
                0px 0px 25px rgba(14, 119, 231, 0.732)`;
                if ((/[a-zA-Z]/).test(event.target.id)) {
                    pressedKeys.push(event.target.id.toUpperCase());
                    input.value += event.target.id;
                    if (event.target.id.toUpperCase() === randomElements[currentIndex]) {
                        currentIndex++;
                    } else {
                        feedbackWrong.classList.remove('feedback--hide');
                        stopInput = true;
                        removeHover(keyboardLetters);
                    }
                } else if (+event.target.id >= 0 && +event.target.id <= 9) {
                    pressedKeys.push(+event.target.id);
                    input.value += +event.target.id;
                    if (+event.target.id === randomElements[currentIndex]) {
                        currentIndex++;
                    } else {
                        feedbackWrong.classList.remove('feedback--hide');
                        stopInput = true;
                        removeHover(keyboardLetters);
                    }
                }
            }
        }
        if (currentIndex === randomElements.length && round < 5) {
            stopInput = true;
            feedbackRight.classList.remove('feedback--hide');
            repeatSequence.classList.add('btn--hide');
            btnNext.classList.remove('btn--hide');
            removeHover(keyboardLetters);
        } else if (currentIndex === randomElements.length && round === 5) {
            repeatSequence.setAttribute('disabled', '');
            repeatSequence.classList.add('btn--disabled');
            feedbackWin.classList.remove('feedback--hide');
            stopInput = true;
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
                    document.getElementById(`${event.key}`).style.boxShadow = '';
                }
            }
            if (level === 'medium') {
                if ((/[a-zA-Z]/).test(event.key)) {
                    document.getElementById(`${event.key.toUpperCase()}`).style.boxShadow = '';
                }
            }
            if (level === 'hard') {
                if ((/[a-zA-Z]/).test(event.key)) {
                    document.getElementById(`${event.key.toUpperCase()}`).style.boxShadow = '';
                } else if (+event.key >= 0 && +event.key <= 9) {
                    document.getElementById(`${event.key}`).style.boxShadow = '';
                }
            }
        }
    }
});

//отключение подсветки клавиш при mouseup
document.addEventListener('mouseup', (event) => {
    event.target.style.boxShadow = '';
});






