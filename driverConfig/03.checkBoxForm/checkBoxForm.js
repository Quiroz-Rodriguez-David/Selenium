//localizar un texto de liga con selenium //div[@class="col-lg-2 col-md-3 col-sm-4 col-xs-12"]/div/div/h5/a[text()="BIOLOGIA  - A"]
const {Builder,By,}= require("selenium-webdriver");
const chrome=require("selenium-webdriver/chrome");

const driver=new Builder().forBrowser('chrome').build();
(async function checkboxForm(){
    try{
        await (await driver).get('https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form');
        (await driver).findElement(By.xpath("//input[@id='name']")).sendKeys("David Quiroz");
        (await driver).findElement(By.xpath("//input[@name='comment']")).sendKeys("Mi comentario es divertido");
        await (await (await driver).findElement(By.xpath("//input[@value='presidential-suite']/following::span"))).click();
        (await (await driver).findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span"))).click();
        (await (await driver).findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span"))).click();
    } catch(error){
        console.log(error)
    }

})();