const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('educ', Key.RETURN);
    await driver.wait(until.titleIs('educ - Google Search'), 1000);
  
})();