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

export let removeHover = (arr) => {
    arr.forEach((elem) => elem.classList.remove('letter__hover'));
}






