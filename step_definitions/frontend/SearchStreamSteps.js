const { I, loginPage, logoutPage, searchStreamPage , searchShowPage } = inject();
const allure = codeceptjs.container.plugins('allure');

// Step 1: Login
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

// Step 2: Streams flow
Then('I click on the Streams button on home page', async function () {
  await searchStreamPage.clickOnStreamsTab();
});

When('I play any live stream randomly for {int} seconds and go back', async function (seconds) {
  await searchStreamPage.playRandomStreamAndWatch(seconds);
});

Then('I wait {int} seconds', (seconds) => {
  I.wait(seconds);
});

Then('I click on the back button to go to home page', async function () {
  await searchShowPage.clickOnBackButtonToGoToHomePage();
});

// Step 3: Logout
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
