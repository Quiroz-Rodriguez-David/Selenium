const {Builder}= require("selenium-webdriver");
const firefox=require("selenium-webdriver/firefox")
const options = new firefox.Options();

const driver= new Builder().forBrowser('firefox').build();

options.setPreference("browser.download.dir","C:\\mySeleniumDowloads");
options.setPreference("browser.download.folderList",2);
options.setPreference("browser.helperApps.neverAsk.saveToDisk","application/x-csv")
driver.get('http://facebook.com');