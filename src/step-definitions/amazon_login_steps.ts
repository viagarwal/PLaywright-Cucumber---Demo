import { Given, Then, When } from "@cucumber/cucumber";
import { CucumberWorld } from "./World/CucumberWorld";

function requireCredential(name: string, value: string | undefined): string {
    if (!value) {
        throw new Error(`Missing ${name}. Add it to the selected env file before running the Amazon login feature.`);
    }

    return value;
}

Given("I navigate to the Amazon homepage", async function (this: CucumberWorld) {
    await this.basePage.navigate(this.amazonBaseUrl);
});

When("I open the Amazon sign in page", async function (this: CucumberWorld) {
    await this.amazonLoginPage.openSignIn();
});

When("I enter the configured Amazon username", async function (this: CucumberWorld) {
    await this.amazonLoginPage.enterEmail(requireCredential("AMAZON_USERNAME", process.env.AMAZON_USERNAME));
});

When("I continue to the Amazon password page", async function (this: CucumberWorld) {
    await this.amazonLoginPage.continueToPassword();
});

When("I enter the configured Amazon password", async function (this: CucumberWorld) {
    await this.amazonLoginPage.enterPassword(requireCredential("AMAZON_PASSWORD", process.env.AMAZON_PASSWORD));
});

When("I submit the Amazon login form", async function (this: CucumberWorld) {
    await this.amazonLoginPage.submit();
});

Then("Amazon displays the login result", async function (this: CucumberWorld) {
    await this.amazonLoginPage.expectLoginResult();
});
