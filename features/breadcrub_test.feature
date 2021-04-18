Feature: breadcrumb correct pass test

  Scenario Outline: breadcrumb should contain part title
    Given I am on the EPAM "en" index page
    When I go to "<page>"
    Then I see main - "<text>" breadcrumb

    Examples:
      | page         | text         |
      | services     | Services     |
      | how-we-do-it | How We Do It |
      | our-work     | Our Work     |
