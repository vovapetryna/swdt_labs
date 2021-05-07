const { When, Then } = require('@cucumber/cucumber');
const { getIndex, testInit } = require('../../utils/cucumber_utils');
const { browser, protractor } = require("protractor");
const { expect } = require('chai');
const { getBreadcrumbLastText } = require('./page_objects/main_page')

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

When('I go to {string}', { timeout: 60 * 1000 }, async function (page) {
  await testInit(protractor);
  await browser.get(getIndex('en') + page);
});

Then('I see main - {string} breadcrumb', { timeout: 60 * 1000 }, async function (bText) {
  const text = await getBreadcrumbLastText(protractor);
  expect(text.toLowerCase() === bText.toLowerCase()).to.equal(true);
});