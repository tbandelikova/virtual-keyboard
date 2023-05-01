import { createElement } from '../common/createElement.js';
import { keyClasses } from '../common/classes.js';
import { createKey } from './createKey.js';

export const createMain = (lang, parent) => {
    const main = createElement('main', {
        className: 'main'
    });
    const container = createElement('div', {
        className: 'main__container container'
    });

    //Screen
    const screen = createElement('textarea', {
        className: 'screen',
        rows: 5,
        cols: 50
    });
    screen.setAttribute('readonly', 'readonly');

    //Keyboard
    const keyboard = createElement('div', {
        className: 'keyboard'
    });
    keyClasses.CODE.map((el, i) => {
        createKey(lang, el, i, keyboard);
    });

    container.append(screen, keyboard);
    main.append(container);
    parent.append(main);

    return { screen, keyboard };
};