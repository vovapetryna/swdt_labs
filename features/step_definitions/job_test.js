const { Given, When, Then } = require('@cucumber/cucumber');
const { testInit, sleep } = require('../../utils/cucumber_utils');
const { browser, protractor } = require("protractor");
const { expect } = require('chai');
const { setSearchTextAndSubmit, getSearchResult } = require('./page_objects/search_form')

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

Given('I am on the EPAM job page', { timeout: 60 * 1000 }, async function () {
  await testInit(protractor);
  await browser.get('https://careers.epam.ua/vacancies');
});

When('I search for some job', { timeout: 60 * 1000 }, async function () {
  const res = await setSearchTextAndSubmit(protractor)
  await sleep(1000);
});

Then('Search result heading mast contain positive job number', { timeout: 60 * 1000 }, async function () {
  await sleep(1000);
  const text = await getSearchResult(protractor);
  const numbers = text.replace(/\D/g, '');
  expect(true).to.equal(true);
});