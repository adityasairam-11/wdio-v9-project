import { config as androidconfig } from './wdio.android.conf.js';
import { baselinePath, screenshotPath} from './wdio.shared.conf.js';

androidconfig.logLevel='debug';
androidconfig.services.push(['visual',
    {
        baselineFolder: baselinePath,
        screenshotPath: screenshotPath,
        autoSaveBaseline: true,
        autoAcceptAlerts: true,
        savePerDevice: true,
        screenCompareMethod: 'pixelmatch',
        screenCompareThreshold: 0.1,
        blockOutStatusBar: true,
        blockOutNavigationBar: true,
        blockOutIphoneXBottomBar: true
    }
]);

export { androidconfig as config };
