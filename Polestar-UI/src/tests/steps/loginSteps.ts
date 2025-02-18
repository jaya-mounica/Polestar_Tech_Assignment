import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test";
import { pagefixture } from "./Pagefixture";
//import * as data from "../../../helper/login.json;
import { login, } from "../../../helper/login.enum";
setDefaultTimeout(80 * 1000)



Given('User should access the URL', async function () {
  await pagefixture.verifyLoginPage.navigate("https://www.polestar.com/en-ca/");
});

Given('User should accept cookies', async function () {
  await pagefixture.verifyLoginPage.verifyAndClickCookies();
});


Given('User clicks on the Account Menu', async function () {
  await pagefixture.verifyLoginPage.VerifyProfileMenu();
});

Given('User enters the email as {string}', async function (string) {
  await pagefixture.verifyLoginPage.inputemailid();
});

Given('User enters the password as {string}', async function (string) {
  await pagefixture.verifyLoginPage.inputPassword();
});


When('User clicks on the Login button', async function () {
  await pagefixture.verifyLoginPage.Verifyloginbutton();
});

Then('Login should fail', async function () {
  await pagefixture.page.waitForTimeout(5000)
  await pagefixture.verifyLoginPage.VerifyerrorValidation();
});