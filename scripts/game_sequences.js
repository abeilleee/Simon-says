import { randomIndex } from "./functions.js";

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M"];

//получить рандомные элементы с клавиатуры, соответствующего уровня (arr - массив с элементами клавиатуры соотв. уровня)
export let getRandomElements = (arr) => {
    let randomElements = [];
    let randomNumber;
    let amountOfElements = 3; //удалить

    // if (round === 1) {
    //     amountOfElements = 2;
    // } else if (round === 2) {
    //     amountOfElements = 4;
    // } else if (round === 3) {
    //     amountOfElements = 6;
    // } else if (round === 4) {
    //     amountOfElements = 8;
    // } else if (round === 5) {
    //     amountOfElements = 10;
    // }

    for (let i = 0; i < amountOfElements; i++) {
        randomNumber = randomIndex(arr);            //случайное число(случайный индекс элемента с клавиатуры)
        randomElements.push(arr[randomNumber]);     //создаю массив с этими элементами
        console.log(randomNumber);
    }
    return randomElements;
}

//'подсветить' поочереди случайный эл-ты с клавиатуры (arr = массив со случайными элементами с клавиатуры)
export let highlightTheSequence = (arr) => {
    let time = 1000;
    for (let i = 0; i < arr.length; i++) {
        let element = document.getElementById(`${arr[i]}`);
        setTimeout(() => {
            element.style.backgroundColor = 'violet';
            setTimeout(function () {
                element.style.backgroundColor = '';
            }, 1000);
        }, time);
        time += 1000;
    }
}



console.log(getRandomElements(letters))