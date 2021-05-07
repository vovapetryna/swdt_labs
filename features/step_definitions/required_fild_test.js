const { When, Then } = require('@cucumber/cucumber');
const { browser, protractor } = require("protractor");
const { expect } = require('chai');
const { clickRelease, getBorderColor } = require('./page_objects/form')

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

When('I click and release input', { timeout: 60 * 1000 }, async function () {
  await clickRelease(protractor, browser)
});

Then('I see red border', { timeout: 60 * 1000 }, async function () {
  const color = await getBorderColor(protractor);
  expect(color.toString() === 'rgb(241, 92, 67)').to.equal(true);
});
