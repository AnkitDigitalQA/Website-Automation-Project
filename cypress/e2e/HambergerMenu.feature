Feature: Hamberger Menu

    Background: Hamberger Menu

    Scenario: Verify that All Hamberberger Menu CTA are clickable
        Given User should be on Home Page
        When User Clicks on Hamberberger Menu Icon
        When User Clicks on Who We Are CTA
        When User Clicks on Innovation Hub CTA
        When User Clicks on Partner With Us CTA
        When User Clicks on Matter Streams CTA
        When User Clicks on Matter Community CTA
        When User Clicks on Find a Dealer CTA
        When User Clicks on Support CTA
        Then It is Verified that all the CTA and Hyperlink are clickable on Hamberberger Menu


