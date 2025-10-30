const { I, loginPage } = inject();
const allure = codeceptjs.container.plugins('allure');
const { getWaitTime } = require('../../src/configs/suiteConstants');

When('I enter email {string}', async function(email) {
  await loginPage.enterEmailOnLoginPage(email);
});

When('I enter password {string}', async function(password) {
  await loginPage.enterPasswordOnLoginPage(password);
});

When('I check the Terms and Conditions checkbox', async function() {
  await loginPage.clickOnCheckboxForPrivacy();
});

When('I do not check the Terms and Conditions checkbox', async function() {
  
});

When('I click on the Next button', async function() {
  await loginPage.clickOnNextButtonOnLoginPage();
});

Then('I should see an error message {string}', async function(message) {
  await loginPage.checkErrorMessage(message);
});

Then('I should remain on the login page', async function() {
  await loginPage.verifyOnLoginPage();
});

Then('I should see a message {string}', async function(message) {
  await loginPage.checkErrorMessage(message);
});
