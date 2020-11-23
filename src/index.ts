
// Types
type locale = string;
interface localeArray extends Array<locale> {}

import {locales} from './locales.json';

// comment
function requireLocation(lang: string): any {
  if(locales.includes(lang)){
    const AXE_LOCALE = require(`axe-core/locales/${lang}.json`);
    return {
      locale: AXE_LOCALE
    };
  }
  else{
    return {};
  }
}

export default function axeLocation (lang: string) {
  if( lang.length === 0 || lang === 'auto'){
    const language = (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language;
    return requireLocation(language);
  }
  else{
    return requireLocation(lang);
  }
}


// dev
console.log(locales);
