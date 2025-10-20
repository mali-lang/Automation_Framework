require('dotenv').config({ path: '.env' });
const dependencyInjection = require('./src/configs/dependencyInjection.conf');


/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './features/frontend_features/*.feature',
  output: './output',
   helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://staging.aryzap.com/', // base frontend url
      show: true,
      headless: false,
      waitForTimeout: 60000,
      navigationTimeout: 60000,
      ignoreHTTPSErrors: true,
      keepBrowserState: true,
      keepCookies: true,
      keepBrowserOpen: true,
      waitForNavigation: 'domcontentloaded',
      chromium: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    },

    REST: {
      endpoint: 'https://staging.aryzap.com/', // updated API base URL
      defaultHeaders: {
        'Content-Type': 'application/json'
      }
    },

    ChaiWrapper: {
      require: 'codeceptjs-chai'
    }
  },

  include: {
    ...dependencyInjection
  },

  gherkin: {
    features: './features/frontend_features/*.feature',
    steps: [
      './step_definitions/frontend/SignupSteps.js',
    ]
  },

  stepTimeout: 300,
  stepTimeoutOverride: [
    { pattern: 'wait.*', timeout: 0 },
    { pattern: 'amOnPage', timeout: 0 }
  ],

  plugins: {
    screenshotOnFail: { enabled: true },
    retryFailedStep: { enabled: true, retries: 1 },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
    }
  },
  name: 'Automation_Framework'
}