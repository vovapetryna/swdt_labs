Feature: when click home breadcrumb redirect to index

  Scenario Outline: home breadcrumb click index redirect
    Given I go to "<page>"
    When I click to home breadcrumb
    Then the page main text should start with "Engineering the Future"

    Examples:
      | page         |
      | services     |
      | how-we-do-it |
      | our-work     |