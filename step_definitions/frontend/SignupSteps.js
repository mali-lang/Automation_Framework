const { I, loginPage } = inject()
const allure = codeceptjs.container.plugins('allure')


Given('I am on homepage Page {string}', (url) => {
  I.amOnPage(url)
  I.seeInCurrentUrl(url)
});


When('I click on Signin Button', async function()
{
    await loginPage.clickOnSigninButton()  
});

Then('I verify signin Page{string}', (url) => {
  I.seeInCurrentUrl(url)
});


When('I click on Create an Account Button' , async function()
{
    await loginPage.clickOnCreateAnAccountBtn()  
});

When('I click enter email' , async function()
{
    await loginPage.enterEmailAddress()  
});
 
When('I click on Get Started Button', async function()
{
    await loginPage.clickOnGetStartedBtn()  
});

When('I enter Password on Signup Page', async function()
{
    await loginPage.enterPasswordOnSignupPage()  
});

When('I enter Password again on Signup Page', async function()
{
    await loginPage.enterPasswordAgainOnSignupPage()  
});

When('I click on checkbox for accepting terms and conditions', async function()
{
    await loginPage.clickOnCheckboxForPrivacy()  
});

When('I click on Next button on Signin Page', async function()
{
    await loginPage.clickOnNextButtonOnSignupPage()  
});

When('I select gender option on Signup Page', async function()
{
    await loginPage.selectGenderOptionOnSignupPage()  
});


When(' I select Age group on Signup Page', async function()
{
    await loginPage.selectAgeOnSignupPage()  
});

When('I click on Next button on Signup Page', async function()
{
    await loginPage.clickOnNextButtonOnSignupPage()  
});

When('I pick three genres on Signup Page', async function()
{
    await loginPage.PickThreeGenresOnSignupPage()  
});

When('I click on Next button', async function()
{
    await loginPage.clickOnNextButton()  
});
 
Then('I verify the url "https://staging.aryzap.com/"', async function()
{
    await loginPage.verifyURL()  
});

Then('I verify the user is successfully signed up',async function()
{
    await loginPage.verifyUserIsSuccessfullySignedUp()  
});