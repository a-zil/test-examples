import { expect, Page, Locator } from '@playwright/test'

export class DeleteAccountPage {
  readonly page: Page
  readonly accountDeletedHeading: Locator
  readonly continueLink: Locator

  constructor(page) {
    this.page = page
    this.accountDeletedHeading = this.page.locator('.title')
    this.continueLink = this.page.locator('a.btn')
  }

  async assertAccountDeletedToBeVisible() {
    await expect(this.accountDeletedHeading).toHaveText('Account Deleted!')
    await expect(this.accountDeletedHeading).toBeVisible()
  }

  async navigateToHomePage() {
    await this.continueLink.click()
  }
}
