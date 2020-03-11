const {Builder}=require("selenium-webdriver");
(
    async function firefox(){
        let driver=new Builder().forBrowser("firefox").build();
        driver.get('https://www.google.com.mx/');
    }
)();