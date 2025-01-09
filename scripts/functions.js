export let setAttribute = (element) => {
    element.setAttribute('disabled', '');
}

export let removeAttribute = (element) => {
    element.removeAttribute('disabled', '');
}

export let randomIndex = (arr) => {
    let number = Math.floor(Math.random() * arr.length);
    return number;
}

//проверка введенной последовательности
export let checkTheInputSequence = (arr, randomElements, count, message) => {
    if (arr[count] !== randomElements[count]) {
        message.classList.remove('hidden');
    } else if (arr[count] === randomElements[count]) {
        console.log('right!')
    }
}








