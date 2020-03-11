const {Builder}= require("selenium-webdriver");
const firefox=require("selenium-webdriver/firefox");
const proxy=require("selenium-webdriver/proxy");
const options = new firefox.Options();
options.setProfile("./seleniumTutorial");
const proxyServer="148.213.20.47:8080";
const driver= new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .setProxy(proxy.manual({
        http:proxyServer,
        https:proxyServer
    }))
    .build();
driver.get('https://whatismyipaddress.com/');

//103.215.177.180
// //NUEVA VERCION V2
// const {Builder}= require("selenium-webdriver");
// const firefox=require("selenium-webdriver/firefox")
// const options = new firefox.Options();

// options.setProfile("./seleniumTutorial");

// const driver= new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

// driver.get('http://google.com');

// ESTA ERA LA ANTIGUA VERSION DEL PROGRAMA
// const {Builder}= require("selenium-webdriver");
// const firefox=require("selenium-webdriver/firefox")
// const options = new firefox.Options();

// options.setPreference("browser.download.dir","C:\\mySeleniumDowloads");
// options.setPreference("browser.download.folderList",2);
// options.setPreference("browser.helperApps.neverAsk.saveToDisk","application/x-csv")

// const driver= new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

// driver.get('http://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv');