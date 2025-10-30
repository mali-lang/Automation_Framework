const { I, logoutPage } = inject();
const allure = codeceptjs.container.plugins('allure');
const { getWaitTime } = require('../../src/configs/suiteConstants');

When('I click on Profile icon on OTT homepage', async function() {
  await logoutPage.clickOnProfileIcon();
});

When('I click on signout button from the dropdown', async function() {
  await logoutPage.clickOnSignoutButton();
});

Then('I verify that the user land on the OTT homepage {string}', async (url) => {
  // wait for the expected URL to appear (handles redirects/delays)
  I.waitInUrl(url, getWaitTime().longWaitForElement);
  I.seeInCurrentUrl(url);
});

Then('I verify the user is successfully logged out', async function() {
  await logoutPage.verifyUserIsLoggedOut();
});
