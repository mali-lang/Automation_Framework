@LL @regression @frontend 
Feature: OTT Signup
  Signup to OTT Platform and verify the signup functionality

  Background:
    Given I am on homepage Page 'https://staging.aryzap.com/'

  @Signup @ARYZAP @ZAP-595
   Scenario: Signup - Happy path
    When I click on Signin Button
    And I click on Create an Account Button
    And I wait 2 seconds
    And I click enter email 
    And I click on Get Started Button
    And I enter Password on Signup Page
    And I enter Password again on Signup Page
    And I click on checkbox for accepting terms and conditions
    And I click on Next button on Signin Page
    And I select gender option on Signup Page
    And I select Age group on Signup Page
    And I click on Next button on Signup Page
    And I pick three genres on Signup Page
    And I click on Next button on Signup Page
    Then I verify that the user land on the OTT homepage 'https://staging.aryzap.com/'
    And I verify the user is successfully signed up








