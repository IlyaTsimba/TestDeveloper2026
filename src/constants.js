export const LOCAL_STORAGE_KEY = "notes";

export const DEFAULT_FONT_SIZE = 30;

export const FONT_SIZE_LIMITS = {
    MIN: 6,
    MAX: 100,
    STEP: 2
};

export const UI_TEXT = {
    SIDEBAR_HEADER: "Заметки",
    ADD_NOTE_BTN: "+",
    DELETE_NOTE_BTN: "X",
    TITLE_PLACEHOLDER: "Заголовок",
    CONTENT_PLACEHOLDER: "Сделайте заметку...",
    UNTITLED_NOTE: "Без названия"
};

export const NEW_NOTE_DEFAULTS = {
    title: UI_TEXT.UNTITLED_NOTE,
    content: "",
    settings: {
        fontSize: DEFAULT_FONT_SIZE,
    }
};

export const DEFAULT_NOTE = {
    id: 1,
    title: "Добро пожаловать!",
    content: "Сделайте заметку...",
    settings: {
        fontSize: DEFAULT_FONT_SIZE,
    }
};

export const PREVIEW_LENGTH = 30;
