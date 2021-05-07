const { When, Then } = require('@cucumber/cucumber');
const { sleep } = require('../../utils/cucumber_utils');
const { browser, protractor } = require("protractor");
const { expect } = require('chai');
const { selectFilter, getFilterCartText } = require('./page_objects/filter')

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

When('I select first filter', { timeout: 60 * 1000 }, async function () {
  await selectFilter(protractor, browser);
  await sleep(2000);
});

Then('I see that filter cart text {string}', { timeout: 60 * 1000 }, async function (bText) {
  const text = await getFilterCartText(protractor)
  expect(text.toLowerCase() === bText.toLowerCase()).to.equal(true);
});