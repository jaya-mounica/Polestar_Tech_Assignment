import { expect, Page } from "@playwright/test";

class playwrightWrapper{
    page: any;
    constructor( page: Page) {
        this.page = page;
    }
    async navigate(url: string){
        await this.page.goto(url)
    }

    async waitAndClick(locator: string){
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"   
        });
        await element.click();
    }

    async navigateTo(link: string){
        await Promise.all([
            this.page.waitForNavigation(),
          this.page.click(link)

        ])
    }

    async verifyAndClickCookies(){
        await expect(this.page.getByRole('button', { name: 'Accept all' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Accept all' }).click();

    }
}

export default playwrightWrapper;

