
// Types
type locale = string;
interface localeArray extends Array<locale> {}

import {locales} from './locales.json';

function requireLocale(lang: string): Object {
  if(locales.includes(lang)){
    try {
      const AXE_LOCALE = require(`axe-core/locales/${lang}.json`);
      return AXE_LOCALE;
    } catch ( error ){
      return {};
    }
  }
  else{
    return {};
  }
}

export function axeLocale (lang: string): Object {
  if( lang.length === 0 || lang === 'auto') {
    if (window === undefined) return {};
    const language = (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language;
    return requireLocale(language);
  }
  else{
    return requireLocale(lang);
  }
}

export function getLocaleList (): localeArray {
  return locales;
}
