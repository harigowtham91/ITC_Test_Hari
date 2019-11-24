import { ElementFinder, $, browser, element, by, ElementArrayFinder, protractor } from 'protractor';
import { commonfunction } from "../support/commonfunction";
import { parse } from 'url';
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const loadJsonFile = require('load-json-file');



export class Register_pg {

    public sign_in_but: ElementFinder;
    public emailText: ElementFinder;
    public Create_AnAccount: ElementFinder;
    public Gender_Radio: ElementFinder;
    public first_name: ElementFinder;
    public Last_name: ElementFinder;
    public passwd: ElementFinder;
    public date_day: ElementFinder;
    public date_day_val: ElementFinder;
    public date_mon: ElementFinder;
    public date_mon_val: ElementFinder;
    public date_year: ElementFinder;
    public date_year_val: ElementFinder;
    public address1: ElementFinder;
    public city: ElementFinder;
    public state: ElementFinder;
    public State_val: ElementFinder;
    public Post: ElementFinder;
    public phone: ElementFinder;
    public alise: ElementFinder;
    public register_button: ElementFinder;

    constructor() {
        this.sign_in_but = element(by.linkText("Sign in"))
        this.emailText = element(by.id("email_create"))
        this.Create_AnAccount = element(by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Email address'])[1]/following::span[1]"))
        this.Gender_Radio = element(by.xpath('//*[@id="id_gender1"]'))
        this.first_name = element(by.id("customer_firstname"))
        this.Last_name = element(by.id("customer_lastname"))
        this.passwd = element(by.id("passwd"))
        this.date_day = element(by.css('select[name="days"]'))
        this.date_day_val = element(by.id("days")).element(by.cssContainingText('option', 'regexp:25\s+'))
        this.date_mon = element(by.id("months"))
        this.date_mon_val = element(by.id("months")).element(by.cssContainingText('option', 'regexp:March\s'))
        this.date_year = element(by.id("years"))
        this.date_year_val = element(by.id("years")).element(by.cssContainingText('option', 'regexp:1991\s+'))
        this.address1 = element(by.id("address1"))
        this.city = element(by.id("city"))
        this.state = element(by.id("id_state"))
        this.State_val = element(by.id("id_state")).element(by.cssContainingText('option', 'Alabama'))
        this.Post = element(by.id("postcode"))
        this.phone = element(by.id("phone_mobile"))
        this.alise = element(by.id("alias"))
        this.register_button = element(by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='DNI / NIF / NIE'])[1]/following::span[1]"))
    }
}