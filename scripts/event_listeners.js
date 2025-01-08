import { levelsBox, buttonStart, buttonsBox, indicatorOfLevel, levelEasy, levelMedium, levelHard } from "./generate_elements.js";
import { newGame } from "./generate_elements.js";
import { setAttribute, removeAttribute } from "./functions.js";
import { createKeyboardEasy, createKeyboardMedium, createKeyboardHard } from "./keyboard.js";
import { highlightTheSequence } from "./game_sequences.js";

let keyboard;
keyboard = createKeyboardEasy();


levelsBox.addEventListener('click', (event) => {
    if (event.target === (levelEasy)) {
        keyboard = createKeyboardEasy();
    } else if (event.target === levelMedium) {
        keyboard = createKeyboardMedium();
    } else if (event.target === levelHard) {
        keyboard = createKeyboardHard();
    }
});

buttonStart.addEventListener('click', () => {
    buttonsBox.classList.remove('hidden');
    buttonStart.classList.add('hidden');
    indicatorOfLevel.classList.remove('hidden');
    setAttribute(levelEasy);
    setAttribute(levelMedium);
    setAttribute(levelHard);
    console.log(keyboard);

    showTheSequence()
});

newGame.addEventListener('click', () => {
    buttonStart.classList.remove('hidden');
    removeAttribute(levelEasy);
    removeAttribute(levelMedium);
    removeAttribute(levelHard);
    buttonsBox.classList.add('hidden');
});




