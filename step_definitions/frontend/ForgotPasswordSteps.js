const { I, forgotPasswordPage } = inject();
const { getWaitTime } = require('../../src/configs/suiteConstants');

// ---------------- COMMON STEPS ----------------
Given('I am on OTT homepage {string}', async (url) => {
  I.amOnPage(url);
});

When('I click on signin button on OTT homepage', async () => {
  const signInBtn = "//*[text()='Sign in']";
  I.waitForElement(signInBtn, getWaitTime().waitForElement);
  I.click(signInBtn);
});

Then('I should be navigated to reset Password page {string}', async (url) => {
  I.waitInUrl(url, getWaitTime().longWaitForElement);
  I.seeInCurrentUrl(url);
});

// ---------------- FORGOT PASSWORD SPECIFIC STEPS ----------------
When('I click on Forgot Password link on Login Page', async function() {
  await forgotPasswordPage.clickOnForgotPasswordButton();
});

When('I enter registered email {string}', async function(email) {
  await forgotPasswordPage.enterEmailForPasswordReset(email);
});

When('I click on the Send Reset Link button on Reset Password Page', async function() {
  await forgotPasswordPage.clickOnSubmitButtonForPasswordReset();
});

Then('I should see a message {string} for password reset', async function(message) {
  await forgotPasswordPage.checkPasswordResetConfirmationMessage(message);
});
