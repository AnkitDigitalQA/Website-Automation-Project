Feature: Hamberger Menu

    Background: Hamberger Menu

    # Scenario: Verify that All Hamberberger Menu CTA are clickable
    #     Given User should be on Home Page
    #     When User Clicks on Hamberberger Menu Icon
    #     When User Clicks on Who We Are CTA
    #     When User Clicks on Innovation Hub CTA
    #     When User Clicks on Partner With Us CTA
    #     When User Clicks on Matter Streams CTA
    #     When User Clicks on Matter Community CTA
    #     When User Clicks on Find a Dealer CTA
    #     When User Clicks on Support CTA
    #     Then It is Verified that all the CTA and Hyperlink are clickable on Hamberberger Menu

    Scenario: Verify that All the Leagel Pages CTA are clickable
        Given User should be on Home Page
        When User Clicks on Hamberberger Menu Icon
        Then User should see the Hamberberger Menu Opened
        When User cliks on CAUTION NOTICE
        Then user should Navigate to CAUTION NOTICE Page
        When User clicks on PRIVACY POLICY
        Then User should Navigate to PRIVACY POLICY Page
        When User clicks on Join Waitlist T&C
        Then user should Navigate to TERMS AND CONDITIONS OF JOIN THE WAITLIST Page
        When User clicks on T & C of Use
        Then User should Navigate to T & C of Use Page
        When User clicks on Pre-Booking T & C
        Then User should Navigate to Pre-Booking T & C Page
    

