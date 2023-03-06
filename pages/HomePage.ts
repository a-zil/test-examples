import { expect, Page, Locator } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly featuresItemsHeading: Locator;
    readonly loginNavLink: Locator;

    constructor(page) {
        this.page = page;
        this.featuresItemsHeading = this.page.locator(".features_items .title");
        this.loginNavLink = this.page.locator(".nav a[href='/login']");
    }

    async navigate() {
        await this.page.goto("https://automationexercise.com/");
    }

    async assertHomePageToBeVisisble() {
        await expect(this.featuresItemsHeading).toHaveText("Features Items");
        await expect(this.featuresItemsHeading).toBeVisible();
    }

    async navigateToLoginPage() {
        await this.loginNavLink.click();
    }
}
