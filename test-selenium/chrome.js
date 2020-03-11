const {Builder,By,Key,until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function myFunction() {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.get('https://www.google.com.mx/');
    })();