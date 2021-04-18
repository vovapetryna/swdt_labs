Feature: when click logo redirect to index

  Scenario Outline: logo click index redirect
    Given I go to "<page>"
    When I click to epam logo
    Then the page main text should start with "Engineering the Future"

    Examples:
      | page         |
      | services     |
      | how-we-do-it |
      | our-work     |
