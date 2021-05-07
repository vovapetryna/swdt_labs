const { sleep } = require("../../../utils/cucumber_utils");

module.exports.selectFilter = async function (protractor, browser) {
  browser.executeScript('window.scrollBy(0,1000)');
  await sleep(1000);
  await protractor.$$(".selected-params").first().click();
  await sleep(1000);
  return await protractor.$$(".checkbox-custom-label").first().click();
}

module.exports.getFilterCartText = async function (protractor) {
  return await protractor.$$(".filter-tag").first().getText();
}
