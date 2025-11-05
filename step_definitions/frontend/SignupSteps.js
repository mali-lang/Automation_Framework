const { I, signUpPage } = inject()
const allure = codeceptjs.container.plugins('allure')


Given('I am on homepage Page {string}', (url) => {
  I.amOnPage(url)
  I.seeInCurrentUrl(url)
});

When('I click on Signin Button', async function()
{
    await signUpPage.clickOnSigninButton()  
});

Then('I verify signin Page{string}', (url) => {
  I.seeInCurrentUrl(url)
});


When('I click on Create an Account Button' , async function()
{
    await signUpPage.clickOnCreateAnAccountBtn()  
});

When('I click enter email' , async function()
{
    await signUpPage.enterEmailAddress()  
});
 
When('I click on Get Started Button', async function()
{
    await signUpPage.clickOnGetStartedBtn()  
});

When('I enter Password on Signup Page', async function()
{
    await signUpPage.enterPasswordOnSignupPage()  
});

When('I enter Password again on Signup Page', async function()
{
    await signUpPage.enterPasswordAgainOnSignupPage()  
});

When('I click on checkbox for accepting terms and conditions', async function()
{
    await signUpPage.clickOnCheckboxForPrivacy()  
});

When('I click on Next button on Signin Page', async function()
{
    await signUpPage.clickOnNextButtonOnSignupPage()  
});

When('I select gender option on Signup Page', async function()
{
    await signUpPage.selectGenderOptionOnSignupPage()  
});


When('I select Age group on Signup Page', async function()
{
    await signUpPage.selectAgeOnSignupPage()  
});

When('I click on Next button on Signup Page', async function()
{
    await signUpPage.clickOnNextButtonOnSignupPage()  
});

When('I pick three genres on Signup Page', async function()
{
    await signUpPage.PickThreeGenresOnSignupPage()  
});

When('I click on Next button', async function()
{
    await signUpPage.clickOnNextButton()  
});

Then('I wait {int} seconds', (seconds) => {
  I.wait(seconds)
});
 
Then ('I verify that the user land on the OTT homepage {string}', (url) => {
  I.amOnPage(url)
  I.seeInCurrentUrl(url)
});

Then('I verify the user is successfully signed up', async function(){
    await signUpPage.verifyUserSuccessfullySignedUp()
});


// Hello this is for testing