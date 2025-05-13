const platformSelectorKeyMap = {
  web: 'web',
  mwebios: 'web',
  mwebdroid: 'web',
  ios: 'ios',
  android: 'droid',
};

driver.overwriteCommand(
  '$',
  async function ($, selectorMap) {
    //for implicit wait this method will be called multiple time: hence need to check for string
    if (typeof selectorMap == 'string') {
      return $(selectorMap);
    } else {
      let platformName = await _getPlatformName();
      await _validateSelector(platformName, selectorMap);
      return $(selectorMap[platformSelectorKeyMap[platformName]]);
    }
  },
  false
);

driver.overwriteCommand(
  '$$',
  async function ($, selectorMap) {
    //for implicit wait this method will be called multiple time: hence need to check for string
    if (typeof selectorMap == 'string') {
      return $(selectorMap);
    } else {
      let platformName = await _getPlatformName();
      await _validateSelector(platformName, selectorMap);
      return $$(selectorMap[platformSelectorKeyMap[platformName]]);
    }
  },
  false
);

async function _validateSelector(platformName, selectorMap) {
  let platformSelector = platformSelectorKeyMap[platformName];
  if (selectorMap[platformSelector] === undefined) {
    throw await _getSelectorErrorMessage(platformName, selectorMap);
  }
}

async function _getPlatformName() {
  let platformName;
  if (!driver.isMobile) {
    platformName = 'web';
  } else if (driver.isIOS && driver.capabilities.browserName === 'safari') {
    platformName = 'mwebios';
  } else if (driver.isAndroid && driver.capabilities.browserName === 'chrome') {
    platformName = 'mwebdroid';
  } else if (driver.isIOS && driver.capabilities.browserName !== 'safari') {
    platformName = 'ios';
  } else if (driver.isAndroid && driver.capabilities.browserName !== 'chrome') {
    platformName = 'android';
  } else {
    throw 'Platform unknown!!';
  }
  return platformName;
}

async function _getSelectorErrorMessage(platformName, selector) {
  return `selector: ${JSON.stringify(selector)} is not defined for platform ${platformName}, \
    \nDefine platform specific selector as: \
    \n { \
    \n    ${platformSelectorKeyMap[platformName]}:'somelocator', \
    \n }`;
}

async function _getParentElement(elem, level) {
  while (level > 0) {
    elem = await elem.$('..');
    level--;
    await _getParentElement(elem, level);
  }
  return elem;
}
