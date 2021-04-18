Feature: filter add test

  Scenario: when add filter should be added and filtered
    Given I go to "insights"
    When I select first filter
    Then I see that filter cart text "Financial Services"
