const { test, expect } = require("@playwright/test")
import { Page } from "@playwright/test"
import { pagefixture } from "../src/tests/steps/Pagefixture"
import playwrightWrapper from "../helper/Wrapper/playwrightWrapper";
import { setDefaultTimeout } from "@cucumber/cucumber";
import{ login, } from "../helper/login.enum";
//import * as data from "../helper/login.json"


setDefaultTimeout(60*1000)



class loginPage extends playwrightWrapper{
  acceptCookies: any 
  profileMenu: any 
  email: any
  password: any
  loginbutton : any
  errorValidation : any
    
        constructor(page){
          super(pagefixture.page)
          this.page = page;
            //this.acceptCookies = pagefixture.page.getByRole('button', { name: 'Accept all' })
            this.profileMenu = this.page.locator("//a[@id='L_aKvtA0TE-V7FLPcm1OLQ']/div/span[@class='css-62qso3']")
            this.email = this.page.locator("//input[@id='email-username-field']")
            this.password = this.page.locator("//input[@id='password-field']")
            this.loginbutton = this.page.locator("//button[@id='login-btn']")
            this.errorValidation = this.page.locator("//div[@id='errorSection']")
        }
    
    
        async verifyAcceptAllCookies(){
    
    
            await expect(await this.acceptCookies)
        }
        
        async VerifyProfileMenu(){
                await this.profileMenu.click();
        }

        async inputemailid(){
    
    
           //return(this.email)
           this.email.fill(login.email);
           //console.log(data.email);
          // this.email.fill(data.email);
        }

       async inputPassword(){
    
    
      this.password.fill(login.password)
      //this.password.fill(data.password);
       }

      async Verifyloginbutton(){
    
    
        await this.loginbutton.click();
    }

    async VerifyerrorValidation(){
    
          await expect(await this.errorValidation).toBeVisible();
         }
    
        }
         export default loginPage;
