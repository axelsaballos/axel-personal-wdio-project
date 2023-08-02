Feature: Web Interaction with Frames

  @demo
  Scenario Outline: Demo web Interaction With Frames
    Given A web is opened
    Then The user clicks on text "Frames"
    Then The user clicks on text "iFrame"
    Then the user switches to frame with name "mce_0_ifr"
    Then the user enters text "Introducing text in frame" in element with html tag "id" as "tinymce"
    Then the user switches to parent frame
    
    Examples:
      | TestID    |
      | WEB_TC009 |