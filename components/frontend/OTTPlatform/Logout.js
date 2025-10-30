const { I } = inject();
const { getWaitTime } = require('../../../src/configs/suiteConstants');

module.exports = {

  clickOnProfileIcon() {
    const profileIcon = `//*[@class='user-img']`;
    I.waitForElement(profileIcon, getWaitTime().waitForElement);
    I.click(profileIcon);
  },

  clickOnSignoutButton() {
    const signoutBtn = `//*[text()='Sign Out']`;
    I.waitForElement(signoutBtn, getWaitTime().waitForElement);
    I.click(signoutBtn);
  },

  verifyUserIsLoggedOut() {
    const signInBtn = `//*[text()='Sign in']`;
    I.waitForElement(signInBtn, getWaitTime().waitForElement);
    I.seeElement(signInBtn);
  }
};
