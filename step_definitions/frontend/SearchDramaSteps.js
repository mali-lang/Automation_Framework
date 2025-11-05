const { I , searchPage , loginPage} = inject();
const allure = codeceptjs.container.plugins('allure');

Given('I am on login Page {string}', (url) => {
  I.amOnPage(url);
  I.seeInCurrentUrl(url);
});

When('I enter email on Login Page', async function() {
  await loginPage.enterEmailOnLoginPage();
});

When('I enter Password on Login Page', async function() {
  await loginPage.enterPasswordOnLoginPage();
});

When('I click on checkbox for accepting terms and conditions', async function() {
  await loginPage.clickOnCheckboxForPrivacy();
});

When('I click on Next Button on Login Page', async function() {
  await loginPage.clickOnNextButtonOnLoginPage();
});

Then('I verify that the user land on the OTT homepage {string}', (url) => {
  I.amOnPage(url);
  I.seeInCurrentUrl(url);
});

When('I click on the search icon on home page', async function() {
  await searchPage.clickOnSearchIconOnHomepage();
});

When('I enter the text {string} on home page', async function(dramaName) {
  await searchPage.enterTextInSearchBox(dramaName);
});

When('I click on the search icon', async function() {
  await searchPage.clickOnSearchButton();
});

Then('I verify that the user land on the OTT homepage {string}', (url) => {
  I.amOnPage(url);
  I.seeInCurrentUrl(url);
});
