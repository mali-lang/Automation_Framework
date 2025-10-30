const { I, basePage } = inject()
const { getWaitTime } = require('../../../src/configs/suiteConstants')

module.exports = {
    enterEmailOnLoginPage(email = 'testuser6@gmail.com') {
        const enterEmailAddress = `//*[@id='formEmail']`
        I.waitForElement(enterEmailAddress)
        I.click(enterEmailAddress)
        I.fillField(enterEmailAddress, email)
    },

    enterPasswordOnLoginPage(password = '123456789') {
        const enterPassword = `//*[@placeholder='Enter Password']`
        I.waitForElement(enterPassword)
        I.click(enterPassword)
        I.fillField(enterPassword, password)
    },

    clickOnCheckboxForPrivacy() {
        const checkBoxPrivacy = `//*[@id='termsCheckbox']`
        I.waitForElement(checkBoxPrivacy)
        I.click(checkBoxPrivacy)
    },

    clickOnNextButtonOnLoginPage() {
        const clickOnNextLoginBtn = `//*[text()='Next']`
        I.waitForElement(clickOnNextLoginBtn)
        I.click(clickOnNextLoginBtn)
    },

    async verifyUserIsLoggedIn() {
        I.waitInUrl('https://staging.aryzap.com/', getWaitTime().longWaitForElement)
        I.seeInCurrentUrl('https://staging.aryzap.com/')
        console.log('User successfully redirected to homepage: https://staging.aryzap.com/')
    },

    async checkErrorMessage(message) {
        I.retry({
            retries: 3,
            minTimeout: 1000
        }).see(message);
    },

    async verifyOnLoginPage() {
        I.seeInCurrentUrl('/login');
    }
//commit
}
