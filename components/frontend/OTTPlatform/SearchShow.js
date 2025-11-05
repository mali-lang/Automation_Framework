const { I } = inject();
const { container } = require('codeceptjs');
const { getWaitTime } = require('../../../src/configs/suiteConstants');
module.exports = {
  clickOnShowsTab() {
    const showsTab = "//*[text()='Shows']";
    I.waitForElement(showsTab, getWaitTime().waitForElement);
    I.click(showsTab);
  },

  async playRandomShowAndWatch() {
    const showCards = "(//div[contains(@class,'mb-2') and contains(@class,'c-padding') and contains(@class,'col')])";
    const playNowButton = "//*[text()='Play Now']"; 
    const videoElement = "//video";

    I.say("🎬 Starting random show selection...");


    await I.waitForElement(showCards, getWaitTime().longWaitForElement);
    const totalCards = await I.grabNumberOfVisibleElements(showCards);

    if (totalCards === 0) {
      throw new Error("❌ No shows found under the Shows tab.");
    }

    I.say(`✅ Total shows found: ${totalCards}`);
    const randomIndex = Math.floor(Math.random() * totalCards) + 1;
    const randomShowXPath = `(${showCards})[${randomIndex}]`;
    const playwright = container.helpers('Playwright');
    const page = await playwright.page;
    const showLocator = page.locator(randomShowXPath);
    await showLocator.scrollIntoViewIfNeeded();
    await I.wait(2);
    I.say(`📺 Clicking random show #${randomIndex}...`);
    await showLocator.click({ force: true });
    I.say("⏳ Waiting for show details page...");
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => { });
    let playNowButtonLocator = page.locator(playNowButton);
    for (let i = 1; i <= 10; i++) {
      if (await playNowButtonLocator.isVisible()) {
        I.say(`🎯 'Play Now' visible on attempt ${i}.`);
        break;
      }
      I.say(`🔁 Attempt ${i}: waiting for 'Play Now' button...`);
      await I.wait(2);
    }

    const isPlayNowVisible = await playNowButtonLocator.isVisible();
    if (!isPlayNowVisible) {
      await I.saveScreenshot("playnow-not-found.png");
      throw new Error("❌ 'Play Now' button not found after retries.");
    }
    I.say("🎬 Clicking the 'Play Now' button...");
    await playNowButtonLocator.scrollIntoViewIfNeeded();
    await playNowButtonLocator.click({ force: true });
    I.say("⏳ Waiting for video element...");
    await I.waitForVisible(videoElement, getWaitTime().longWaitForElement);
     const currentUrl = await page.url();
  I.say(`🌐 Current URL: ${currentUrl}`);

  if (!currentUrl.includes("video")) {
    await I.saveScreenshot("video_url_not_found.png");
    throw new Error(`❌ Expected 'video' in URL, but got: ${currentUrl}`);
  }
  I.say("✅ Verified: Video page opened successfully (URL contains 'video').");

    I.say("🎥 Video element found — playing video...");
    await I.executeScript(() => {
      const video = document.querySelector('video');
      if (video) {
        video.muted = false;
        video.play().catch(e => console.log("⚠️ Video play error:", e));
      }
    });

    I.say("⏳ Watching video for 10 seconds...");
    await I.wait(10);
    I.say("✅ Watched video for 10 seconds successfully!");
  },


  async clickOnBackButtonToGoToHomePage() {
    const playwright = container.helpers('Playwright');
    const page = await playwright.page;
    I.say("🔙 Going back to previous page...");
    await page.goBack();
    I.say("🏠 Waiting for homepage to load...");
  }

};