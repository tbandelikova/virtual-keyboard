import { createElement } from "../common/createElement.js";
import { keyClasses, en, by } from "../common/classes.js";

export const createKey = (code, index, parent) => {
    const key = createElement('div', {
        className: `keyboard__key key ${code}`
    });

    const langEn = createElement('span', {
        className: 'en'
    });
    const langBy = createElement('span', {
        className: 'by'
    });

    keyClasses.STATE.map((state, i) => {
        langEn.append(createElement('span', {
            className: i == 0? state : `${state} hidden`,
            textContent: en[state][index]
        }));
        langBy.append(createElement('span', {
            className: `${state} hidden`,
            textContent: by[state][index]
        }));
    });
    key.append(langEn, langBy);

    parent.append(key);
}