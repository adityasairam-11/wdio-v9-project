import { config } from './wdio.shared.conf.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// These lines replicate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config.specs = [
    path.join(process.cwd(), './test/specs/test.e2e.js')
];
config.capabilities = [
    {
        "platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "emulator-5554",
        "appium:platformVersion": "14",
        //"appium:app": "/Users/adityasairam/Documents/myWorkSpace/wdio-v9-project/apps/ApiDemos-debug.apk"
        "appium:app": path.join(process.cwd(), "./apps/ApiDemos-debug.apk"),
        'appium:platformName': 'Android',
        "appium:autoGrantPermissions": true
    }
];

export { config };
