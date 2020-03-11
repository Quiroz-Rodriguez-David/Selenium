const {Builder, By, key, until}=require("selenium-webdriver");
(async function educ(){
    let driver=await new Builder().forBrowser('firefox').build();
        driver.get('http://educ.ddns.net:88/');
        await (await driver.findElement(By.className('btn btn-success btn-block btn-lg btn-wayf'))).click();
        await (await driver.findElement(By.name('idp_https://idp.ucol.mx/'))).click();
        await driver.findElement(By.id('username')).sendKeys('usuario');
        await driver.findElement(By.id('password')).sendKeys('pass');
        await (await driver.findElement(By.className('btn'))).click();
        await (await driver.findElement(By.linkText('Hipermedia - K'))).click()
})();

// tambien se puede ingresar con el navegador chrome 
//const {Builder,By,Key,until} = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// (async function myFunction() {
//     let driver = await new Builder().forBrowser('chrome').build();
//     driver.get('http://educ.ddns.net:88/');
//         await (await driver.findElement(By.className('btn btn-success btn-block btn-lg btn-wayf'))).click();
//         await (await driver.findElement(By.name('idp_https://idp.ucol.mx/'))).click();
//         await driver.findElement(By.id('username')).sendKeys('usuario');
//         await driver.findElement(By.id('password')).sendKeys('pass');
//         await (await driver.findElement(By.className('btn'))).click();
//         (await driver.findElement(By.css('img[src="/img/tmp/default.jpg"]'))).click()
//     })();