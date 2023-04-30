import { createElement } from '../common/createElement.js';

export const createHeader = (parent) => {
    const header = createElement('header', {
        className: 'header'
    });
    const container = createElement('div', {
        className: 'header__container container'
    });
    const title = createElement('h1', {
        className: 'header__title',
        textContent: 'RSS Virtual Keyboard'
    });
    const description = createElement('p', {
        className: 'header__description',
        textContent: 'Virtual keyboard was created in Windows'
    });

    container.append(title, description);
    header.append(container);
    parent.append(header);
}