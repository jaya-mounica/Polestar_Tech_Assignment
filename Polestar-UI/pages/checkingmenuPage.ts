const { test, expect } = require("@playwright/test")
import { Page } from "@playwright/test"
import { pagefixture } from "../src/tests/steps/Pagefixture"
import playwrightWrapper from "../helper/Wrapper/playwrightWrapper";
import { locators } from "../Locators/HomepageElements";


class checkingmenuPage extends playwrightWrapper {
    locator: locators;

    polestar3Menu: any
    HoveronTestDrive: any
    TestDriveText: any

    constructor(page) {
        super(pagefixture.page)
        this.page = page;
        this.locator = new locators();
        // this.polestar3Menu =this.page.locator("(//div[@class='css-1jof5mm']/button)[2]")
        // this.HoveronTestDrive =this.page.locator("//a[@id='RBw8ZjGeRJ2y4-BDFbAUJw']")
        // this.TestDriveText = this.page.locator("(//div[@class='css-289fc1']//h1)[1]");

    }

    async verifyPolestar3MenuOption() {
        await this.waitAndClick(this.locator.polestar3Menu.xpath);
    }

    async verifyHover() {
        await this.waitAndClick(this.locator.HoveronTestDrive.xpath);
    }

    async VerifyTestDriveText() {
        await expect(this.page.locator(this.locator.TestDriveText.xpath)).toBeVisible()
    }


}

export default checkingmenuPage;