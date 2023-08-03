Feature: Web Interaction with Basic Scrolling

  @demo
  Scenario Outline: Demo web Interaction With Basic Scrolling
    Given Amazon page is opened
    Then the user scrolls into text "New international customers purchased"

    Examples:
      | TestID    |
      | WEB_TC011 |