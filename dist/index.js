"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleList = exports.axeLocale = void 0;
const locales_json_1 = require("./locales.json");
// comment
function requireLocation(lang) {
    if (locales_json_1.locales.includes(lang)) {
        const AXE_LOCALE = require(`axe-core/locales/${lang}.json`);
        return AXE_LOCALE;
    }
    else {
        return false;
    }
}
function axeLocale(lang) {
    if (lang.length === 0 || lang === 'auto') {
        const language = (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language;
        return requireLocation(language);
    }
    else {
        return requireLocation(lang);
    }
}
exports.axeLocale = axeLocale;
function getLocaleList() {
    return locales_json_1.locales;
}
exports.getLocaleList = getLocaleList;
//# sourceMappingURL=index.js.map