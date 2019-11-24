import * as reporter from "cucumber-html-reporter";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";
const shell = require('shelljs');
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/cucumber_report.json";

const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
};

export class Reporter {

    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }

    public static createHTMLReport() {
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        } catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    }
    public static copyseleniumfiles() {
        try {
            shell.cp('-R', './support/resource/*', './node_modules/protractor/node_modules/webdriver-manager');
        } catch (err) {
            if (err) {
                throw new Error("copy failed" + err);
            }
        }
    }
    public static NewName() {
        try {
            var today = new Date();
            let Newname = '_' + today.getFullYear().toString()
                + today.getDay().toString()
                + today.getHours().toString()
                + today.getMinutes().toString()
                + today.getMilliseconds().toString()
            return Newname;
        } catch (err) {
            if (err) {
                throw new Error("copy failed" + err);
            }
        }
    }
}
