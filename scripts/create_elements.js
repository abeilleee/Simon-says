export let createElement = (settings) => {
    const { tag = 'div', text = '', parent, classes = [] } = settings;

    let element = document.createElement(tag);
    element.textContent = text;

    if (parent != null) {
        parent.appendChild(element);
    }

    if (classes.length > 0) {
        element.classList.add(...classes);
    }

    return element;
}

