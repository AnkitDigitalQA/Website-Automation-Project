Feature: Support

    Feature Description: Support is the Module with All the Trending FAQ'S and Contact Us Feature


    Background: Precondition
        Given User should be on Home Page
        When User should click on Hamberger Menu
        Then User clicks on Support Button
        And navigate's to Support Page

    Scenario: Verify the Assersion on the Support Page
        When User navigate to Supports page
        Then User should see the all required information on the page

    Scenario: Verify That User should see the required Imformation in Every FAQ Panel
        When User clicks on What features does the homescreen of the VIC have?
        Then User should see the required points in the first tab
        When User clicks on How do I cancel my booking?
        Then User should see the required points in the second tab
        When User clicks on How do I create an account?
        Then User should see the required points in the third tab
        When User clicks on What are the primary specifications of this bike?
        Then User should see the required points in the fourth tab
        When User clicks on What are the smart features of the bike?
        Then User should see the required points in the fifth tab

    Scenario: Verify the View all FAQ's Page
        When User clicks on View All FAQ's Contact
        Then User should navigate to FAQ Page
        And User should see all the information on the FAQ page

    Scenario: Verify The Product Tab on FAQ Page
        When User clicks on View All FAQ's Contact
        Then User should navigate to FAQ Page
        When User clicks on Variants
        Then User should see the required information in Variants tab
        When User clicks on Vehicle Specifications
        Then User should see the required information in Vehicle Specifications tab
        When User clicks on Battery & Range
        Then User should see the required information in Battery & Range tab
        When User clicks on Safety
        Then User should see the required information in Safety tab

    Scenario: Verify the Finance Tab on FAQ Page
        When User clicks on View All FAQ's Contact
        Then User should navigate to FAQ Page
        When User clicks on Finance
        Then User should see the Finance Partners tab
        When User clicks What are the available financing options?
        Then User should see the required information in the tab

    Scenario: Verify the About Matter Tab
        When User clicks on View All FAQ's Contact
        Then User should navigate to FAQ Page
        When User clicks on About Matter
        Then User should see the All About Matter option
        When User clicks on When was Matter born?
        Then User should see the required information on When was Matter born? tab
        When User Clicks on What does Matter do?
        Then User should see the required information on the What does Matter do? tab

    Scenario: Verify the Signup and Login Tab
        When User clicks on View All FAQ's Contact
        Then User should navigate to FAQ Page
        When User clicks on Signup and Login
        Then User should see the Creating an Account tab
        When User clicks on How do I create an account?
        Then User should see the requires information on the How do I create an account tab
        When User clicks on What is my username?
        Then User should the required information on What is my username? tab
        When User clicks on How do I create my username?
        Then User should see the required information on the How do I create my username? tab
        When User clicks on Can I make an account with a phone number outside of India?
        Then User should see the required information on Can I make an account with a phone number outside of India? tab
        When User clicks on Editing your profile
        Then User should see the Editing your profile tab opened
        When User clicks on How do I edit my profile?
        Then User should see the required information on How do I edit my profile? tab
        When User clicks on Can I change my username?
        Then User should see the required information on Can I change my username? tab
        When User clicks on How do I change my username?
        Then User should see the required information on How do I change my username? tab
        When User clicks on Login & Sign up issues
        Then User should see the Login & Sign up issues tab open
        When User clicks on Why am I facing trouble receiving OTP on my phone?
        Then User should see the required information on Why am I facing trouble receiving OTP on my phone? tab
        When User clicks on I have changed my mobile number, can I still login using my old number?
        Then User should see the required information on I have changed my mobile number, can I still login using my old number? tab

    Scenario: Verify the Registration Tab
        When User clicks on View All FAQ's Contact
        Then User should navigate to FAQ Page
        When User clicks on Registration CTA
        Then User should see the Register Your Interest open
        When User clciks on What happens when I register my interest?
        Then User should see the required information on What happens when I register my interest? tab
        When User clicks on Why is it mandatory to provide my mobile number and email id for registering my interest?
        Then User should see the required information on Why is it mandatory to provide my mobile number and email id for registering my interest? tab
        When User clicks on I'm a channel partner. Can I still register my interest?
        Then User should see the required information on I'm a channel partner. Can I still register my interest?

    Scenario: Verify the Ownership Tab
        When User clicks on View All FAQ's Contact
        Then User should navigate to FAQ Page
        When User clicks on Ownership Tab
        Then User should see the Charging Tab open
        When User clicks on How do I charge my bike?
        Then User should see the required information on How do I charge my bike? tab
        When User clicks on How much time does it take to charge the bike?
        Then User should see the required information on How much time does it take to charge the bike? tab
        When User clicks on Does the vehicle have fast charging?
        Then User should see the required information on Does the vehicle have fast charging? tab
        When User clicks on What type of electric socket is compatible to the charging point?
        Then User should see the required information on What type of electric socket is compatible to the charging point? tab
        When User clicks on How much electricity will I consume in charging the bike?
        Then User should see the required information on How much electricity will I consume in charging the bike? tab
        When User clicks on Can I keep it charging overnight?
        Then User should see the required information on Can I keep it charging overnight? tab
        When User clicks on Do I need to make any extra arrangements for charging my bike?
        Then User should see the required information on Do I need to make any extra arrangements for charging my bike? tab

    Scenario: Verify the VIC Tab
        When User clicks on View All FAQ's Contact
        Then User should navigate to FAQ Page
        When User clicks on VIC Tab
        Then User should see the Features Tab Open
        When User clicks on What features does the homescreen of the VIC have?
        Then User should see the required infromation in What features does the homescreen of the VIC have? tab
        When User clicks on What are the options for customizing the VIC experience?
        Then User should see the required information on What are the options for customizing the VIC experience? tab
        When User clicks on Where do I find the ride stats on the device? tab
        Then User should see the required information on Where do I find the ride stats on the device? tab
        When User clicks on What details can we find on the ride details page? tab
        Then User should see the required information on What details can we find on the ride details page? tab
        When User clicks on What is a rider and guest profile? tab
        Then User should see the required information on What is a rider and guest profile? tab
        When user clicks on How do I switch between rider and guest profiles? tab
        Then User should see the required information on How do I switch between rider and guest profiles? tab
        When User clicks on Connectivity Tab
        Then User should see the Connectivity Tab Open
        When User clicks on What are the connectivity features of this bike?
        Then User should see the required information On What are the connectivity features of this bike? tab
        When User clicks on Is there an app to operate the bike?
        Then User should see the required information on Is there an app to operate the bike? tab
        When User clicks on Can I navigate using the VIC?
        Then User should see the required information on Can I navigate using the VIC? tab

    Scenario: Verify the Booking & Purchasing Tab
        When User clicks on View All FAQ's Contact
        Then User should navigate to FAQ Page
        When User clicks on Booking & Purchasing CTA
        Then User should see the Test Ride Tab open
        When User clicks on Can I test ride the bike before making a purchase? Tab
        Then User should see the required information on The Can I test ride the bike before making a purchase? tab
        When User clicks on Will I be charged any amount for the test ride?
        Then User should see the required information on Will I be charged any amount for the test ride? tab
        When User clicks on Do I need a driver's license to ride this bike? Tab
        Then User should see the see the required infromation on Do I need a driver's license to ride this bike? tab
        When User click on Pre-booking CTA
        Then User should see the Pre-booking Tab open
        When User click on Why do I have to pre-book the bike? tab
        Then User should see the required information on Why do I have to pre-book the bike? tab
        When User clicks on Is it mandatory to pre-book the vehicle, or can I purchase it directly from the experience center or online?
        Then User should see the required information on Is it mandatory to pre-book the vehicle, or can I purchase it directly from the experience center or online? tab
        When User clicks on How do I pre-book the product? tab
        Then User should see the required information on How do I pre-book the product? tab
        When User clicks on What are the perks of pre-booking the bike?
        Then User should see the required information on What are the perks of pre-booking the bike? tab
        When User clicks on When will the pre-booking start? tab
        Then User should see the required information on When will the pre-booking start? tab
        When User clicks on What are the payment gateways available for online payment? tab
        Then User should see the required information on What are the payment gateways available for online payment? tab
        When User clicks on Do I have to pay extra charges for booking online? tab
        Then User shoud see the required information on Do I have to pay extra charges for booking online? tab
        When User clicks on How do I cancel my booking? tab
        Then User should see the required information on How do I cancel my booking? tab
        When User clicks on Can I pre-book or show interest register for more than one vehicle? tab
        Then User should see the required information on Can I pre-book or show interest register for more than one vehicle? tab
        When User clicks on Why is my Aadhar card and Driver's License required for pre-booking? tab
        Then User should see the required information on Why is my Aadhar card and Driver's License required for pre-booking? tab