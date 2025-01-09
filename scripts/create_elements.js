export let createElement = (settings) => {
    const { tag = 'div', text = '', parent, removeChildren, classes = [], id } = settings;

    let element = document.createElement(tag);
    element.textContent = text;

    if (parent != null) {
        if(removeChildren != null) {
            while(parent.firstChild) {
                parent.removeChild(parent.firstChild)
            }
        }
        parent.append(element);
    }

    if (id === 'true') {
        element.setAttribute('id', `${text}`);
    }

    if (classes.length > 0) {
        element.classList.add(...classes);
    }

    return element;
}

export let createRadioButton = (settings) => {
    const {value = '', name = 'level', id = '', text = '', parent, classes = [], checked } = settings;

    let element = document.createElement('input');
    element.setAttribute('type', 'radio');
    element.setAttribute('value', value);
    element.setAttribute('name', name);
    element.setAttribute('id', id);    

    let label = createElement({ tag: 'label', text: text, parent, classes: []});
    label.setAttribute('for', `${id}`);

    if (parent != null) {
        parent.appendChild(element);
    }

    if (classes.length > 0) {
        element.classList.add(...classes);
    }

    if (checked==='true') { 
        element.setAttribute('checked', '');
    }

    return element;
}
    

    
