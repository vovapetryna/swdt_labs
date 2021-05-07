const { When, Then } = require('@cucumber/cucumber');
const { protractor } = require("protractor");
const { expect } = require('chai');
const { clickEnvelop } = require('./page_objects/main_page');
const { getTitle } = require('./page_objects/contuct_us_page');

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);


When('I click to email button', { timeout: 60 * 1000 }, async function () {
  await clickEnvelop(protractor);
})

Then('I see contact us page', { timeout: 60 * 1000 }, async function () {
  const text = await getTitle(protractor);
  expect(text.toLowerCase() === "Contact Us".toLowerCase()).to.equal(true);
});