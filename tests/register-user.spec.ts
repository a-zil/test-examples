import { test } from '@playwright/test'
import { AccountCreatedPage } from '../pages/AccountCreatedPage'
import { DeleteAccountPage } from '../pages/DeleteAccountPage'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { SignUpPage } from '../pages/SignUpPage'

test.describe('Test case 01', () => {
  let homePage: HomePage
  let loginPage: LoginPage
  let signUpPage: SignUpPage
  let accountCreatedPage: AccountCreatedPage
  let deleteAccountPage: DeleteAccountPage
  const name = 'customer15'
  const email = 'customer15@gmail.com'
  const password = 'qweRty123@?/'

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    signUpPage = new SignUpPage(page)
    accountCreatedPage = new AccountCreatedPage(page)
    deleteAccountPage = new DeleteAccountPage(page)
    await homePage.navigate()
  })

  test('Register user', async () => {
    await homePage.assertHomePageToBeVisisble()
    await homePage.navigateToLoginPage()

    await loginPage.assertNewUserSignUpToBeVisible()
    await loginPage.submitSignUpForm(name, email)

    await signUpPage.assertAccountCreateFormToBeVisible()
    await signUpPage.submitCreateAccountForm(name, password)

    await accountCreatedPage.assertAccountCreatedToBeVisible()
    await accountCreatedPage.navigateToHomePage()

    await homePage.assertLoggedInToBeVisible(name)
    await homePage.navigateToDeleteAccountPage()

    await deleteAccountPage.assertAccountDeletedToBeVisible()
    await deleteAccountPage.navigateToHomePage()

    await homePage.assertHomePageToBeVisisble()
  })
})
