import { Dealer_Locator } from "../../../Pages/Dealer_Locator";
import { HambergerMenu } from "../../../Pages/HambergerMenu";
import { Given, When, Then, And, Before, After } from 'cypress-cucumber-preprocessor/steps';
const tp = new HambergerMenu();
const DL = new Dealer_Locator();

Before(() => {
    // Code to run before any tests in this file or suite
    // This code will run once before any tests in this file start
    cy.log('Reloading the page before tests.');
    cy.reload();
});

// Precondition- 
Given("User should be on Home Page", () => {
    // This Line of code is the get the user on Home Page
    tp.WebVisit();
});

And("User should click on Hamberger Menu", () => {
    // This Line of code is to click on Hamberger Menu  
    tp.HambergerMenu();
});


// Test Case I - Verify the Assersions on Find a Dealer Page
When("User clicks on Find a Dealer Page", () => {
    // This Line of code is click on Find a dealer CTA
    DL.DealerLocatorBTN();
});

Then("User should navigate to Find a Dealer Page", () => {
    // This Line of code is to verify the user is on dealer locator page 
    DL.DealerLocatorPageHeader();
    //Here we are verifying the page headers to confirm user is on the dealer locator page 
});

And("User should all the required Information on the page", () => {
    // This Line of code is verify all the assersions on the page 
    DL.DealerLocatorPageAssertions();
});


// Test Case II - Verify the WhatsApp Functionality on Find a Dealer Page
When("User clicks on WhatsApp Number", () => {
    // This Line of code is to verify the WhatsApp Number on the page is clickable 
    DL.DealerLocatorBTN();
});

Then("User should see New WhatsApp Tab", () => {
    // This Line of code is to verify the WhatsApp Text link functionality 
    DL.WhatsAppCTA();
});


// Test Case III- Verify that the Get Direction CTA Navigates user to Google Maps 
When("User clicks Get Direction CTA", () => {
    //This code is to click on Get Direction CTA
    DL.DealerLocatorBTN();
    DL.GetDirectionCTA();
});

Then("User should Navigate to Google Maps", () => {
    //This code is to switch to Google map window 
    DL.GoogleMapPage();
});

After(() => {
    // Code to clear data or perform cleanup actions
    // This code will run after all tests in this file have completed
    cy.log('Performing cleanup tasks after all tests.');
    // Add your cleanup logic here, for example, deleting test data from the application or resetting state.
});