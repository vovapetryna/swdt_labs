Feature: Job search

  Scenario Outline: Search fow job produce relevant output
    Given I am on the EPAM job page
    When I search for some job
    Then Search result heading mast contain positive job number

    Examples:
      | job   |
      | scala |