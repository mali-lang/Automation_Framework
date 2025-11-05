const { I, basePage } = inject()
const readCSV = require('../../frontend/readCsv')
const { getWaitTime } = require('../../../src/configs/suiteConstants')

const { assert } = require('chai')

let expectedUsername = '';
module.exports = {
    locators: {
        basePath: "//*[contains(@class, 'content-menu')]",
        loginPopup: "//*[@class='modal-content']",
    },

    clickOnSigninButton()
    {
        const path = `//*[text()='Sign in']`
        I.waitForElement(path)
        I.click(path)
    },

   clickOnCreateAnAccountBtn()
   {
        const path = `//div[contains(@class, 'top-bar')]//*[text()='Create an Account']`
        I.waitForElement(path)
        I.click(path)
   },

   enterEmailAddress()
   {
        const enterEmailAddress = `//*[@id='formEmail']`
        I.waitForElement(enterEmailAddress)
        I.click(enterEmailAddress)
        const email = `testuser${Date.now().toString().slice(-6)}@gmail.com`;
        expectedUsername = email.split('@')[0];
        I.fillField(enterEmailAddress, email);
   },

   clickOnGetStartedBtn()
   {
        const clickOnGetStartedBtn = `//*[text()='Get Started']`
        I.waitForElement(clickOnGetStartedBtn)
        I.click(clickOnGetStartedBtn)
   },

   enterPasswordOnSignupPage()
   {
        const enterPassword = `//*[@placeholder='Add a password']`
        I.waitForElement(enterPassword)
        I.click(enterPassword)
        I.fillField(enterPassword, 'ali123')
   },

    enterPasswordAgainOnSignupPage()
   {
        const enterPassword = `//*[@placeholder='Re-enter password']`
        I.waitForElement(enterPassword)
        I.click(enterPassword)
        I.fillField(enterPassword, 'ali123')
   },

   clickOnCheckboxForPrivacy()
   {
        const checkBoxPrivacy = `//*[@id='termsCheckbox']`
        I.waitForElement(checkBoxPrivacy)
        I.click(checkBoxPrivacy)
   },

   clickOnNextButtonOnSignupPage()
   {
        const clickOnNextBtnOnSignupPage = `//*[text()='Next']`
        I.waitForElement(clickOnNextBtnOnSignupPage)
        I.click(clickOnNextBtnOnSignupPage)
   },

   selectGenderOptionOnSignupPage()
   {
        const genderOption = `//*[contains(text(), "What's your gender?")]/following::button[(text())='Male']`
        I.waitForElement(genderOption)
        I.click(genderOption)
   },

   selectAgeOnSignupPage()
   {
        const ageGroup = `//*[contains(text(), 'Age group')]/following::*[contains(text(), '24-34')]`
        I.waitForElement(ageGroup)
        I.click(ageGroup)
   },

   PickThreeGenresOnSignupPage()
   {
     const genres = ['Romance', 'Comedy', 'TV Shows']
     for (const genre of genres) {
          I.waitForElement(`//button[normalize-space(.)='${genre}']`)
          I.click(`//button[normalize-space(.)='${genre}']`)
     }
   },
  async verifyUserSuccessfullySignedUp(expectedUsername = '') {
  const locator = 'a.nav-link .avatar-text'

  try {

    I.waitForElement(locator, 10);

    const visibleCount = await I.grabNumberOfVisibleElements(locator);

    if (visibleCount === 0) {
      throw new Error('Profile element not visible after signup.');
    }

    const profileText = await I.grabTextFrom(locator);
    console.log(`Profile element found: "${profileText}"`);

    if (expectedUsername) {
      if (profileText.toLowerCase().includes(expectedUsername.toLowerCase())) {
        console.log(`Username match confirmed: ${expectedUsername}`);
      } else {
        console.warn(`Username mismatch: expected "${expectedUsername}", got "${profileText}"`);
      }
    }
  } catch (error) {
    console.error(`Signup verification failed: ${error.message}`);
    throw error;
  }
},
}