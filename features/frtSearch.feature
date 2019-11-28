Feature: Function 
    @now
    Scenario Outline: Search
        Given search the Prodect <name>
        Examples:
            | name                        |
            | Faded Short Sleeve T-shirts |
    @now
    Scenario: Add to cart
        Given Add to cart
    @now
    Scenario: Check out prodect
        Given Check out
    @now
    Scenario: Place the Order
        Given payment the order