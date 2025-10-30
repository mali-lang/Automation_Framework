require('dotenv').config({ path: '.env' });
const dependencyInjection = require('./src/configs/dependencyInjection.conf');

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './features/frontend_features/*.feature',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://staging.aryzap.com/',
      show: true,
      headless: false,
      keepBrowserOpen: true,
      waitForTimeout: 60000,
      navigationTimeout: 60000,
      ignoreHTTPSErrors: true,
      keepBrowserState: true,
      keepCookies: true,
      waitForNavigation: 'domcontentloaded',
      chromium: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    },

    REST: {
      endpoint: 'https://staging.aryzap.com/',
      defaultHeaders: {
        'Content-Type': 'application/json'
      }
    },

    ChaiWrapper: {
      require: 'codeceptjs-chai'
    }
  },

  include: {
    ...dependencyInjection,
    I: './steps_file.js',
    loginPage: './components/frontend/OTTPlatform/Login.js',
    logoutPage: './components/frontend/OTTPlatform/Logout.js',
    searchDramaPage: './components/frontend/OTTPlatform/SearchDrama.js',
    signupPage: './components/frontend/OTTPlatform/Signup.js'
  },

  gherkin: {
    features: './features/frontend_features/*.feature',
    steps: [
      './step_definitions/frontend/LoginSteps.js',
      './step_definitions/frontend/LogoutSteps.js',
      './step_definitions/frontend/ForgotPasswordSteps.js',
      './step_definitions/frontend/SignupSteps.js',
      './step_definitions/frontend/InvalidLoginSteps.js',
    ]
  },

  plugins: {
    screenshotOnFail: { enabled: true },
    retryFailedStep: { enabled: true, retries: 1 },
    allure: { enabled: true, require: '@codeceptjs/allure-legacy' }
  },

  multiple: {
    parallel: {
      chunks: 3, // number of parallel processes
      browsers: ['chromium', 'firefox', 'webkit']
    }
  },

  stepTimeout: 60000,
  name: 'Automation_Framework'
};
