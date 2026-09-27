import { Given, Then } from "@cucumber/cucumber";
import { CucumberWorld } from "./World/CucumberWorld";

Given("I navigate to the Amazon Fresh page", async function (this: CucumberWorld) {
    await this.amazonFreshPage.open();
});

Then("the Amazon Fresh page is displayed", async function (this: CucumberWorld) {
    await this.amazonFreshPage.expectLoaded();
});

Given("I navigate to the Amazon Prime page", async function (this: CucumberWorld) {
    await this.amazonPrimePage.open();
});

Then("the Amazon Prime page is displayed", async function (this: CucumberWorld) {
    await this.amazonPrimePage.expectLoaded();
});

Given("I navigate to the Amazon Sell page", async function (this: CucumberWorld) {
    await this.amazonSellPage.open();
});

Then("the Amazon Sell page is displayed", async function (this: CucumberWorld) {
    await this.amazonSellPage.expectLoaded();
});
