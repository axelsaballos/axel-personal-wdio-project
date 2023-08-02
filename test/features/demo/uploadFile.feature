Feature: Web Interaction with Upload File

  @demo1
  Scenario Outline: Demo web Interaction With Upload File
    Given A web is opened
    Then The user clicks on text "File Upload"
    Then the user upload a file
    Then the user clicks on element with html tag "id" as "file-submit" at index "1"

    Examples:
      | TestID    |
      | WEB_TC008 |




