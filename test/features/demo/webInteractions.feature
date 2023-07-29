Feature: Web Interactions

  @demo
  Scenario Outline: Demo web Interactions
    Given A web is opened
    Then The user clicks on text "Inputs"
    Then the user enters text "123" in input "number"
    # When Perform web interactions

    Examples:
      | TestID    |
      | WEB_TC002 |