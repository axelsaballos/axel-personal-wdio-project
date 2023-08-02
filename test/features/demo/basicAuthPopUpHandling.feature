Feature: Web Interaction With Basic Auth with Alerts/Pop Ups

  @demo
  Scenario Outline: Demo web Interaction With Basic Auth with Alerts/Pop Ups
    Given An auth web is opened
    Then The user clicks on text "Basic Auth"
    
    # In order to do this we have to modified the baseURL and add admin(username):admin(password)@
    # example: https://admin:admin@the-internet.herokuapp.com/basic_auth

    Examples:
      | TestID    |
      | WEB_TC007 |