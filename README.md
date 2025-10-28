# Automation_Framework

This is a Playwright-based automation framework for testing web application of lobby leader

## Tech Stack
- Playwright with CodeceptJS
- JavaScript/Node.js
- Gherkin BDD with `.feature` files
- Allure report 
- GitLab CI/CD integration

1. Clone the repo:
git clone https://github.com/mali-lang/Automation_Framework.git 
cd automation-testing

2. Install dependencies
https://codecept.io/  for framework guidance
npx create-codeceptjs .
npx codeceptjs init
npx codeceptjs run
npx playwright install - To install the browser Chromium, Firefox and WebKit


## Test Tags
Use tags like `@regression`, `@Login`, etc., to filter tests.


## Project Structure
```
automation-testing/
├── features/                 # Gherkin feature files
│   └── frontend_features/
├── step_definitions/        # Step definitions for BDD steps
├── output/                  # Allure results and screenshots
├── codecept.conf.js         # Test configuration
└── ...
```



## Execution of the code
Run a specific test case : npx codeceptjs run --grep '@Login' --steps --verbose   // using tags 
Run a complete project : npx codeceptjs run --features features/frontend_features/LoginPage.feature --steps --verbose   // For all features files

Run a feature with specific tag: npx codeceptjs run --features --grep "Serve"


## Report
For all test cases: npx codeceptjs run --plugins allure
allure generate output --clean; allure open

For individual test cases by using tags npx codeceptjs run --grep '@ZAP-10' --plugins allure


## Contribution Guidelines
1. Create a new branch with the JIRA ticket.
2. git checkout -b your-branch-name
3. git add features/frontend_features/your-feature-file
4. git commit -m "ticket-number: created /updated on x feature"
5. git push origin your-branch-name
6. Create a Merge request on Git
7. Add reviewers, link the Jira tickets and submit a merge request for review

## For code coverage
npx nyc npx codeceptjs run --features features/frontend_features/Signup.feature --steps --verbose
For parallel execution: .\run-delayed-parallel.ps1 

For parallel execution in multiple browsers:  npx codeceptjs run-multiple parallel --steps