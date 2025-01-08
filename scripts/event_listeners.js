import { levelsBox, buttonStart, buttonsBox, indicatorOfLevel, levelEasy, levelMedium, levelHard } from "./generate_elements.js";
import { newGame } from "./generate_elements.js";
import { setAttribute, removeAttribute } from "./functions.js";
import { createKeyboardEasy, createKeyboardMedium, createKeyboardHard } from "./keyboard.js";

levelsBox.addEventListener('click', (event) => {
    if (event.target === (levelEasy)) {
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
    indicatorOfLevel.classList.remove('hidden');
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