const { I, loginPage } = inject()
const allure = codeceptjs.container.plugins('allure')
              
Given('I am on login Page {string}', (url) => {
  I.amOnPage(url)
  I.seeInCurrentUrl(url)
});

When('I enter email on Login Page', async function()
{
    await loginPage.enterEmailOnLoginPage()  
});

When('I enter Password on Login Page', async function()
{
    await loginPage.enterPasswordOnLoginPage()  
});

When('I click on checkbox for accepting terms and conditions', async function()
{
     await signUpPage.clickOnCheckboxForPrivacy() 
});

When('I click on Next Button on Login Page', async function()
{
    await loginPage.clickOnNextButtonOnLoginPage()  
});

Then('I verify that the user land on the OTT homepage  {string}', (url) => {
  I.seeInCurrentUrl(url)
}); 

Then('I verify the user is successfully logged in', async function()
{
    await loginPage.verifyUserIsLoggedIn()  
});