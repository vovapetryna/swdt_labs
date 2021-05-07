const { Given, When, Then } = require('@cucumber/cucumber');
const { getIndex, testInit } = require('../../utils/cucumber_utils');
const { browser, protractor } = require("protractor");
const { expect } = require('chai');
const { getMainText } = require('./page_objects/main_page')

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

Given('I am on the EPAM {string} index page', { timeout: 60 * 1000 }, async function (lang) {
    await testInit(protractor);
    await browser.get(getIndex(lang));
});

When('I change language to {string}', async function (newLang) {
    await browser.get(getIndex(newLang));
});

Then('the page main text should start with {string}', { timeout: 60 * 1000 }, async function (searchTerm) {
    const text = await getMainText(protractor);
    const isStartWithTest = text.toLowerCase().lastIndexOf(`${searchTerm.toLowerCase()}`, 0) === 0;
    expect(isStartWithTest).to.equal(true);
});