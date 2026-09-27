import { expect } from "@playwright/test";
import { BasePage } from "./base/BasePage";

export class AmazonLoginPage extends BasePage {
    private get signInLink() { return this.page.locator("#nav-link-accountList"); }
    private get emailInput() { return this.page.locator("#ap_email"); }
    private get continueButton() { return this.page.locator("#continue"); }
    private get passwordInput() { return this.page.locator("#ap_password"); }
    private get submitButton() { return this.page.locator("#signInSubmit"); }
    private get authError() { return this.page.locator("#auth-error-message-box"); }

    public async openSignIn(): Promise<void> {
        await this.signInLink.click();
        await expect(this.emailInput).toBeVisible();
    }

    public async enterEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    public async continueToPassword(): Promise<void> {
        await this.continueButton.click();
        await expect(this.passwordInput).toBeVisible();
    }

    public async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    public async submit(): Promise<void> {
        await this.submitButton.click();
    }

    public async expectLoginResult(): Promise<void> {
        await Promise.race([
            this.authError.waitFor({ state: "visible" }),
            this.page.waitForURL((url) => !url.pathname.includes("/ap/signin")),
        ]);
    }
}
