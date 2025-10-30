const { I, basePage } = inject()
const readCSV = require('../../frontend/readCsv')
const { getWaitTime } = require('../../../src/configs/suiteConstants')

const { assert } = require('chai')
module.exports = {
    clickOnForgotPasswordButton()
    {
        const path = `//*[text()='Forgot Password?']`
        I.waitForElement(path)
        I.click(path)
    },

    enterEmailForPasswordReset(email)
    {
        const enterEmailAddress = `//*[@id='formEmail']`
        I.waitForElement(enterEmailAddress)
        I.click(enterEmailAddress)
        I.fillField(enterEmailAddress, email);
    },

    clickOnSubmitButtonForPasswordReset()
    {
        const clickOnSubmitBtn = `//*[text()='Send Reset Link']`
        I.waitForElement(clickOnSubmitBtn)
        I.click(clickOnSubmitBtn)
    },

    checkPasswordResetConfirmationMessage(message) 
    {
        const confirmationMessage = "//*[contains(@class, 'text-center') and contains(text(), 'Please check your inbox for password reset instructions')]";
        I.waitForElement(confirmationMessage, 20);
        I.seeElement(confirmationMessage);
        I.see(message);
    }

};