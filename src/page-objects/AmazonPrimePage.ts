import { expect } from "@playwright/test";
import { BasePage } from "./base/BasePage";

export class AmazonPrimePage extends BasePage {
    public readonly url = "https://www.amazon.in/prime";

    public async open(): Promise<void> {
        await this.navigate(this.url);
    }

    public async expectLoaded(): Promise<void> {
        await expect(this.page).toHaveURL(/amazon\.in\/prime/);
    }
}
