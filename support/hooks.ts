const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import { browser } from "protractor";
import { commonfunction } from "../support/commonfunction";
import { Before } from "cucumber";

BeforeAll({ timeout: 100000 }, async () => {
    await browser.get('http://automationpractice.com/index.php');
});
Before(async function () {

})

After({ timeout: 10000 }, async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        console.log('\n************************************************************');
        console.log(scenario.pickle.name + '-' + scenario.result.status);
        console.log('************************************************************');
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    } else {
        console.log('\n************************************************************');
        console.log(scenario.pickle.name + '-' + scenario.result.status);
        console.log('************************************************************');
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

AfterAll({ timeout: 100000 }, async () => {
    await browser.quit();
});
