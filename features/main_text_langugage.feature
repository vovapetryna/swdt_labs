Feature: Language change test

  Scenario Outline: Main info language
    Given I am on the EPAM "en" index page
    When I change language to "<langugage>"
    Then the page main text should start with "<title>"

    Examples:
      | langugage | title                       |
      | ru        | Создаем будущее сегодня     |
      | en        | Engineering the Future      |