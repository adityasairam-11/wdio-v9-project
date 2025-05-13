

const SELECTORS = {
  ACCESSIBILITY_BTN: {
    droid: '~Accessibility',
  },
  NODE_PROVIDER_BTN: {
    droid: '~Accessibility Node Provider',
  },
  TALK_BACK_BTN: {
    droid:
      '~Enable TalkBack and Explore-by-touch from accessibility settings. Then touch the colored squares.',
  },
  ANIMATION_BTN: {
    droid: '~Animation',
  },
  LAYOUT_ANIMATION: {
    droid: '~Default Layout Animations',
  },
  ADD_BTN: {
    droid: '~Add Button',
  },
  LAST_BTN: {
  droid: '/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.GridLayout/android.widget.Button[5]',
  }
};
const AccessibilityPage = {
  async clickAccessibility() {
    await (await $(SELECTORS.ACCESSIBILITY_BTN)).waitForDisplayed({ timeout: 5000 });
    await (await $(SELECTORS.ACCESSIBILITY_BTN)).click();
  },
  async clickNodeProvider() {
    await (await $(SELECTORS.NODE_PROVIDER_BTN)).waitForDisplayed({ timeout: 5000 });
    await (await $(SELECTORS.NODE_PROVIDER_BTN)).click();
  },
  async clickTalkBack() {
    await (await $(SELECTORS.TALK_BACK_BTN)).waitForDisplayed({ timeout: 5000 });
    return await $(SELECTORS.TALK_BACK_BTN);
  },
  async clickAnimation() {
    await (await $(SELECTORS.ANIMATION_BTN)).waitForDisplayed({ timeout: 5000 });
    await (await $(SELECTORS.ANIMATION_BTN)).click();
  },
  async clickDefaultLayOutAnimation() {
    await (await $(SELECTORS.LAYOUT_ANIMATION)).waitForDisplayed({ timeout: 5000 });
    await (await $(SELECTORS.LAYOUT_ANIMATION)).click();
  },
  async clickAddButton() {
    await (await $(SELECTORS.ADD_BTN)).waitForDisplayed({ timeout: 5000 });
    await (await $(SELECTORS.ADD_BTN)).click();
  },
  async getAddBtnCoords() {
    // await (await $(SELECTORS.ADD_BTN)).waitForDisplayed({ timeout: 5000 });
    await (await $(SELECTORS.LAST_BTN)).waitForDisplayed({ timeout: 5000 });
    console.log('last btn value::', await (await $(SELECTORS.LAST_BTN)).getText());
    const blockingLocation = await (await $(SELECTORS.LAST_BTN)).getLocation();
    const blockingSize = await (await $(SELECTORS.LAST_BTN)).getSize();
    return {
      x: blockingLocation.x*1,
      y: blockingLocation.y*1,
      width: blockingSize.width*1,
      height: blockingSize.height*1,
    };
  },
};

export default AccessibilityPage;