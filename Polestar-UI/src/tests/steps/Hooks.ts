import { Before, After, Status } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";
import { pagefixture } from "./Pagefixture";
import checkingmenuPage from "../../../pages/checkingmenuPage";
import loginPage from "../../../pages/loginPage";

let page: Page
let browser: Browser

Before(async function() {
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage();
    pagefixture.page = page;
    pagefixture.verifypolestarmenu = new checkingmenuPage(pagefixture.page);
    pagefixture.verifyLoginPage = new loginPage(pagefixture.page);
    
});

After(async function ({pickle,result}) {
   if(result.status==Status.FAILED){
const timestamp = new Date().toISOString().replace(/[:.-]/g, '_')  
  const image= await pagefixture.page.screenshot({path:`./results/failed-screenshots/${pickle.name}-${timestamp}`, type:"png"});
     await this.attach(image,"img/png")
   }
    await  pagefixture.page.close();
await browser.close();
    
});

