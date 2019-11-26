import { browser, protractor } from "protractor";
const { Given } = require("cucumber");
import { commonfunction } from "../support/commonfunction";
import { Register_pg } from "../pages/Register_pg";
const chai = require("chai").use(require("chai-as-promised"));
// Actions actions = new Actions(driver);

const reg_pg: Register_pg = new Register_pg();
const supportobj: commonfunction = new commonfunction();

Given(/^Create a new user (.+)$/, { timeout: 250000 }, async (email) => {
  await reg_pg.sign_in_but.click()
  await supportobj.waitForElement(reg_pg.emailText, true);
  await reg_pg.emailText.sendKeys(email)
  await reg_pg.Create_AnAccount.click();
  await browser.sleep(3000)
  await reg_pg.Gender_Radio.click()
  await reg_pg.first_name.sendKeys("Hari");
  await reg_pg.Last_name.sendKeys("Last")
  await reg_pg.passwd.sendKeys("Password")
  await reg_pg.date_day.click();
  await browser.sleep(2000);
  await reg_pg.date_day_val.click();
  await reg_pg.date_mon.click()
  await browser.sleep(2000);
  await reg_pg.date_mon_val.click();
  await reg_pg.date_year.click()
  await browser.sleep(2000);
  await reg_pg.date_year_val.click();
  await reg_pg.address1.sendKeys("Address")
  await reg_pg.city.sendKeys("bang")
  await reg_pg.state.click()
  await reg_pg.State_val.click();
  await reg_pg.Post.sendKeys("00000")
  await reg_pg.phone.sendKeys("9876543210")
  await reg_pg.register_button.click();
});

Given(/^Login with creted user (.+)$/, { timeout: 250000 }, async (email) => {
  await reg_pg.sign_in_but.click()
  await supportobj.waitForElement(reg_pg.emailText, true);
  await reg_pg.emailid.sendKeys(email);
  await reg_pg.pass.sendKeys(email);
  await reg_pg.login.click();

});
