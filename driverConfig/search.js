const {Builder,By,Key,until} =require("selenium-webdriver");
const driver=new Builder().forBrowser("chrome").build();

(async function buscadores(){
    try{
        (await driver).get("https://yahoo.com");
        (await driver).get("https://google.com");
    }catch(error){
        console.log(error);
    }
})();