const {Builder,By,}= require("selenium-webdriver");
const chrome=require("selenium-webdriver/chrome");

const driver=new Builder().forBrowser('chrome').build();
(async function radioButtonForm(){
    try
    {
        (await driver).get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        (await driver).findElement(By.css("#title")).sendKeys("esta es una oracion de mas de 20m caracteres");
        (await driver).findElement(By.css("#description")).sendKeys("la descripcion debe de tener 20 caracteres");
        (await driver.findElement(By.css("div:nth-child(1) > label > span.custom-control-indicator"))).click() //seleciona el 1er radio button
        //(await (await driver).findElement(By.css('div:nth-child(2) > label > span.custom-control-indicator'))).click(); //selecciona el 2do radio
        ;(await (await driver).findElement(By.css("#submit"))).click();


    } catch(error){
        console.log(error);
    }

})();