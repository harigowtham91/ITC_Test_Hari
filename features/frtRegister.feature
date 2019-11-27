Feature: Register User
    @now
    Scenario Outline: Create a User
        Given Create a new user <name>
        Examples:
            | name                |
            | test015@test008.com |
    @now
    Scenario Outline: Login
        Given Login with creted user <name>
        Examples:
            | name                |
            | test015@test008.com |