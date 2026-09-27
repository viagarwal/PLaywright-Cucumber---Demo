import { expect } from "@playwright/test";
import { BasePage } from "./base/BasePage";

export class AmazonSellPage extends BasePage {
    public readonly url = "https://sell.amazon.in/";

    public async open(): Promise<void> {
        await this.navigate(this.url);
    }

    public async expectLoaded(): Promise<void> {
        await expect(this.page).toHaveURL(/sell\.amazon\.in/);
    }
}
