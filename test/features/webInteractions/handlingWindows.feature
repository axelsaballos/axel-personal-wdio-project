Feature: Web Interaction with Dropdown

  @demo
  Scenario Outline: Demo web Interaction With Dropdown
    Given A web is opened
    Then The user clicks on text "Multiple Windows"
    Then The user clicks on text "Elemental Selenium"
    Then The user clicks on text "Click Here"
    Then the user switches to window "Elemental Selenium | Elemental Selenium"


    Examples:
      | TestID    |
      | WEB_TC005 |