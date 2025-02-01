import { randomIndex } from "./functions.js";

//получить рандомные элементы с клавиатуры, соответствующего уровня (arr - массив с элементами клавиатуры соотв. уровня)
export let getRandomElements = (arr, round) => {
    let randomElements = [];
    let randomNumber;
    let amountOfElements; //удалить

    if (round === 1) {
        amountOfElements = 2;
    } else if (round === 2) {
        amountOfElements = 4;
    } else if (round === 3) {
        amountOfElements = 6;
    } else if (round === 4) {
        amountOfElements = 8;
    } else if (round === 5) {
        amountOfElements = 10;
    }

    for (let i = 0; i < amountOfElements; i++) {
        randomNumber = randomIndex(arr);            //случайное число (случайный индекс элемента с клавиатуры)
        randomElements.push(arr[randomNumber]);     //создаю массив с этими элементами
    }
    console.log('The sequence: ' + randomElements);
    return randomElements;
}

//'подсветить' поочереди случайные эл-ты с клавиатуры (arr = массив со случайными элементами с клавиатуры)
export let highlightTheSequence = (options) => {

    const { arr, buttons = [], btn, keyboardLetters } = options;
    let time = 700;

    if (buttons.length > 0) {
        buttons.forEach((btn) => {
            btn.setAttribute('disabled', '');
            btn.classList.add('btn--disabled');
        })
    }
    if (btn) {
        btn.setAttribute('disabled', '');
    }
    if (keyboardLetters) {
        keyboardLetters.forEach((elem) => elem.classList.remove('letter__hover')); //установить hover для клавиш, когда возможен ввод последовательности 
    }
    for (let i = 0; i < arr.length; i++) {
        let element = document.getElementById(`${arr[i]}`);
        setTimeout(() => {
            // element.style.background = 'violet';
            element.style.background = `rgba(232, 230, 252, 0.52)`;
            element.style.boxShadow = `0 0 17px 2px #402ffc,
                    0px 0px 25px rgba(14, 119, 231, 0.732)`;
            setTimeout(function () {
                element.style.background = '';
                element.style.boxShadow = '';
            }, 350);
        }, time);
        time += 700;
    }
    setTimeout(() => {
        if (buttons.length > 0) {                      //возвращаю активность кнопкам (new game, repeat) после отработки функции
            buttons.forEach((btn) => {
                btn.removeAttribute('disabled', '');
                btn.classList.remove('btn--disabled');
            })
        }
        if (btn) {
            btn.removeAttribute('disabled', '');
        }
        if (keyboardLetters) {
            keyboardLetters.forEach((elem) => elem.classList.add('letter__hover')); //установить hover для клавиш, когда возможен ввод последовательности 
        }
    }, time);
}





