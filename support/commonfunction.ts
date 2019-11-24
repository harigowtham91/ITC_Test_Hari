import { browser, protractor } from "protractor";

import * as path from "path";

var fs = require('fs');
const jsonReports = path.join(process.cwd(), "testdata");
const targetJson = jsonReports + "/created.json";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const encrypt = require('encryptjs');
const secretKey = 'FACP';
const writeJsonFile = require('write-json-file');
const loadJsonFile = require('load-json-file');


export let maxTime = browser.params.timeout;

export class commonfunction {



    async checkRecursivelyPresent(obj, expected) {
        await browser.sleep(3000)
        const bool = await obj.isPresent();
        if (bool === expected) {
            // console.log('checkRecursivelyPresent success...');
        } else {
            await this.checkRecursivelyPresent(obj, expected)
        }
    }

    async checkRecursivelyDisplayed(obj, expected) {
        const bool = await obj.isDisplayed();
        if (bool === expected) {
            // console.log('checkRecursivelyDisplayed success...');
        } else {
            await this.checkRecursivelyDisplayed(obj, expected)
        }
    }

    async waitForElement(obj, expected) {
        await this.checkRecursivelyPresent(obj, expected);
        await this.checkRecursivelyDisplayed(obj, expected);
    }

    async clickElement(element) {
        this.scrollToElement(element);
        browser.executeScript("arguments[0].click();", element.getWebElement());
    }

    async scrollToElement(element) {
        await browser.executeScript("arguments[0].scrollIntoView();", element);
    }

    async rightclick(element, expectedElement) {
        let loc = element.getLocation();
        await browser.actions().mouseMove(loc).perform();
        await browser.actions().click(protractor.Button.RIGHT).perform();
        await this.waitForElement(expectedElement, true)
    }

}