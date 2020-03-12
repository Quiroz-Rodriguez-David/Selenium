const {Builder,By,}= require("selenium-webdriver");
const chrome=require("selenium-webdriver/chrome");

const driver=new Builder().forBrowser('chrome').build();
(async function registro(){
    try
    {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await (await driver).findElement(By.name("email")).sendKeys("example@gmail.com");
        (await driver).findElement(By.id("password")).sendKeys("1234565");
        (await driver).findElement(By.name("submit")).click();

    }catch(error){
        console.log(error);
    }

})();