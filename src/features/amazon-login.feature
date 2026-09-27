@amazon @smoke
Feature: Amazon login

    Scenario: Attempt to sign in to Amazon with configured credentials
        Given I navigate to the Amazon homepage
        When I open the Amazon sign in page
        And I enter the configured Amazon username
        And I continue to the Amazon password page
        And I enter the configured Amazon password
        And I submit the Amazon login form
        Then Amazon displays the login result
