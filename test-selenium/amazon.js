const {Builder, By, Key, until}=require("selenium-webdriver");
const chrome= require('selenium-webdriver/chrome');
(async function amazon(){
    let driver=new Builder().forBrowser('chrome').build();
    driver.get('https://www.amazon.com.mx/');
    (await driver).findElement(By.id('twotabsearchtextbox')).sendKeys('Xiaomi mi 9');
    (await driver.findElement(By.className('nav-input'))).click();
})();