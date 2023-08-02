Feature: Web Interaction with Alerts/Pop Ups

  @demo
  Scenario Outline: Demo web Interaction With Alerts/Pop Ups
    Given A web is opened
    Then The user clicks on text "JavaScript Alerts"
    # Then The user clicks on text "Click for JS Alert"
    # Then the user validates if alert is opened
    Then The user clicks on text " Click for JS Confirm"
    Then the user validates and "Cancel" the confirmation pop up
    Then The user clicks on text "Click for JS Prompt"
    Then the user gets and send text from alert



    Examples:
      | TestID    |
      | WEB_TC006 |