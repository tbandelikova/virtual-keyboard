import { createHeader } from "./components/createHeader.js";
import { createMain } from "./components/createMain.js";
import { keyClasses } from "./common/classes.js";

window.onload = () => {
    initApp();
}

const initApp = () => {
    const body = document.body;
    createHeader(body);
    const main = createMain(body);

    const keys = Array.from(main.keyboard.children);
    const caps = keys.find(el => el.classList.contains('CapsLock'));

    const langKeyCodes = ['ControlLeft', 'AltLeft'];
    const languages = ['en', 'by'];
    let currentLang = languages[0];
    let pressed = new Set();

    document.addEventListener('keydown', (e) => {
        if (keyClasses.CODE.includes(e.code)) {
            const pressedKey = keys.find(el => el.classList.contains(e.code));
            const isSpecial = keyClasses.SPECIAL.includes(e.code);
            const symbol = !isSpecial && changeSymbol(Array.from(pressedKey.children));

            if (e.code != 'CapsLock') {
                pressedKey.classList.add('active');
            }

            if (!isSpecial) {
                main.screen.value += symbol;
            } else {
                specialAction(e, e.code);
            }

            //------To change language----------
            pressed.add(e.code);
            for (let code of langKeyCodes) {
                if (!pressed.has(code)) {
                    return;
                }
            }
            pressed.clear();
            changeLang();
            //-----------------------------------
        }
    });

    document.addEventListener('keyup', (e) => {
        if (keyClasses.CODE.includes(e.code)) {
            if (e.code != 'CapsLock') {
                const unPressedKey = keys.find(el => el.classList.contains(e.code));
                unPressedKey.classList.remove('active');

                if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
                    const isCaps = caps.classList.contains('active');
                    isCaps ? changeVisualKey('caps') : changeVisualKey('caseDown');
                }
            }
            pressed.delete(e.code);
        }
    });

    const specialAction = (e, code) => {
        const screen = main.screen;

        switch (code) {
            case 'Backspace': screen.value = screen.value.slice(0, screen.selectionEnd - 1) + screen.value.slice(screen.selectionEnd);
                break;
            case 'Tab': {
                e.preventDefault();
                screen.value += '  '
            }
                break;
            case 'Delete': screen.value = screen.value.slice(0, screen.selectionStart) + screen.value.slice(screen.selectionEnd);
                break;
            case 'CapsLock': {
                caps.classList.toggle('active');

                const isCaps = caps.classList.contains('active');
                isCaps? changeVisualKey('caps') : changeVisualKey('caseDown');
            }
                break;
            case 'ShiftLeft':
            case 'ShiftRight': {
                const isCaps = caps.classList.contains('active');
                isCaps ? changeVisualKey('shiftCaps') : changeVisualKey('caseUp');
            }
                break;
            case 'Enter': screen.value += '\n';
                break;
            case 'ArrowLeft': screen.value += '◁';
                break;
            case 'ArrowUp': screen.value += '△';
                break;
            case 'ArrowDown': screen.value += '▽';
                break;
            case 'ArrowRight': screen.value += '▷';
                break;
        }
    }

    const changeVisualKey = (spanClass) => {
        keys.map(key => {
            const currentSet = key.querySelector(`.${currentLang}`).children;
            Array.from(currentSet).map(span => span.classList.contains(spanClass) ?
                span.classList.remove('hidden') : span.classList.add('hidden'));
        });
    }

    const changeSymbol = (key) => {
        const langSpan = key.find(el => el.classList.contains(`${currentLang}`));
        const visualKey = Array.from(langSpan.children).find(span => !span.classList.contains('hidden'));
        return visualKey.textContent;
    }

    const changeLang = () => {
        currentLang = (currentLang == languages[0]) ? languages[1] : languages[0];
        let prevLang = (currentLang == languages[0]) ? languages[1] : languages[0];

        keys.map(key => {
            const currentSet = key.querySelector(`.${currentLang}`).children;
            const setToHide = key.querySelector(`.${prevLang}`).children;

            Array.from(setToHide).map(span => span.classList.add('hidden'));
            Array.from(currentSet).map((span, i) => {
                if (i == 0) span.classList.remove('hidden');
            });
        })
    }
};

