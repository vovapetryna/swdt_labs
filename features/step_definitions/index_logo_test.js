const { When } = require('@cucumber/cucumber');
const { sleep } = require('../../utils/cucumber_utils');
const { protractor } = require("protractor");
const { clickLogo } = require('./page_objects/main_page')

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

When('I click to epam logo', { timeout: 60 * 1000 }, async function () {
  const res = await clickLogo(protractor);
  await sleep(2000);
});