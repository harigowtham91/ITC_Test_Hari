import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    seleniumAddress: "http://localhost:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,
    params: {
        outFile: require('../../testdata/created.json'),
        timeout: 120000,
    },

    capabilities: {
        browserName: "chrome",
        metadata: {
            browser: {
                name: 'chrome',
                version: '75'
            },
            device: 'Virtual Machine',
            platform: {
                name: 'windows',
                version: '10'
            }
        },
   
},
    specs: [
        "../../features/*.feature",
    ],

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },
    getPageTimeout: 100000,
    allScriptsTimeout: 60000,
    useAllAngular2AppRoots: true,

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js", "../../typeScript/pages/*.js"],
        strict: true,
        timeout: 80000,
        tags: '@now'
    },
    onComplete: () => {
        Reporter.createHTMLReport();
    },
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            durationInMS: true,
            saveCollectedJSON: true,
            pageTitle: 'Automation Report',
            reportName: 'Automation Report - Phoenix 2'
        }
    }]
};