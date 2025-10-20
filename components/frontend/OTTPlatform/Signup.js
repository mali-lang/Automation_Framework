const { I, basePage } = inject()
const readCSV = require('../../frontend/readCsv')
const { getWaitTime } = require('../../../src/configs/suiteConstants')

const { assert } = require('chai')


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
        I.fillField(enterEmailAddress, 'testuser'+Date.now()+'@gmail.com')
   },

   clickOnGetStartedBtn()
   {
        const clickOnGetStartedBtn = `//*[text()='Get Started']`
        I.waitForElement(clickOnGetStartedBtn)
        I.click(clickOnGetStartedBtn)
   },

   enterPasswordOnSignupPage()
   {
        const enterPassword = `//*[@id='formEmail']`
        I.waitForElement(enterPassword)
        I.click(enterPassword)
        I.fillField(enterPassword, 'ali123')
   },

    enterPasswordAgainOnSignupPage()
   {
        const enterPassword = `//*[@id='formEmail']`
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

   },

   selectAgeOnSignupPage()
   {
    
   }
}