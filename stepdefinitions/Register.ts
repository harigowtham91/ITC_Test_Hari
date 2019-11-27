import { browser, protractor, element, by } from "protractor";
const { Given } = require("cucumber");
import { commonfunction } from "../support/commonfunction";
import { Register_pg } from "../pages/Register_pg";
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

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
  await reg_pg.sigout.click();
  await browser.sleep(3000);
  await reg_pg.sign_in_but.click()
  await supportobj.waitForElement(reg_pg.emailText, true);
  await reg_pg.emailid.sendKeys(email);
  await reg_pg.pass.sendKeys("Password");
  await reg_pg.login.click();
});

Given(/^search the Prodect (.+)$/, { timeout: 250000 }, async (name) => {
  await element(by.id("search_query_top")).click();
  await element(by.id("search_query_top")).sendKeys('Faded Short Sleeve T-shirts');
  await element(by.name("submit_search")).click();
  browser.sleep(3000);
  var text = await element(by.xpath("//div[@id='center_column']/ul/li/div/div[2]/h5/a")).getText()
  expect(text).to.equal(name);
  console.log(text)
});
Given(/^Add to cart$/, { timeout: 250000 }, async () => {
  // await browser.get('http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=Faded+Short+Sleeve+T-shirts&submit_search=');
  // browser.actions().mouseMove(element(by.css("span.price.product-price"))).perform()
  await element(by.xpath("//div[@id='center_column']/ul/li/div/div[2]/h5/a")).click()
  browser.sleep(3000);
  await element(by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='S'])[1]/following::span[1]")).click();
  browser.sleep(3000);
  var ele = element(by.css("a.btn.btn-default.button.button-medium > span"));
  await supportobj.waitForElement(ele, true)
  await ele.click();
});
Given(/^Check out$/, { timeout: 250000 }, async () => {
  // await browser.get('http://automationpractice.com/index.php?controller=order');
  await element(by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='United States'])[2]/following::span[2]")).click();
  browser.sleep(2000)
  await element(by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='If you would like to add a comment about your order, please write it in the field below.'])[1]/following::span[1]")).click();
  browser.sleep(2000)
  await element(by.id("cgv")).click();
  browser.sleep(2000)
  await element(by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='(Read the Terms of Service)'])[1]/following::span[1]")).click();
  
});
