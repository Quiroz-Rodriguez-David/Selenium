const {Builder, By, Key, until}=require("selenium-webdriver");
const chrome=require("selenium-webdriver/chrome");

const driver= new Builder().forBrowser("chrome").build();
(async function DropdownMenu(){
     try{
        driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form")
        // se crean variables con consusltas para poder reutilizarlas y no estar sobreeescribiendo el ismo codigo
        // en esta actividad los select se dio doble click uno para abrir y otro para cerrar y por eso de las condiciones.
        const select1= (await (await driver).findElement(By.xpath("//nb-select[@formcontrolname='select1']/button")));
         await select1.click();
         (await (await driver).findElement(By.xpath("//nb-option[@value='1']"))).click();
         (await (await driver).findElement(By.xpath("//nb-option[@value='2']"))).click()
         await select1.click();
         (await (await driver).findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="0: 'volvo'"]`))).click();
         (await (await driver).findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="3: 'audi'"]`))).click();
         const select3= await (await (await driver).findElement(By.xpath('//nb-select[@formcontrolname="select3"]/button'))).click();
         select3;
         (await (await driver).findElement(By.xpath('//nb-option[@value="3"]'))).click()
         select3;
        const select4=await (await (await driver).findElement(By.xpath('//select[@formcontrolname="select4"]'))).click();
        select4;
        (await (await driver).findElement(By.xpath('//select[@formcontrolname="select4"]/option[@value="audi"]'))).click();
        select4;
        (await (await driver).findElement(By.xpath('//button[@id="submit"]'))).click();
     }catch (error){
         console.log(error);
     }
}
    )();
