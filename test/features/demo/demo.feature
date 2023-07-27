Feature: Demo feature

  @demo
  Scenario Outline: Run first demo feature
    Given Google page is opened
    When Search with "<searchItem>"
    Then Click on the first search result
    Then The URL should match "<expectedURL>"


    Examples:
      | TestID  | searchItem | expectedURL              |
      | Value 1 | WDIO       | https://webdriver.io/es/ | 