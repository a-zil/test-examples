import { expect, Page, Locator } from '@playwright/test'

export class AccountCreatedPage {
  readonly page: Page
  readonly accountCreatedHeading: Locator
  readonly continueLink: Locator

  constructor(page) {
    this.page = page
    this.accountCreatedHeading = this.page.locator('h2.title')
    this.continueLink = this.page.locator('a.btn')
  }

  async assertAccountCreatedToBeVisible() {
    await expect(this.accountCreatedHeading).toHaveText('Account Created!')
    await expect(this.accountCreatedHeading).toBeVisible()
  }

  async navigateToHomePage() {
    this.continueLink.click()
  }
}
