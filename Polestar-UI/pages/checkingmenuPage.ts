const { test, expect } = require("@playwright/test")
import { Page } from "@playwright/test"
import { pagefixture } from "../src/tests/steps/Pagefixture"
import playwrightWrapper from "../helper/Wrapper/playwrightWrapper";


class checkingmenuPage extends playwrightWrapper{
polestar3Menu: any 
HoveronTestDrive: any 
TestDriveText: any  

    constructor(page){
     super(pagefixture.page)
     this.page = page;
        this.polestar3Menu =this.page.locator("(//div[@class='css-1jof5mm']/button)[2]")
        this.HoveronTestDrive =this.page.locator("//a[@id='RBw8ZjGeRJ2y4-BDFbAUJw']")
        this.TestDriveText = this.page.locator("(//div[@class='css-289fc1']//h1)[1]");

    }

    async verifyPolestar3MenuOption(){

        await this.polestar3Menu.click();
    }

    async verifyHover(){


        await this.HoveronTestDrive.click();
    }
    
    async VerifyTestDriveText(){


        await expect(await this.TestDriveText).toBeVisible();
    }


}

export default checkingmenuPage;
    

    

