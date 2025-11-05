const { I } = inject();
const { container } = require('codeceptjs');
const { getWaitTime } = require('../../../src/configs/suiteConstants');
const { expect } = require('chai');


module.exports = {
  clickOnTelefilmsTab() {
    const telefilmsTab = "//a[@href='/view-all/Category/Telefilms']";
    I.say("🎬 Clicking on the Telefilms tab...");
    I.waitForElement(telefilmsTab, getWaitTime().waitForElement);
    I.click(telefilmsTab);
  },

  
 async playRandomTelefilmAndWatch(seconds = 10) {
    I.say("🎥 Starting random Telefilm selection...");
    const telefilmsLocator = "//div[contains(@class, 'mb-2 c-padding col')]";

    await I.waitForElement(telefilmsLocator, 10);
    const totalTelefilms = await I.grabNumberOfVisibleElements(telefilmsLocator);

    if (totalTelefilms === 0) {
      throw new Error("❌ No Telefilms found on page.");
    }

    I.say(`✅ Total telefilms found: ${totalTelefilms}`);
    const randomIndex = Math.floor(Math.random() * totalTelefilms) + 1;
    const randomTelefilmXPath = `(${telefilmsLocator})[${randomIndex}]`;

    const playwright = container.helpers('Playwright');
    const page = await playwright.page;

    const telefilmLocator = page.locator(randomTelefilmXPath);
    await telefilmLocator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    I.say(`📺 Clicking random Telefilm #${randomIndex}...`);
    await telefilmLocator.click({ force: true });

    const currentUrl = await I.grabCurrentUrl();

    if (!currentUrl.includes("watch")) {
      I.say("⚠️ URL does not contain 'video', retrying click...");
      await telefilmLocator.click({ force: true });
      await I.wait(3);
    }

    const newUrl = await I.grabCurrentUrl();
    expect(newUrl).to.include("watch");
    I.say(`🎬 Telefilm started playing successfully → ${newUrl}`);

    I.say(`⏱ Watching Telefilm for ${seconds} seconds...`);
    await I.wait(seconds);


    I.say("🔙 Going back to Telefilms list...");
    await page.goBack();
    await I.wait(3);
  },
};
