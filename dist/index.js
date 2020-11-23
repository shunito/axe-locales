"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locales_json_1 = require("./locales.json");
// comment
function requireLocation(lang) {
    if (locales_json_1.locales.includes(lang)) {
        const AXE_LOCALE = require(`axe-core/locales/${lang}.json`);
        return {
            locale: AXE_LOCALE
        };
    }
    else {
        return {};
    }
}
function axeLocation(lang) {
    if (lang.length === 0 || lang === 'auto') {
        const language = (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language;
        return requireLocation(language);
    }
    else {
        return requireLocation(lang);
    }
}
exports.default = axeLocation;
// dev
console.log(locales_json_1.locales);
//# sourceMappingURL=index.js.map