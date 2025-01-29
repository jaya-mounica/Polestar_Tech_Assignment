Feature: Access to URL

  Background:
    Given User should access the URL
    And User should accept cookies
    And User clicks on the Account Menu

  Scenario: Login should fail with incorrect credentials
    Given User enters the email as "test@test.com"
    And User enters the password as "testss"
    When User clicks on the Login button
    Then Login should fail
    