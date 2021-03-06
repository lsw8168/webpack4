import _ from 'lodash';
import './style.css';
import {cube} from './math.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    let element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!', '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
