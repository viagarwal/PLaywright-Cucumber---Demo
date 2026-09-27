import { World, setWorldConstructor, IWorldOptions } from "@cucumber/cucumber";
import { PageManager } from "../../page-objects/base/PageManager";
import { BasePage } from "../../page-objects/base/BasePage";
import { AmazonLoginPage } from "../../page-objects/AmazonLoginPage";
import { AmazonFreshPage } from "../../page-objects/AmazonFreshPage";
import { AmazonPrimePage } from "../../page-objects/AmazonPrimePage";
import { AmazonSellPage } from "../../page-objects/AmazonSellPage";
import "../../utils/environment";

export class CucumberWorld extends World {
    public pageManager: PageManager;
    public basePage: BasePage;
    public amazonLoginPage: AmazonLoginPage;
    public amazonFreshPage: AmazonFreshPage;
    public amazonPrimePage: AmazonPrimePage;
    public amazonSellPage: AmazonSellPage;
    
    public get amazonBaseUrl(): string {
        const url = process.env.AMAZON_BASE_URL;
        if (!url) {
            throw new Error("Missing AMAZON_BASE_URL. Add it to the selected env file before running the Amazon login feature.");
        }

        return url;
    }

    //Base URL
    private url?: string;

    //Person
    private firstName?: string;
    private lastName?: string;
    private emailAddress?: string;

    //{ attach, log, link, parameters }: IWorldOptions are required in the constructor of your CucumberWorld class to 
    //inherit functionalities from the base World class and to initialize your PageManager and BasePage.
    constructor({ attach, log, link, parameters }: IWorldOptions) {
        super({ attach, log, link, parameters }); //Pass the options to the world constructor
        this.pageManager = new PageManager(); // Initialize PageManager
        this.basePage = this.pageManager.createBasePage();
        this.amazonLoginPage = this.pageManager.createAmazonLoginPage();
        this.amazonFreshPage = this.pageManager.createAmazonFreshPage();
        this.amazonPrimePage = this.pageManager.createAmazonPrimePage();
        this.amazonSellPage = this.pageManager.createAmazonSellPage();
    }



    //Setter methods for URL, first name etc:
    setUrl(url: string) {
        this.url = url;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    setEmailAddress(emailAddress: string) {
        this.emailAddress = emailAddress;
    }

    //Getter methods for URL, first name etc:
    getURL() {
        return this.url;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getEmailAddress() {
        return this.emailAddress;
    }
}

setWorldConstructor(CucumberWorld);