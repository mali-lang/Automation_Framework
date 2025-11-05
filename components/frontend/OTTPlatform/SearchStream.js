const { I } = inject();
const { container } = require('codeceptjs');
const { getWaitTime } = require('../../../src/configs/suiteConstants');
const { expect } = require('chai');

module.exports = {
  // 🔹 Click on Streams tab
  clickOnStreamsTab() {
    const streamsTab = "//a[@href='/view-all/Category/live%20streaming']";
    I.say("🎬 Clicking on the Streams tab...");
    I.waitForElement(streamsTab, getWaitTime().waitForElement);
    I.click(streamsTab);
  },

  // 🔹 Play a random Stream and verify playback
  async playRandomStreamAndWatch(seconds = 10) {
    I.say("🎥 Starting random Stream selection...");

    // ✅ Access the Playwright page object
    const playwright = container.helpers('Playwright');
    const page = await playwright.page;

    // Alternative, more robust approach: find anchors inside stream cards and dedupe by href
    const anchorXPath = "//div[contains(@class,'mb-2') and contains(@class,'c-padding') and contains(@class,'col')]//a[contains(@href,'/live') or contains(@href,'/watch')]";
    await page.waitForSelector(`xpath=${anchorXPath}`, { timeout: 20000 });
    const anchors = page.locator(`xpath=${anchorXPath}`);
    const hrefs = await anchors.evaluateAll((nodes) => nodes.map(n => n.getAttribute('href')).filter(Boolean));
    // Deduplicate hrefs to count unique streams
    const uniqueHrefs = Array.from(new Set(hrefs));
    I.say(`� Found ${hrefs.length} anchor links, ${uniqueHrefs.length} unique stream links`);

    if (uniqueHrefs.length === 0) {
      throw new Error('❌ No stream anchors found.');
    }

    // Pick a random unique href and click its anchor
    const randomIdx = Math.floor(Math.random() * uniqueHrefs.length);
    const chosenHref = uniqueHrefs[randomIdx];
    I.say(`📺 Clicking stream link: ${chosenHref}`);
    const chosenLocator = page.locator(`xpath=//a[@href='${chosenHref}']`).first();
    await chosenLocator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await chosenLocator.click({ force: true });

    // ✅ Wait for the video URL to load
    const currentUrl = await I.grabCurrentUrl();

    if (!currentUrl.includes("live")) {
  I.say("⚠️ URL does not contain 'watch', retrying click...");
  await streamLocator.click({ force: true });
  await I.wait(3);
    }

    const newUrl = await I.grabCurrentUrl();
    expect(newUrl).to.include("live");
    I.say(`🎬 Stream started playing successfully → ${newUrl}`);

    // ✅ Watch stream for given seconds
    I.say(`⏱ Watching Stream for ${seconds} seconds...`);
    await I.wait(seconds);

    // ✅ Go back to Streams page
    I.say("🔙 Going back to Streams list...");
    await page.goBack();
    await I.wait(3);
  },

};
