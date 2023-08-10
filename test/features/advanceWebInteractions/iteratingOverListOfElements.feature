Feature: Web Interaction iterating over list of elements

  @demo
  Scenario Outline: Demo web iterating over list of elements
    Given Sauce demo page is opened
    Then the user enters text "<userName>" in element with html tag "placeholder" as "Username"
    Then the user enters text "<password>" in element with html tag "placeholder" as "Password"
    Then the user clicks on element with html tag "type" as "submit" at index "1"
    Then the user should list "<numberOfProducts>"
    Then the user validates all products have valid prices

    Examples:
      | TestID    | numberOfProducts | userName      | password     |
      | WEB_TC012 | 6                | standard_user | secret_sauce |