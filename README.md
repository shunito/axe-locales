# axe-locales
axe locale selector

## Setup

```shell
npm install -D axe-locales
# or
yarn add -D axe-locales
```


## Useage
If you set a language that does not exist, an empty object will be returned.

```js
// require module
const {axeLocale, getLocaleList} = require('axe-locales');

// locale selector
const locale = axeLocale("ja");   // Fix Language
const locale = axeLocale("auto"); // Auto Select(from browser setting)
const locale = axeLocale("zombie"); // ->  {}

// get locale list
const list = getLocaleList(); // -> ["da", "de", "es", "eu", "fr", "ja", "ko", "nl", "pt_BR"]
```


## Register Axe plugins.

```js
import Vue from 'vue'
import { axeLocale } from 'axe-locales'

const reportLang = "auto";
const axeConfig = { config:{} };

if (process.env.NODE_ENV === 'development') {
  const locale = axeLocale(reportLang);
  const VueAxe = require('vue-axe').default

  // Be careful not to overwrite the locale if the language does not exist
  if(Object.keys(locale).length){
    Object.assign(axeConfig, {
      config: {
        "locale": locale
      }
    });
  }
  Vue.use(VueAxe, axeConfig);
}
```

