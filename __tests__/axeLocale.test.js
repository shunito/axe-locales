const {axeLocale, getLocaleList} = require('../dist/index');

test('axeLocale is Function', () => {
  expect( typeof(axeLocale) ).toBe( "function" );
});

test('Locale list is not empty', () => {
  const list = getLocaleList();
  expect( list.length ).toBeGreaterThan(1);
});

test('Read JA Locale is fine', () => {
  const loc = axeLocale("ja");
  expect( loc.lang ).toBe("ja");
});

test('Read Zombie Locale is Undefined', () => {
  const loc = axeLocale("zombie");
  expect( loc.lang ).toBeUndefined();
});

test('Window is Undefined', () => {
  window = undefined;
  const loc = axeLocale("");
  expect( loc.lang ).toBeUndefined();
});

test('Auto Language select (Mock de)', () => {
  // Set browser Languages to 'de'
  Object.defineProperty(window.navigator, "languages", {
    value: ['de'],
    writable: false
  });
  const loc = axeLocale("");
  expect( loc.lang ).toBe("de");
});
