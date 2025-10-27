const { I, basePage } = inject()
const { getWaitTime } = require('../../../src/configs/suiteConstants')

module.exports = {
    enterEmailOnLoginPage() {
        const enterEmailAddress = `//*[@id='formEmail']`
        I.waitForElement(enterEmailAddress)
        I.click(enterEmailAddress)
        I.fillField(enterEmailAddress, 'testuser6@gmail.com')
    },

    enterPasswordOnLoginPage() {
        const enterPassword = `//*[@placeholder='Enter Password']`
        I.waitForElement(enterPassword)
        I.click(enterPassword)
        I.fillField(enterPassword, '123456789')
    },

    clickOnNextButtonOnLoginPage() {
        const clickOnNextLoginBtn = `//*[text()='Next']`
        I.waitForElement(clickOnNextLoginBtn)
        I.click(clickOnNextLoginBtn)
    },

    async verifyUserIsLoggedIn() {
        I.waitInUrl('https://staging.aryzap.com/', getWaitTime().SignUpLoginTime)
        I.seeInCurrentUrl('https://staging.aryzap.com/')
        console.log('User successfully redirected to homepage: https://staging.aryzap.com/')
    }
}
