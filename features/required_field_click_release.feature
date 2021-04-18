Feature: required field click and then release

  Scenario: required field click and then release change color
    Given I go to "about/who-we-are/contact"
    When I click and release input
    Then I see red border
