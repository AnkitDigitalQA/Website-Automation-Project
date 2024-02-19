import { HambergerMenu } from "../../../Pages/HambergerMenu";
import { Given, When, Then, And, Before, After } from 'cypress-cucumber-preprocessor/steps'; 
const tp = new HambergerMenu (); 

Before(() => {
  // Code to run before any tests in this file or suite
  // This code will run once before any tests in this file start
  cy.log('Reloading the page before tests.');
  cy.reload();
});


// Test TC_1 
Given  ("User should be on Home Page", () => {
tp.WebVisit();
}); 

When ("User Clicks on Hamberberger Menu Icon", () => {
tp.HambergerMenu();
}); 

When ("User Clicks on Who We Are CTA", () => {
tp.WhoWeAre();
}); 

When ("User Clicks on Innovation Hub CTA", () => {
 tp.HambergerMenu();
 tp.InnovationHub();
}); 

When ("User Clicks on Partner With Us CTA",() => {
  tp.HambergerMenu();
  tp.PartnerWithUs();
}); 
When ("User Clicks on Matter Streams CTA", () => {
  tp.HambergerMenu();
  tp.MatterStreams();
});


After(() => {
  // Code to clear data or perform cleanup actions
  // This code will run after all tests in this file have completed
  cy.log('Performing cleanup tasks after all tests.');
  // Add your cleanup logic here, for example, deleting test data from the application or resetting state.
});
