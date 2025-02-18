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
    // //this.acceptCookies = pagefixture.page.getByRole('button', { name: 'Accept all' })
    // this.profileMenu = this.page.locator("//a[@id='L_aKvtA0TE-V7FLPcm1OLQ']/div/span[@class='css-62qso3']")
    // this.email = this.page.locator("//input[@id='email-username-field']")
    // this.password = this.page.locator("//input[@id='password-field']")
    // this.loginbutton = this.page.locator("//button[@id='login-btn']")
    // this.errorValidation = this.page.locator("//div[@id='errorSection']")
  }


  async verifyAcceptAllCookies() {
    await expect(await this.acceptCookies)
  }

  async VerifyProfileMenu() {
    await this.waitAndClick(this.locator.profileMenu.xpath)
  }

  async inputemailid() {
    console.log(login.email)
    await this.page.locator(this.locator.email.xpath).fill(login.email)
    //await this.fill(this.locator.email.xpath);

    // this.email.fill(data.email);
  }

  async inputPassword() {
    await this.page.locator(this.locator.password.xpath).fill(login.password)

    //this.password.fill(login.password)
    //this.password.fill(data.password);
  }

  async Verifyloginbutton() {
    await this.page.locator(this.locator.loginbutton.xpath).click();
    // await this.page.pause();
  }

  async VerifyerrorValidation() {
    await expect(await this.page.locator(this.locator.errorValidation.xpath)).toBeVisible();
  }

}

export default loginPage;
