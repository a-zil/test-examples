import { expect, Page, Locator } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly featuresItemsHeading: Locator
  readonly loginNavLink: Locator
  readonly loggedInLink: Locator
  readonly deleteAccountLink: Locator

  constructor(page) {
    this.page = page
    this.featuresItemsHeading = this.page.locator('.features_items .title')
    this.loginNavLink = this.page.locator('.nav a[href="/login"]')
    this.loggedInLink = this.page.locator('.navbar-nav > li:nth-child(10)')
    this.deleteAccountLink = this.page.locator('.nav a[href="/delete_account"]')
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/')
  }

  async assertHomePageToBeVisisble() {
    await expect(this.featuresItemsHeading).toHaveText('Features Items')
    await expect(this.featuresItemsHeading).toBeVisible()
  }

  async navigateToLoginPage() {
    await this.loginNavLink.click()
  }

  async assertLoggedInToBeVisible(name: string) {
    await expect(this.loggedInLink).toHaveText(`Logged in as ${name}`)
    await expect(this.loggedInLink).toBeVisible()
  }

  async navigateToDeleteAccountPage() {
    await this.deleteAccountLink.click()
  }
}
