import { HambergerMenu } from "../../../Pages/HambergerMenu";
import { Support } from "../../../Pages/Support";
import { Given, When, Then, And, Before, After } from 'cypress-cucumber-preprocessor/steps';
const HM = new HambergerMenu();
const Sp = new Support();
Before(() => {
  // Code to run before any tests in this file or suite
  // This code will run once before any tests in this file start
  cy.log('Reloading the page before tests.');
  cy.reload();
});


// Test TC_1 - Verify that All Hamberberger Menu CTA are clickable 

Given("User should be on Home Page", () => {
  //This line of code is to visit the Website URL
  HM.WebVisit();
});

When("User Clicks on Hamberberger Menu Icon", () => {
  // This line of code is to click on Hamberger Menu
  HM.HambergerMenu();
});

When("User Clicks on Who We Are CTA", () => {
  // This line of code is to click on Who We are tab
  HM.WhoWeAre();
});

When("User Clicks on Innovation Hub CTA", () => {
  // This line of code is to click on Innovation Hun tab
  HM.HambergerMenu();
  HM.InnovationHub();
});

When("User Clicks on Partner With Us CTA", () => {
  // This line of code is to click on parter with us tab
  HM.HambergerMenu();
  HM.PartnerWithUs();
});

When("User Clicks on Matter Streams CTA", () => {
  // This line of code is to click on Matter Streams Tab
  HM.HambergerMenu();
  HM.MatterStreams();
});

When("User Clicks on Matter Community CTA", () => {
  // This line of code is to click on Matter Community tab
  HM.HambergerMenu();
  HM.MatterCommunity();
});

When("User Clicks on Find a Dealer CTA", () => {
  // This line of code is to click on Find a Dealer tab
  HM.HambergerMenu();
  HM.FindaDealer();
  HM.CLoseButton();
});

When("User Clicks on Support CTA", () => {
  // This line of code is to click on Support Tab 
  HM.HambergerMenu();
  HM.Support();
});

Then("It is Verified that all the CTA and Hyperlink are clickable on Hamberberger Menu", () => {
  Sp.Support_Banner();
});


//Test Case II- Verify that All the Leagel Pages CTA are clickable

Then("User should see the Hamberberger Menu Opened", () => {
  HM.Copyright_Label();
});

When("User cliks on CAUTION NOTICE", () => {
  HM.HambergerMenu();
  HM.CAUTION_NOTICE_CTA();
});

Then("User should Navigate to CAUTION NOTICE Page", () => {
  HM.CAUTION_NOTICE_Header();
});

When("User clicks on PRIVACY POLICY", () => {
  HM.HambergerMenu();
  HM.Privacy_Policy_CTA();
});

Then("User should Navigate to PRIVACY POLICY Page", () => {

  HM.PRIVACY_POLICY_Header();
});

When("User clicks on Join Waitlist T&C", () => {
  HM.HambergerMenu();
  HM.Join_Waitlist_TandC_CTA();
});

Then("User should Navigate to TERMS AND CONDITIONS OF JOIN THE WAITLIST Page", () => {

  HM.TERMS_AND_CONDITIONS_OF_JOIN_THE_WAITLIST_Header();
});

When("User clicks on T & C of Use", () => {
  HM.HambergerMenu();
  HM.T_C_of_Use_CTA
});

Then("User should Navigate to T & C of Use Page", () => {
  HM.TERMS_AND_CONDITIONS_OF_ONLINE_PRE_BOOKING_Header();
});

When("User clicks on Pre-Booking T & C", () => {
  HM.T_C_of_Use_CTA();
});

Then("User should Navigate to Pre-Booking T & C Page", () => {
  HM.Pre_Booking_T_C();
});


After(() => {
  // Code to clear data or perform cleanup actions
  // This code will run after all tests in this file have completed
  cy.log('Performing cleanup tasks after all tests.');
  // Add your cleanup logic here, for example, deleting test data from the application or resetting state.
});
