const SCREENSHOT_PATH = 'test/e2e/screenshots';
const BINPATH = 'test/e2e/libs';
const CHROMEDRIVER = './bin/chromedriver' || `${BINPATH}/chromedriver/chromedriver`;
const CHROME = process.env.SESSION !== 'ubuntu' ? '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary' : '/usr/bin/google-chrome';

module.exports = {
    src_folders: ['test/e2e/specs'],
    output_folder: 'test/e2e/reports',
    selenium: {
        start_process: false,
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': CHROMEDRIVER,
        },
    },
    test_settings: {
        default: {
            launch_url: 'localhost:3000',
            selenium_port: '9515',
            selenium_host: 'localhost',
            silent: true,
            screenshots: {
                enabled: true,
                path: SCREENSHOT_PATH,
            },
            globals: {
                timeOut: 2000,
                asyncTimeOut: 5000,
                devServerURL: 'http://localhost:3000',
            },
            desiredCapabilities: {
                browserName: 'chrome',
                acceptSslCerts: true,
                chromeOptions: {
                    args: [
                        '--headless',
                        '--no-sandbox',
                        '--window-size=360, 640',
                    ],
                    binary: CHROME,
                },
            },
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
            },
        },
    },
};
