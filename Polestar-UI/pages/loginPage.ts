const { test, expect } = require("@playwright/test")
import { Page } from "@playwright/test"
import { pagefixture } from "../src/tests/steps/Pagefixture"
import playwrightWrapper from "../helper/Wrapper/playwrightWrapper";
import { setDefaultTimeout } from "@cucumber/cucumber";
import { login, } from "../helper/login.enum";
//import * as data from "../helper/login.json"
import { locators } from "../Locators/LoginPageElements";
setDefaultTimeout(60 * 1000)


class loginPage extends playwrightWrapper {
  locator: locators;
  acceptCookies: any
  profileMenu: any
  email: any
  password: any
  loginbutton: any
  errorValidation: any

  constructor(page) {
    super(pagefixture.page)
    this.page = page;
    this.locator = new locators();
  }


  async verifyAcceptAllCookies() {
    await expect(await this.acceptCookies)
  }

  async VerifyProfileMenu() {
    await this.waitAndClick(this.locator.profileMenu.xpath)
  }

  async inputemailid() {
    await this.page.locator(this.locator.email.xpath).fill(login.email)
    // this.email.fill(data.email);
  }

  async inputPassword() {
    await this.page.locator(this.locator.password.xpath).fill(login.password)
    //this.password.fill(data.password);
  }

  async Verifyloginbutton() {
    await this.page.locator(this.locator.loginbutton.xpath).click();
  }

  async VerifyerrorValidation() {
    await expect(await this.page.locator(this.locator.errorValidation.xpath)).toBeVisible();
  }

}

export default loginPage;
