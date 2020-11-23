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
  expect( loc ).toBeTruthy();
});

test('Read Zombie Locale is Undefined', () => {
  const loc = axeLocale("zombie");
  expect( loc ).toBeFalsy();
});
