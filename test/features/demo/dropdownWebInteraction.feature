Feature: Web Interaction with Dropdown

  @demo
  Scenario Outline: Demo web Interaction With Dropdown
    Given A web is opened
    Then The user clicks on text "Dropdown"
    Then the user verifies if dropdown "dropdown" is selected
    Then the user selects "option 1" dropdown option
    Then the user selects "value" atribute with value "1" in dropdown option
    Then the user selects "2" index from dropdown
    # When Perform web interactions

    Examples:
      | TestID    |
      | WEB_TC003 |