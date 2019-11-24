Feature: Register User
    @now
    Scenario Outline: Create a User
        Given Create a new user <name>
        Examples:
            | name                |
            | test001@test001.com |
