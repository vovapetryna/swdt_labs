Feature: contact us link redirect to contact page

  Scenario Outline: after click on mail button user see contact page
    Given I go to "<page>"
    When I click to email button
    Then I see contact us page

    Examples:
      | page         |
      | services     |
      | how-we-do-it |
      | our-work     |
