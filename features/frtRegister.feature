Feature: Register User
    @now
    Scenario Outline: Create a User
        Given Create a new user <name>
        Examples:
            | name                |
            | test007@test007.com |
    @now
    Scenario Outline: Login
        Given Login with creted user <name>
        Examples:
            | name                |
            | test007@test007.com |