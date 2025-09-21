const { setDefaultTimeout, Before, After } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');
const { BASE_URL } = require('../config/constants');

setDefaultTimeout(60 * 1000);

function getBrowserType(name) {
  switch (name) {
    case 'firefox': return firefox;
    case 'safari':
    case 'webkit': return webkit;
    case 'edge': return chromium;
    case 'chrome':
    default: return chromium;
  }
}

Before(async function () {
  const browserName = process.env.BROWSER || 'chrome';     
  const headlessMode = process.env.HEADLESS !== 'false';    
  const browserType = getBrowserType(browserName);

  this.browser = await browserType.launch({
    headless: headlessMode,
    args: ['--disable-web-security']
  });

  this.context = await this.browser.newContext({
    baseURL: BASE_URL,
    viewport: { width: 1366, height: 720 },
    ignoreHTTPSErrors: true,
    colorScheme: 'light'
  });

  this.context.setDefaultTimeout(30000);
  this.page = await this.context.newPage();

});

After(async function () {
  await this.browser.close();
});
