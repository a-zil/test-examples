import { expect, Page, Locator } from '@playwright/test'

export class SignUpPage {
  readonly page: Page
  readonly formHeading: Locator
  readonly accountTitleRadioButton: Locator
  readonly nameInput: Locator
  readonly passwordInput: Locator
  readonly daysOfBirthSelect: Locator
  readonly monthsOfBirthSelect: Locator
  readonly yearsOfBirthSelect: Locator
  readonly newsletterCheckbox: Locator
  readonly specialOffersCheckbox: Locator
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly companyInput: Locator
  readonly firstAddressInput: Locator
  readonly secondAddressInput: Locator
  readonly countrySelect: Locator
  readonly stateInput: Locator
  readonly cityInput: Locator
  readonly zipCodeInput: Locator
  readonly mobileNumberInput: Locator
  readonly createAccountButton: Locator

  constructor(page) {
    this.page = page
    this.formHeading = this.page.locator('.login-form .title').first()
    this.accountTitleRadioButton = this.page.locator('#id_gender1')
    this.nameInput = this.page.locator('#name')
    this.passwordInput = this.page.locator('#password')
    this.daysOfBirthSelect = this.page.locator('#days')
    this.monthsOfBirthSelect = this.page.locator('#months')
    this.yearsOfBirthSelect = this.page.locator('#years')
    this.newsletterCheckbox = this.page.locator('#newsletter')
    this.specialOffersCheckbox = this.page.locator('#optin')
    this.firstNameInput = this.page.locator('#first_name')
    this.lastNameInput = this.page.locator('#last_name')
    this.companyInput = this.page.locator('#company')
    this.firstAddressInput = this.page.locator('#address1')
    this.secondAddressInput = this.page.locator('#address2')
    this.countrySelect = this.page.locator('#country')
    this.stateInput = this.page.locator('#state')
    this.cityInput = this.page.locator('#city')
    this.zipCodeInput = this.page.locator('#zipcode')
    this.mobileNumberInput = this.page.locator('#mobile_number')
    this.createAccountButton = this.page.locator('.login-form button')
  }

  async assertAccountCreateFormToBeVisible() {
    await expect(this.formHeading).toHaveText('Enter Account Information')
    await expect(this.formHeading).toBeVisible()
  }

  async submitCreateAccountForm(name: string, password: string) {
    await this.accountTitleRadioButton.click()
    await this.nameInput.clear()
    await this.nameInput.fill(name)
    await this.passwordInput.fill(password)
    await this.daysOfBirthSelect.selectOption('14')
    await this.monthsOfBirthSelect.selectOption('6')
    await this.yearsOfBirthSelect.selectOption('1963')
    await this.newsletterCheckbox.check()
    await this.specialOffersCheckbox.check()
    await this.firstNameInput.fill('John')
    await this.lastNameInput.fill('Doe')
    await this.companyInput.fill('Abibas inc.')
    await this.firstAddressInput.fill('3912 Macleod Trail SE, Calgary')
    await this.secondAddressInput.fill('3912 Macleod Trail SE, Calgary, AB')
    await this.countrySelect.selectOption('Canada')
    await this.stateInput.fill('Alberta')
    await this.cityInput.fill('Calgary')
    await this.zipCodeInput.fill('T2G 2R5')
    await this.mobileNumberInput.fill('+14032437828')
    await this.createAccountButton.click()
  }
}
