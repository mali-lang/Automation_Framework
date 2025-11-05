  

const { I } = inject();
const { getWaitTime } = require('../../../src/configs/suiteConstants');

module.exports = {

  
  clickOnProfileIcon() {
    const profileIcon = `//*[@class='user-img']`;
    try {
      I.waitForElement(profileIcon, getWaitTime().longWaitForElement || 10);
      I.click(profileIcon);
    } catch (err) {
      const ts = Date.now();
      I.saveScreenshot(`output/ProfileIcon_not_found_${ts}.png`);
      I.say('Profile icon not found after navigation. Screenshot saved for debugging.');
      throw new Error('Profile icon not found after navigation. See screenshot in output folder.');
    }
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
