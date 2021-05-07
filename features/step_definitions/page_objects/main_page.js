module.exports.getMainText = async function (protractor) {
  return await protractor.$$(".title-slider__slide-row").last().getText();
}

module.exports.getBreadcrumbLastText = async function (protractor) {
  return await protractor.$$(".breadcrumbs__link").last().getText();
}

module.exports.clickFirstBreadcrumb = async function (protractor) {
  return await protractor.$$(".breadcrumbs__link").first().click();
}

module.exports.clickLogo = async function (protractor) {
  const element = await protractor.element(by.className('header__logo-container'));
  return element.click();
}

module.exports.clickEnvelop = async function (protractor) {
  const element = await protractor.$$('a.cta-button--envelope').first();
  return element.click();
}

