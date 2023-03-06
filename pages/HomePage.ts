import { expect, Page, Locator } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly featuresItemsHeadingLocator: Locator;
    readonly loginNavLinkLocator: Locator;

    constructor(page) {
        this.page = page;
        this.featuresItemsHeadingLocator = this.page.locator(
            ".features_items .title"
        );
        this.loginNavLinkLocator = this.page.locator(".nav a[href='/login']");
    }

    async navigate() {
        await this.page.goto("https://automationexercise.com/");
    }

    async assertHomePageToBeVisisble() {
        await expect(this.featuresItemsHeadingLocator).toHaveText(
            "Features Items"
        );
        await expect(this.featuresItemsHeadingLocator).toBeVisible();
    }

    async navigateToLoginPage() {
        await this.loginNavLinkLocator.click();
    }
}
