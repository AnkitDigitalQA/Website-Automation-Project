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

And("User should click on Hamberger Menu", () => {
    // This Line of code is to click on Hamberger Menu  
    HM.HambergerMenu();
});

// Test Case I- Verify the Assersion on the Support Page

When("User clicks on Support Button", () => {
    Sp.SupportBTN();
});

Then("User should navigate to Support Page", () => {
    Sp.SupportBanner();
});

And("User should see the all required information on the page", () => {
Sp.SupportPageAssersions();
});
















After(() => {
    // Code to clear data or perform cleanup actions
    // This code will run after all tests in this file have completed
    cy.log('Performing cleanup tasks after all tests.');
    // Add your cleanup logic here, for example, deleting test data from the application or resetting state.
});
