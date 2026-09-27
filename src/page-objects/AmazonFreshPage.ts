import { expect } from "@playwright/test";
import { BasePage } from "./base/BasePage";

export class AmazonFreshPage extends BasePage {
    public readonly url = "https://www.amazon.in/alm/storefront?almBrandId=ctnow";

    public async open(): Promise<void> {
        await this.navigate(this.url);
    }

    public async expectLoaded(): Promise<void> {
        await expect(this.page).toHaveURL(/amazon\.in\/alm\/storefront/);
    }
}
