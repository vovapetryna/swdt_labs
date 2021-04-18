const assert = require('assert');
const {Builder, By, Capabilities, Key, until} = require('selenium-webdriver');
const {Given, When, Then} = require('@cucumber/cucumber');
const {getIndex} = require('../../utils/cucumber_utils')
const {expect} = require('chai');

require("chromedriver");
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', {"w3c": false});
const driver = new Builder().withCapabilities(capabilities).build();
driver.manage().window().maximize();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//---- Lang impl ----//

Given('I am on the EPAM {string} index page', async function (lang) {
    await driver.get(getIndex(lang));
});

When('I change language to {string}', async function (newLang) {
    await driver.get(getIndex(newLang));
});

Then('the page main text should start with {string}', {timeout: 60 * 1000}, async function (searchTerm) {
    const element = await driver.findElement(By.className('title-slider__slide-row'));
    const text = await element.getText();
    const isStartWithTest = text.toLowerCase().lastIndexOf(`${searchTerm.toLowerCase()}`, 0) === 0;
    expect(isStartWithTest).to.equal(true);
});

//---- Job impl ----//
Given('I am on the EPAM job page', async function () {
    await driver.get('https://careers.epam.ua/vacancies');
});

When('I search for some job', async function () {
    const element = await driver.findElement(By.xpath('//*[@placeholder="Ключове слово"]'));
    element.submit();
    await sleep(2000);
});

Then('Search result heading mast contain positive job number', {timeout: 60 * 1000}, async function () {
    await sleep(2000);
    const element = await driver.findElement(By.className('search-result__heading'));
    const text = await element.getText();
    const numbers = text.replace(/\D/g, '');
    expect(parseInt(numbers) > 0).to.equal(true);
});

//---- Breadcrumb impl ----//
When('I go to {string}', async function (page) {
    await driver.get(getIndex('en') + page);
});

Then('I see main - {string} breadcrumb', {timeout: 60 * 1000}, async function (bText) {
    const elements = await driver.findElements(By.className('breadcrumbs__link'));
    const element = elements[elements.length - 1];
    const text = await element.getText();
    expect(text.toLowerCase() === bText.toLowerCase()).to.equal(true);
});

//---- Index logo imp ----//
When('I click to epam logo', async function () {
    const element = await driver.findElement(By.className('header__logo-container'));
    element.click();
    await sleep(2000);
});

//---- Home breadcrumb imp ----//
When('I click to home breadcrumb', async function () {
    const elements = await driver.findElements(By.className('breadcrumbs__link'));
    const element = elements[0];
    element.click();
    await sleep(2000);
});

//---- insights filter imp ----//
When('I select first filter', {timeout: 60 * 1000}, async function () {
    driver.executeScript("window.scrollBy(0,1000)");
    await sleep(2000);
    const elementRow = await driver.findElement(By.className('selected-params'));
    elementRow.click();
    await sleep(2000);
    const element = await driver.findElement(By.className('checkbox-custom-label'));
    element.click();
    await sleep(2000);
});

Then('I see that filter cart text {string}', async function (bText) {
    await sleep(2000);
    const element = await driver.findElement(By.className('filter-tag'));
    const text = await element.getText();
    expect(text.toLowerCase() === bText.toLowerCase()).to.equal(true);
});

//---- required field imp ----//
When('I click and release input', {timeout: 60 * 1000}, async function () {
    driver.executeScript("window.scrollBy(0,600)");
    await sleep(500);
    const elements = await driver.findElements(By.css('input.form-component__input'));
    const thisElem = elements[0];
    const thatElem = elements[1];
    thisElem.click();
    await sleep(500);
    thatElem.click();
    await sleep(500);
    thisElem.click();
    await sleep(500);
    thatElem.click();
});

Then('I see red border', async function () {
    const elements = await driver.findElements(By.css('input.form-component__input'));
    const thisElem = elements[0];
    const color = await thisElem.getCssValue("border-color");
    expect(color.toString() === 'rgb(241, 92, 67)').to.equal(true);
});

//---- contact us button imp ----//
When('I click to email button', async function () {
    const element = await driver.findElement(By.css('a.cta-button--envelope'));
    element.click();
    await sleep(500);
})

Then('I see contact us page', async function () {
    const element = await driver.findElement(By.css('h1.title-ui'));
    const text = await element.getText();
    expect(text.toLowerCase() === "Contact Us".toLowerCase()).to.equal(true);
});