Feature: Dealer Locator

    Feature Description: Dealer Locator Is the User Functionality Where User can find the nearest dealer.

    Background: Precondition
        Given User should be on Home Page
        And User should click on Hamberger Menu

    Scenario: Verify the Assersions on Find a Dealer Page
        When User clicks on Find a Dealer Page
        Then User should navigate to Find a Dealer Page
        And User should all the required Information on the page

    Scenario: Verify the WhatsApp Functionality on Find a Dealer Page
        When User clicks on WhatsApp Number
        Then User should see New WhatsApp Tab

    Scenario: Verify that the Get Direction CTA Navigates user to Google Maps
        When User clicks Get Direction CTA
        Then User should Navigate to Google Maps