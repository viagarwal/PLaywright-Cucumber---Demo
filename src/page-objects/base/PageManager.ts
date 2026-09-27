import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { pageFixture } from "../../step-definitions/hooks/browserContextFixture";
import { AmazonLoginPage } from "../AmazonLoginPage";
import { AmazonFreshPage } from "../AmazonFreshPage";
import { AmazonPrimePage } from "../AmazonPrimePage";
import { AmazonSellPage } from "../AmazonSellPage";

export class PageManager {
    get page(): Page {
        return pageFixture.page;
    }

    createBasePage(): BasePage {
        return new BasePage();
    }

    createAmazonLoginPage() {
        return new AmazonLoginPage();
    }

    createAmazonFreshPage() {
        return new AmazonFreshPage();
    }

    createAmazonPrimePage() {
        return new AmazonPrimePage();
    }

    createAmazonSellPage() {
        return new AmazonSellPage();
    }

}