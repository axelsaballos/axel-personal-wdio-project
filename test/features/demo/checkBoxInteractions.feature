Feature: Web Interaction with Checkbox

  @demo
  Scenario Outline: Demo web Interaction With CheckBox
    Given A web is opened
    Then The user clicks on text "Checkboxes"
    Then the user click the option "1" in the checkbox with id "checkboxes"
    Then the user verifies if checkbox with html tag "id" as "checkboxes" at position "2" is selected
    Then the user clicks on checkbox with html tag "id" as "checkboxes" in position "1" if it's not selected
    Then the the user click all elements that are not selecte in checkbox with html tag "id" as "checkboxes"
    # When Perform web interactions

    Examples:
      | TestID    |
      | WEB_TC004 |