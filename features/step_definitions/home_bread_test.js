const { When } = require('@cucumber/cucumber');
const { sleep } = require('../../utils/cucumber_utils');
const { protractor } = require("protractor");
const { clickFirstBreadcrumb } = require('./page_objects/main_page')

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

When('I click to home breadcrumb', { timeout: 60 * 1000 }, async function () {
  const res = await clickFirstBreadcrumb(protractor);
  await sleep(2000);
});