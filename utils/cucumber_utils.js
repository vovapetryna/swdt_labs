const { element } = require("protractor");

module.exports.getIndex = function getIndex(lang) {
    if (lang === 'ru') {
        return 'https://www.epam-group.ru/';
    } else if (lang === 'en') {
        return 'https://www.epam.com/';
    } else if (lang === 'ua') {
        return 'https://careers.epam.ua/';
    } else {
        return 'https://www.epam.com/';
    }
}

module.exports.testInit = async function (protractor){
	await protractor.browser.waitForAngularEnabled(false);
	await protractor.browser.driver.manage().window().maximize();
	await protractor.browser.sleep(500);
}

module.exports.waitCondition = function() {
	return element(by.css('body')).isPresent();
}

module.exports.sleep = function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}