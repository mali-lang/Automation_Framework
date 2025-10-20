const { I, loginPage } = inject()
const allure = codeceptjs.container.plugins('allure')


Given('I am on Signup Page {string}', (url) => {
  I.amOnPage(url)
  I.seeInCurrentUrl(url)
});
