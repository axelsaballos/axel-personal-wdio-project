Feature: Web Interaction with Key Press

  @demo1
  Scenario Outline: Demo web Interaction With Key Press
    Given A web is opened
    Then The user clicks on text "Frames"
    Then The user clicks on text "iFrame"
    Then the user switches to frame with name "mce_0_ifr"
    Then the user clicks on element with html tag "id" as "tinymce" at index "1"
    Then the user selects and deletes all the text
    Then the user enters text "Introducing text in frame" in element with html tag "id" as "tinymce"

    Examples:
      | TestID    |
      | WEB_TC010 |