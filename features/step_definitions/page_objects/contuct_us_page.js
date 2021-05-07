module.exports.getTitle = async function (protractor) {
  return await protractor.$$('h1.title-ui').first().getText();
}