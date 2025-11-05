const { I, loginPage, logoutPage, searchTelefilmPage , searchShowPage} = inject();
const allure = codeceptjs.container.plugins('allure');


Given('I am on login Page {string}', (url) => {
  I.amOnPage(url);
  I.seeInCurrentUrl(url);
});

When('I enter email on Login Page', async function () {
  await loginPage.enterEmailOnLoginPage();
});

When('I enter Password on Login Page', async function () {
  await loginPage.enterPasswordOnLoginPage();
});

When('I click on checkbox for accepting terms and conditions', async function () {
  await loginPage.clickOnCheckboxForPrivacy();
});

When('I click on Next Button on Login Page', async function () {
  await loginPage.clickOnNextButtonOnLoginPage();
});

Then('I click on the Telefilms button on home page', async function () {
  await searchTelefilmPage.clickOnTelefilmsTab();
});

When('I play any telefilm randomly for {int} seconds and go back', async function (seconds) {
  await searchTelefilmPage.playRandomTelefilmAndWatch(seconds);
});

Then('I wait {int} seconds', (seconds) => {
  I.wait(seconds);
});

Then('I click on the back button to go to home page', async function () {
  await searchShowPage.clickOnBackButtonToGoToHomePage();
});


Then('I click on the profile icon on home page', async function () {
  await logoutPage.clickOnProfileIcon();
});

Then('I click on signout button from the dropdown', async function () {
  await logoutPage.clickOnSignoutButton();
});

Then('I verify that the user land on the OTT homepage {string}', (url) => {
  I.amOnPage(url);
  I.seeInCurrentUrl(url);
});
