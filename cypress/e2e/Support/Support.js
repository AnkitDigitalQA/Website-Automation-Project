import { Support } from "../../../Pages/Support";
import { HambergerMenu } from "../../../Pages/HambergerMenu";
import { Given, When, Then, And, Before, After } from 'cypress-cucumber-preprocessor/steps';

const HM = new HambergerMenu();
const Sp = new Support();

Before(() => {
    // Code to run before any tests in this file or suite
    // This code will run once before any tests in this file start
    cy.log('Reloading the page before tests.');
    cy.reload();
});
// Precondition- 
Given("User should be on Home Page", () => {
    // This Line of code is the get the user on Home Page
    HM.WebVisit();
});

When("User should click on Hamberger Menu", () => {
    // This Line of code is to click on Hamberger Menu  
    HM.HambergerMenu();
});

Then("User clicks on Support Button", () => {
    // This Line of code is to click on support button 
    Sp.Support_BTN();
});
And("navigate's to Support Page", () => {
    // This line of code is to click navigate to support page 
    Sp.Support_Banner();
});

// Test Case I:- Verify the Assersion on the Support Page
When("User navigate to Supports page", () => {
    // This is already decleared function 

});

Then("User should see the all required information on the page", () => {
    // This line of code is to verify the support page assertion 
    Sp.Support_Page_Assersions();
});


//Test Case II:- Verify That User should see the required Imformation in Every FAQ Panel 
When("User clicks on What features does the homescreen of the VIC have?", () => {
    // This line of code is to click on first CTA on FAQ List
    Sp.First_FAQ_CTA();
});

Then("User should see the required points in the first tab", () => {
    // This line of code is to verify the first CTA on FAQ List 
    Sp.First_FAQ_List();
});

When("User clicks on How do I cancel my booking?", () => {
    // This Line Of Code is to Click on How do I cancel my booking Text
    Sp.Second_FAQ_CTA();
});

Then("User should see the required points in the second tab", () => {
    // This Line of code is to verify the assertions on 2nd CTA 
    Sp.Second_FAQ_List();
});

When("User clicks on How do I create an account?", () => {
    // This Line of code is to click on How do I create an account 
    Sp.Third_FAQ_CTA();
});

Then("User should see the required points in the third tab", () => {
    // This Line of code is verify the assertions under 3rd Tab 
    Sp.Third_FAQ_List();
});

When("User clicks on What are the primary specifications of this bike?", () => {
    // This Line 
    Sp.Fourth_FAQ_CTA();
});

Then("User should see the required points in the fourth tab", () => {
    Sp.Fourth_FAQ_List();
});

When("User clicks on What are the smart features of the bike?", () => {
    Sp.Fifth_FAQ_CTA();
});

Then("User should see the required points in the fifth tab", () => {
    Sp.Fifth_FAQ_List();
});

// Test Case III- Verify the View all FAQ's Page
When("User clicks on View All FAQ's Contact", () => {
    Sp.ViewAll_FAQ_CTA();
});

Then("User should navigate to FAQ Page", () => {
    Sp.View_All_FAQ_Page();
});

And("User should see all the information on the FAQ page", () => {
    Sp.View_All_Page_Info();
});

// Test case IV- Verify The Product Tab on FAQ Page
When("User clicks on Variants", () => {
    Sp.Varien_CTA();
});

Then("User should see the required information in Variants tab", () => {
    Sp.Varient_List();
});

When("User clicks on Vehicle Specifications", () => {
    Sp.Vehicle_Specification();
});

Then("User should see the required information in Vehicle Specifications tab", () => {
    Sp.Vehicle_Specification_List();
});

When("User clicks on Battery & Range", () => {
    Sp.Battery_And_Range();
});

Then("User should see the required information in Battery & Range tab", () => {
    Sp.Battery_And_Range_List();
});

When("User clicks on Safety", () => {
    Sp.Safety();
});

Then("User should see the required information in Safety tab", () => {
    Sp.Safety_List();
});


// Test case V- Verify the Finance Tab on FAQ Page

When("User clicks on Finance", () => {
    Sp.Finance_BTN();
});
Then("User should see the Finance Partners tab", () => {
    Sp.Finance_Partner();
});

When("User clicks What are the available financing options?", () => {
    Sp.Finance_Label_Tab();
});

Then("User should see the required information in the tab", () => {
    Sp.Finance_List();
});

// Test case VI- Verify the About Matter Tab
When("User clicks on About Matter", () => {
    Sp.All_About_Matter();
});

Then("User should see the All About Matter option", () => {
    Sp.All_About_Matter_Label();
});

When("User clicks on When was Matter born?", () => {
    Sp.When_Matter_Born();
});
Then("User should see the required information on When was Matter born? tab", () => {
    Sp.When_Matter_Born_Label();
});

When("User Clicks on What does Matter do?", () => {
    Sp.What_Does_Matter_Do();
});

Then("User should see the required information on the What does Matter do? tab", () => {
    Sp.What_Does_Matter_Do_Label();
});

// Test Case VII- Verify the Signup and Login Tab

When("User clicks on Signup and Login", () => {
    Sp.Sign_Up_and_Login();
});

Then("User should see the Creating an Account tab", () => {
    Sp.Creating_an_Account_Tab();
});

When("User clicks on How do I create an account?", () => {
    Sp.How_do_I_create_an_account();
});

Then("User should see the requires information on the How do I create an account tab", () => {
    Sp.How_do_I_create_an_account_Info();
});

When("User clicks on What is my username?", () => {
    Sp.What_is_my_username();
});

Then("User should the required information on What is my username? tab", () => {
    Sp.What_is_my_username_Info();
});

When("User clicks on How do I create my username?", () => {
    Sp.How_do_I_create_my_username();
});

Then("User should see the required information on the How do I create my username? tab", () => {
    Sp.How_do_I_create_my_username_Info();
});

When("User clicks on Can I make an account with a phone number outside of India?", () => {
    Sp.Can_I_make_an_account_with_a_phone_number_outside_of_India();
});

Then("User should see the required information on Can I make an account with a phone number outside of India? tab", () => {
    Sp.Can_I_make_an_account_with_a_phone_number_outside_of_India_Info();
});

When("User clicks on Editing your profile", () => {
    Sp.Editing_your_profile();
});

Then("User should see the Editing your profile tab opened", () => {
    Sp.Editing_your_profile_Tab();
});

When("User clicks on How do I edit my profile?", () => {
    Sp.How_do_I_edit_my_profile();
});

Then("User should see the required information on How do I edit my profile? tab", () => {
    Sp.How_do_I_edit_my_profile_Info();
});

When("User clicks on Can I change my username?", () => {
    Sp.Can_I_change_my_username();
});

Then("User should see the required information on Can I change my username? tab", () => {
    Sp.Can_I_change_my_username_Info();
});

When("User clicks on How do I change my username?", () => {
    Sp.How_do_I_change_my_username();
});

Then("User should see the required information on How do I change my username? tab", () => {
    Sp.How_do_I_change_my_username_Info();
});

When("User clicks on Login & Sign up issues", () => {
    Sp.Login_and_Sign_up_issues_CTA();
});
Then("User should see the Login & Sign up issues tab open", () => {
    Sp.Login_and_Sign_up_issues_Tab();
});

When("User clicks on Why am I facing trouble receiving OTP on my phone?", () => {
    Sp.Why_am_I_facing_trouble_receiving_OTP_on_my_phone();
});

Then("User should see the required information on Why am I facing trouble receiving OTP on my phone? tab", () => {
    Sp.Why_am_I_facing_trouble_receiving_OTP_on_my_phone_Info();
});

When("User clicks on I have changed my mobile number, can I still login using my old number?", () => {
    Sp.I_have_changed_my_mobile_number_can_I_still_login_using_my_old_number();
});

Then("User should see the required information on I have changed my mobile number, can I still login using my old number? tab", () => {
    Sp.I_have_changed_my_mobile_number_can_I_still_login_using_my_old_number_Info();
});


// Test case VIII- Verify the Registration Tab

When("User clicks on Registration CTA", () => {
    Sp.RegistrationCTA();
});

Then("User should see the Register Your Interest open", () => {
    Sp.Register_Your_Interest_Tab();
});

When("User clciks on What happens when I register my interest?", () => {
    Sp.What_happens_when_I_register_my_interest();
});

Then("User should see the required information on What happens when I register my interest? tab", () => {
    Sp.What_happens_when_I_register_my_interest_Info();
});

When("User clicks on Why is it mandatory to provide my mobile number and email id for registering my interest?", () => {
    Sp.Why_is_it_mandatory_to_provide_my_mobile_number_and_email_id_for_registering_my_interest();
});

Then("User should see the required information on Why is it mandatory to provide my mobile number and email id for registering my interest? tab", () => {
    Sp.Why_is_it_mandatory_to_provide_my_mobile_number_and_email_id_for_registering_my_interest_Info();
});
When("User clicks on I'm a channel partner. Can I still register my interest?", () => {
    Sp.I_m_a_channel_partner_Can_I_still_register_my_interest();
});

Then("User should see the required information on I'm a channel partner. Can I still register my interest?", () => {
    Sp.I_m_a_channel_partner_Can_I_still_register_my_interest_Info();
});

//Test Case IX - Verify the Ownership Tab

When("User clicks on Ownership Tab", () => {
    Sp.Ownership_Tab();
});

Then("User should see the Charging Tab open", () => {
    Sp.Charging_Tab();
});

When("User clicks on How do I charge my bike?", () => {
    Sp.How_do_I_charge_my_bike();
});

Then("User should see the required information on How do I charge my bike? tab", () => {
    Sp.How_do_I_charge_my_bike_Info();
});

When("User clicks on How much time does it take to charge the bike?", () => {
    Sp.How_much_time_does_it_take_to_charge_the_bike();
});

Then("User should see the required information on How much time does it take to charge the bike? tab", () => {
    Sp.How_much_time_does_it_take_to_charge_the_bike_Info();
});

When("User clicks on Does the vehicle have fast charging?", () => {
    Sp.Does_the_vehicle_have_fast_charging();
});

Then("User should see the required information on Does the vehicle have fast charging? tab", () => {
    Sp.Does_the_vehicle_have_fast_charging_Info();
});

When("User clicks on What type of electric socket is compatible to the charging point?", () => {
    Sp.What_type_of_electric_socket_is_compatible_to_the_charging_point();
});

Then("User should see the required information on What type of electric socket is compatible to the charging point? tab", () => {
    Sp.What_type_of_electric_socket_is_compatible_to_the_charging_point_Info();
});

When("User clicks on How much electricity will I consume in charging the bike?", () => {
    Sp.How_much_electricity_will_I_consume_in_charging_the_bike();
});

Then("User should see the required information on How much electricity will I consume in charging the bike? tab", () => {
    Sp.How_much_electricity_will_I_consume_in_charging_the_bike_Info();
});

When("User clicks on Can I keep it charging overnight?", () => {
    Sp.Can_I_keep_it_charging_overnight();
});

Then("User should see the required information on Can I keep it charging overnight? tab", () => {
    Sp.Can_I_keep_it_charging_overnight_Info();
});

When("User clicks on Do I need to make any extra arrangements for charging my bike?", () => {
    Sp.Do_I_need_to_make_any_extra_arrangements_for_charging_my_bike();
});

Then("User should see the required information on Do I need to make any extra arrangements for charging my bike? tab", () => {
    Sp.Do_I_need_to_make_any_extra_arrangements_for_charging_my_bike_Info();
});


// Test Case X- Verify the VIC Tab
When("User clicks on VIC Tab", () => {
    Sp.VIC_Tab();
});

Then("User should see the Features Tab Open", () => {
    Sp.Features_Tab();
});

When("User clicks on What features does the homescreen of the VIC have?", () => {
    Sp.What_features_does_the_homescreen_of_the_VIC_have();
});

Then("User should see the required infromation in What features does the homescreen of the VIC have? tab", () => {
    Sp.What_features_does_the_homescreen_of_the_VIC_have_Info();
});

When("User clicks on What are the options for customizing the VIC experience?", () => {
    Sp.What_are_the_options_for_customizing_the_VIC_experience();
});

Then("User should see the required information on What are the options for customizing the VIC experience? tab", () => {
    Sp.What_are_the_options_for_customizing_the_VIC_experience_Info();
});

When("User clicks on Where do I find the ride stats on the device? tab:", () => {
    Sp.Where_do_I_find_the_ride_stats_on_the_device();
});

Then("User should see the required information on Where do I find the ride stats on the device? tab", () => {
    Sp.Where_do_I_find_the_ride_stats_on_the_device_Info();
});

When("User clicks on Where do I find the ride stats on the device? tab", () => {
    Sp.Where_do_I_find_the_ride_stats_on_the_device();
});
Then("User should see the required information on Where do I find the ride stats on the device? tab", () => {
    Sp.Where_do_I_find_the_ride_stats_on_the_device_Info();
});

When("User clicks on What details can we find on the ride details page? tab", () => {
    Sp.What_details_can_we_find_on_the_ride_details_page();
});

Then("User should see the required information on What details can we find on the ride details page? tab", () => {
    Sp.What_details_can_we_find_on_the_ride_details_page_Info();
});

When("User clicks on What is a rider and guest profile? tab", () => {
    Sp.What_is_a_rider_and_guest_profile();
});
Then("User should see the required information on What is a rider and guest profile? tab", () => {
    Sp.What_is_a_rider_and_guest_profile_Info();
});

When("user clicks on How do I switch between rider and guest profiles? tab", () => {
    Sp.How_do_I_switch_between_rider_and_guest_profiles();
});

Then("User should see the required information on How do I switch between rider and guest profiles? tab", () => {
    Sp.How_do_I_switch_between_rider_and_guest_profiles_Info();
});
When("User clicks on Connectivity Tab", () => {
    Sp.Connectivity_CTA();
});

Then("User should see the Connectivity Tab Open", () => {
    Sp.Connectivity_Tab();
});

When("User clicks on What are the connectivity features of this bike?", () => {
    Sp.What_are_the_connectivity_features_of_this_bike();
});

Then("User should see the required information On What are the connectivity features of this bike? tab", () => {
    Sp.What_are_the_connectivity_features_of_this_bike_Info();
});

When("User clicks on Is there an app to operate the bike?", () => {
    Sp.Is_there_an_app_to_operate_the_bike();
});

Then("User should see the required information on Is there an app to operate the bike? tab", () => {
    Sp.Is_there_an_app_to_operate_the_bike_Info();
});

When("User clicks on Can I navigate using the VIC?", () => {
    Sp.Can_I_navigate_using_the_VIC();
});

Then("User should see the required information on Can I navigate using the VIC? tab", () => {
    Sp.Can_I_navigate_using_the_VIC_Info();
});

//Test Case XI - Verify the Booking & Purchasing Tab

When("User clicks on Booking & Purchasing CTA", () => {
    Sp.Booking_and_Purchasing();
});

Then("User should see the Test Ride Tab open", () => {
    Sp.Test_Ride_Tab();
});

When("User clicks on Can I test ride the bike before making a purchase? Tab", () => {
    Sp.Can_I_test_ride_the_bike_before_making_a_purchase();
});

Then("User should see the required information on The Can I test ride the bike before making a purchase? tab", () => {
    Sp.Can_I_test_ride_the_bike_before_making_a_purchase_Info();
});

When("User clicks on Will I be charged any amount for the test ride?", () => {
Sp.Will_I_be_charged_any_amount_for_the_test_ride(); 
});

Then("User should see the required information on Will I be charged any amount for the test ride? tab", () => {
Sp.Will_I_be_charged_any_amount_for_the_test_ride(); 
});

When("User clicks on Do I need a driver's license to ride this bike? Tab", () => {
Sp.Will_I_be_charged_any_amount_for_the_test_ride_Info(); 
});

Then("User should see the see the required infromation on Do I need a driver's license to ride this bike? tab", () => {
Sp.Do_I_need_a_driver_license_to_ride_this_bike(); 
});

When("User click on Pre-booking CTA", () => {
Sp.Prebooking_CTA(); 
});

Then("User should see the Pre-booking Tab open", () => {
Sp.Prebooking_Tab(); 
});

When("User click on Why do I have to pre-book the bike? tab", () => {
Sp.Why_do_I_have_to_prebook_the_bike(); 
});

Then("User should see the required information on Why do I have to pre-book the bike? tab", () => {
Sp.Why_do_I_have_to_prebook_the_bike_Info(); 
});

When("User clicks on Is it mandatory to pre-book the vehicle, or can I purchase it directly from the experience center or online?", () => {
Sp.Is_it_mandatory_to_prebook_the_vehicle_or_can_I_purchase_it_directly_from_the_experience_center_or_online();
});

Then("User should see the required information on Is it mandatory to pre-book the vehicle, or can I purchase it directly from the experience center or online? tab", () => {
Sp.Is_it_mandatory_to_prebook_the_vehicle_or_can_I_purchase_it_directly_from_the_experience_center_or_online_Info();
});

When("User clicks on How do I pre-book the product? tab", () => {
Sp.How_do_I_prebook_the_product();
});

Then("User should see the required information on How do I pre-book the product? tab", () => {
Sp.How_do_I_prebook_the_product_Info();
});

When("User clicks on What are the perks of pre-booking the bike?", () => {
Sp.What_are_the_perks_of_prebooking_the_bike();
});

Then("User should see the required information on What are the perks of pre-booking the bike? tab", () => {
Sp.What_are_the_perks_of_prebooking_the_bike_Info(); 
});

When("User clicks on When will the pre-booking start? tab", () => {
Sp.When_will_the_prebooking_start();
});

Then("User should see the required information on When will the pre-booking start? tab", () => {
Sp.When_will_the_prebooking_start_Info();
});

When("User clicks on What are the payment gateways available for online payment? tab", () => {
Sp.What_are_the_payment_gateways_available_for_online_payment();
});

Then("User should see the required information on What are the payment gateways available for online payment? tab", () => {
Sp.What_are_the_payment_gateways_available_for_online_payment_Info();
});

When("User clicks on Do I have to pay extra charges for booking online? tab", () => {
Sp.Do_I_have_to_pay_extra_charges_for_booking_online();
});

Then("User shoud see the required information on Do I have to pay extra charges for booking online? tab", () => {
Sp.Do_I_have_to_pay_extra_charges_for_booking_online_info(); 
});

When("User clicks on How do I cancel my booking? tab", () => {
Sp.How_do_I_cancel_my_booking();
});

Then("User should see the required information on How do I cancel my booking? tab", () => {
Sp.How_do_I_cancel_my_booking_Info();
});

When("User clicks on Can I pre-book or show interest register for more than one vehicle? tab", () => {
Sp.Can_I_prebook_or_show_interest_register_for_more_than_one_vehicle();
});

Then("User should see the required information on Can I pre-book or show interest register for more than one vehicle? tab", () => {
Sp.Can_I_prebook_or_show_interest_register_for_more_than_one_vehicle_Info();
});

When("User clicks on Why is my Aadhar card and Driver's License required for pre-booking? tab", () => {
    Sp.Why_is_my_Aadhar_card_and_Drivers_License_required_for_prebooking();
});

Then("User should see the required information on Why is my Aadhar card and Driver's License required for pre-booking? tab", () => {
    Sp.Why_is_my_Aadhar_card_and_Drivers_License_required_for_prebooking_Info();
});

After(() => {
    // Code to clear data or perform cleanup actions
    // This code will run after all tests in this file have completed
    cy.log('Performing cleanup tasks after all tests.');
    // Add your cleanup logic here, for example, deleting test data from the application or resetting state.
});
