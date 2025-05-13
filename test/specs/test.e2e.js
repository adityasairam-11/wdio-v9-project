// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
import { expect, browser, $ } from "@wdio/globals";
import AccessibilityPage from "../pages/AccessibilityPage.js";
// //const chai = import('chai');
// const chai = require('chai');
// const expect = chai.expect;

describe("My Login application", () => {
  it("accessibility page visual test", async () => {
    const activity = await driver.getCurrentActivity();
    await expect(activity).toBe(".ApiDemos");
    await AccessibilityPage.clickAccessibility();
    await AccessibilityPage.clickNodeProvider();
    await AccessibilityPage.clickTalkBack();
    const options = {
      ignoreAntialiasing: true,
      tolerance: 0.1,
      // removeElements: [await $('~Accessibility Node Provider')],
    };
    let results = await browser.checkElement(
      await AccessibilityPage.clickTalkBack(),
      "AccessibilityPage",
      options
    );
    console.log(
      "Visual diff value:",
      results,
      ", tolerance:",
      options.tolerance
    );
    await expect(results).toBeLessThanOrEqual(options.tolerance);
  });
  it("animation page visual test", async () => {
    await driver.back();
    await driver.back();
    await AccessibilityPage.clickAnimation();
    await AccessibilityPage.clickDefaultLayOutAnimation();
    for (let i = 0; i < 5; i++) {
      await AccessibilityPage.clickAddButton();
    }
    const blockRegions = [];
    blockRegions.push(await AccessibilityPage.getAddBtnCoords());
    console.log("blockRegions", blockRegions);
    const options = {
      blockOuts: blockRegions,
    };
    console.log("options.blockOuts", options.blockOuts);
    let results = await browser.checkScreen("AnimationPage", options);
    console.log(
      "Visual diff value:",
      results,
      ", tolerance:",
      options.tolerance
    );
    await expect(results).toBeLessThanOrEqual(options.tolerance);
  });
});
