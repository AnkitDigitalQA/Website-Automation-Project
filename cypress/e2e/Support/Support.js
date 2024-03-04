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
    Sp.SupportBTN();
});
And("navigate's to Support Page", () => {
    Sp.SupportBanner();
});

// Test Case I:- Verify the Assersion on the Support Page
When("User navigate to Supports page", () => {

});

Then("User should see the all required information on the page", () => {
    Sp.SupportPageAssersions();
});


//Test Case II:- Verify That User should see the required Imformation in Every FAQ Panel 
When("User clicks on What features does the homescreen of the VIC have?", () => {
    Sp.FirstFAQCTA();
});

Then("User should see the required points in the first tab", () => {
    Sp.FirstFAQList();
});

When("User clicks on How do I cancel my booking?", () => {
    Sp.SecondFAQCTA();
});

Then("User should see the required points in the second tab", () => {
    Sp.SecondFAQList();
});

When("User clicks on How do I create an account?", () => {
    Sp.ThirdFAQCTA();
});

Then("User should see the required points in the third tab", () => {
    Sp.ThirdFAQList();
});

When("User clicks on What are the primary specifications of this bike?", () => {
    Sp.FourthFAQCTA();
});

Then("User should see the required points in the fourth tab", () => {
    Sp.FourthFAQList();
});

When("User clicks on What are the smart features of the bike?", () => {
    Sp.FifthFAQCTA();
});

Then("User should see the required points in the fifth tab", () => {
    Sp.FifthFAQList();
});

// Test Case III- Verify the View all FAQ's Page
When("User clicks on View All FAQ's Contact", () => {
    Sp.ViewAllFAQCTA();
});

Then("User should navigate to FAQ Page", () => {
    Sp.ViewAllFAQPage();
});

And("User should see all the information on the FAQ page", () => {
    Sp.ViewAllPageInfo();
});

// Test case IV- Verify The Product Tab on FAQ Page
When("User clicks on Variants", () => {
    Sp.VarientCTA();
});

Then("User should see the required information in Variants tab", () => {
    Sp.VarientList();
});

When("User clicks on Vehicle Specifications", () => {
    Sp.VehicleSpecification();
});

Then("User should see the required information in Vehicle Specifications tab", () => {
    Sp.VehicleSpecificationList();
});

When("User clicks on Battery & Range", () => {
    Sp.BatteryAndRange();
});

Then("User should see the required information in Battery & Range tab", () => {
    Sp.BatteryAndRangeList();
});

When("User clicks on Safety", () => {
    Sp.Safety();
});

Then("User should see the required information in Safety tab", () => {
    Sp.SafetyList();
});


// Test case V- Verify the Finance Tab on FAQ Page

When("User clicks on Finance", () => {
    Sp.FinanceBTN();
});
Then("User should see the Finance Partners tab", () => {
    Sp.FinancePartner();
});

When("User clicks What are the available financing options?", () => {
    Sp.FinanceLabelTab();
});

Then("User should see the required information in the tab", () => {
    Sp.FinanceList();
});

// Test case VI- Verify the About Matter Tab
When("User clicks on About Matter", () => {
    Sp.AllAboutMatter();
});

Then("User should see the All About Matter option", () => {
    Sp.AllAboutMatterLabel();
});

When("User clicks on When was Matter born?", () => {
    Sp.WhenMatterBorn();
});
Then("User should see the required information on When was Matter born? tab", () => {
    Sp.WhenMatterBornLabel();
});

When("User Clicks on What does Matter do?", () => {
Sp.WhatDoesMatterDo(); 
});

Then("User should see the required information on the What does Matter do? tab", () => {
Sp.WhatDoesMatterDoLabel(); 
});








After(() => {
    // Code to clear data or perform cleanup actions
    // This code will run after all tests in this file have completed
    cy.log('Performing cleanup tasks after all tests.');
    // Add your cleanup logic here, for example, deleting test data from the application or resetting state.
});
