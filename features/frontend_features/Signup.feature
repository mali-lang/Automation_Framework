@LL @regression @frontend 
Feature: OTT Signup
  Signup to OTT Platform and verify the signup functionality

  Background:
    Given I am on Signup Page 'https://staging.aryzap.com/'

  @Signup @ARYZAP @EARB-1
   Scenario: Signup - Valid branch, counter, language, and credentials
    When I click on checkbox for Branch code on counter detail page
    And I enter the branch code 'demo2' on counter detail page
    Then I verify branch code
    And counter number textbox got enabled
    When I enter the counter number from the counter number textbox 
    And I select the language on Counter Details page
    And I click on Save button on Counter Detail page