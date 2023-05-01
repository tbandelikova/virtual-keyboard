export const keyClasses = {
    LANG: ['en', 'by'],
    STATE: ['caseDown', 'caseUp', 'caps', 'shiftCaps'],
    CODE: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
        'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
        'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
        'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
        'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
    ],
    SPECIAL: ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight',
        'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'
    ],
};

export const en = {
    caseDown: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
        'Ctrl', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'
    ],
    caseUp: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
        'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
        'Ctrl', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'
    ],
    caps: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
        'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift',
        'Ctrl', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'
    ],
    shiftCaps: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter',
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '↑', 'Shift',
        'Ctrl', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'
    ],
};

export const by = {
    caseDown: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'ў', 'з', 'х', '\'', '\\', 'Del',
        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
        'Shift', 'я', 'ч', 'с', 'м', 'і', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
        'Ctrl', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'
    ],
    caseUp: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Ў', 'З', 'Х', '\'', '/', 'Del',
        'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
        'Shift', 'Я', 'Ч', 'С', 'М', 'І', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
        'Ctrl', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'
    ],
    caps: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Ў', 'З', 'Х', '\'', '\\', 'Del',
        'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
        'Shift', 'Я', 'Ч', 'С', 'М', 'І', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift',
        'Ctrl', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'
    ],
    shiftCaps: ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'ў', 'з', 'х', '\'', '/', 'Del',
        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
        'Shift', 'я', 'ч', 'с', 'м', 'і', 'т', 'ь', 'б', 'ю', ',', '↑', 'Shift',
        'Ctrl', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'
    ]
};