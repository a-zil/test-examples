import { expect, Page, Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly signUpFormHeading: Locator;
    readonly signUpNameInput: Locator;
    readonly signUpEmailInput: Locator;
    readonly signUpButton: Locator;

    constructor(page) {
        this.page = page;
        this.signUpFormHeading = this.page.locator(".signup-form h2");
        this.signUpNameInput = this.page.locator(".signup-form input[name='name']");
        this.signUpEmailInput = this.page.locator(".signup-form input[name='email']");
        this.signUpButton = this.page.locator(".signup-form button");
    }

    async assertNewUserSignUpToBeVisible() {
        await expect(this.signUpFormHeading).toHaveText("New User Signup!");
        await expect(this.signUpFormHeading).toBeVisible();
    }

    async submitSignUpForm() {
        await this.signUpNameInput.fill("customer15");
        await this.signUpEmailInput.fill("customer15@gmail.com");
        await this.signUpButton.click();
    }
}