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

// let changeColor = (element, time) => setTimeout(() => {
//     element.style.backgroundColor = 'violet';
//     setTimeout(function () {
//         element.style.backgroundColor = '';
//     }, 1000);
// }, time);

export let showTheSequence = () => {
    let arr = [1, 'Q', 2];
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







