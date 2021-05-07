module.exports.clickRelease = async function (protractor, browser) {
  browser.executeScript('window.scrollBy(0,600)');
  const e1 = await protractor.$$('input.form-component__input').first();
  await e1.click();
  await e1.submit();
}

module.exports.getBorderColor = async function (protractor) {
  return await protractor.$$('input.form-component__input').first().getCssValue("border-color");
}