module.exports.setSearchTextAndSubmit = async function (protractor) {
  const element = await protractor.element(by.xpath('//*[@placeholder="Ключове слово"]'))
  return element.submit();
}

module.exports.getSearchResult = async function (protractor) {
  return await protractor.element(by.className('search-result__heading')).getText();
}