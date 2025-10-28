@LL @regression @frontend 
Feature: OTT Login
    Login to OTT Platform and verify the login functionality
    
    Background:
        Given I am on login Page 'https://staging.aryzap.com/login'
    
    @Login @ARYZAP @ZAP-596
     Scenario: Login - Happy path
        When I enter email on Login Page
        And I enter Password on Login Page
        And I click on checkbox for accepting terms and conditions
        And I click on Next Button on Login Page
        Then I verify that the user land on the OTT homepage 'https://staging.aryzap.com/'
        And I verify the user is successfully logged in