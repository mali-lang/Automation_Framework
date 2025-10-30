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

    @Logout @ARYZAP @ZAP-597
     Scenario: Logout - Happy path
        When I enter email on Login Page
        And I enter Password on Login Page
        And I click on checkbox for accepting terms and conditions
        And I click on Next Button on Login Page
        Then I verify that the user land on the OTT homepage 'https://staging.aryzap.com/'
        And I click on Profile icon on OTT homepage
        And I click on signout button from the dropdown
        Then I verify that the user land on the OTT homepage 'https://staging.aryzap.com/'
        And I verify the user is successfully logged out    

        @UnsuccessfulLogin @ARYZAP @ZAP-598
  Scenario: Unsuccessful login with invalid credentials
    When I enter email "invalid@gmail.com"
    And I enter password "wrongpass"
    And I check the Terms and Conditions checkbox
    And I click on the Next button
    Then I should see an error message "No user found with this email."

  Scenario: Login attempt with empty email
    When I enter email ""
    And I enter password "1234567"
    And I check the Terms and Conditions checkbox
    And I click on the Next button
    Then I should see an error message "Email or password is missing."

  Scenario: Login attempt with empty password
    When I enter email "hiraa@gmail.com"
    And I enter password ""
    And I check the Terms and Conditions checkbox
    And I click on the Next button
    Then I should see an error message "Email or password is missing."

  Scenario: Login attempt without accepting Terms and Conditions
    When I enter email "hiraa@gmail.com"
    And I enter password "1234567"
    And I click on the Next button
    Then I should remain on the login page
    And I should see a message "By checking the box you agree to our Terms and Conditions" 

    @ForgotPassword @ARYZAP @ZAP-600
  Scenario: Forgot Password - Happy path
    
    And I click on Forgot Password link on Login Page
    Then I should be navigated to reset Password page 'https://staging.aryzap.com/login'
    When I enter registered email "abdul.haseeb@arytech.com"
    And I click on the Send Reset Link button on Reset Password Page
    Then I should see a message "Please check your inbox for password reset instructions to abdul.haseeb@arytech.com" for password reset
