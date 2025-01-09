import {
    levelsBox, buttonStart, buttonsBox, indicatorOfLevel,
    levelEasy, levelMedium, levelHard, repeatSequence, newGame, nextBtn
} from "./generate_elements.js";
import { setAttribute, removeAttribute } from "./functions.js";
import { createKeyboardEasy, createKeyboardMedium, createKeyboardHard } from "./keyboard.js";
import { highlightTheSequence } from "./game_sequences.js";
import { getRandomElements } from "./game_sequences.js";
import { letters, digits, lettersAndDigits } from "./keyboard.js";

let keyboard;
keyboard = createKeyboardEasy();
let keyboardElements = digits;
let randomElements;
let round = 1;


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
    buttonsBox.classList.remove('hidden');
    buttonStart.classList.add('hidden');
    indicatorOfLevel.classList.remove('hidden');
    setAttribute(levelEasy);
    setAttribute(levelMedium);
    setAttribute(levelHard);

    randomElements = getRandomElements(keyboardElements, round);
    console.log(randomElements);
    highlightTheSequence(randomElements, newGame, repeatSequence);
});

newGame.addEventListener('click', (event) => {
    buttonStart.classList.remove('hidden');
    removeAttribute(levelEasy);
    removeAttribute(levelMedium);
    removeAttribute(levelHard);
    buttonsBox.classList.add('hidden');
    round = 1;
    indicatorOfLevel.textContent = `${round}/5 round`;
    console.log(round)
});

repeatSequence.addEventListener('click', (event) => {
    repeatSequence.setAttribute('disabled', '');
    repeatSequence.classList.add('btn--disabled');
    highlightTheSequence(randomElements, newGame);
});

console.log(round)


nextBtn.addEventListener('click', (event) => {
    if (round < 5) {
        round+=1;   
        indicatorOfLevel.textContent = `${round}/5 round`;
        randomElements = getRandomElements(keyboardElements, round);
        highlightTheSequence(randomElements, newGame);
    }    
    if (round === 5) {
        nextBtn.classList.add('btn--disabled');
    }
});




