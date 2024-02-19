export class Support {
// Below Mentioned Functions are called in step definitions for Feature file reference

SupportBTN() {
cy.get ("#support").contains("Support").should('be.visible').click();
}; 

SupportBanner() {
    cy.get (".banner-content")
    .contains("Matter Support").should('be.visible')
    .get(".monument white").eq(0)
    .contains("Your hub for EV assistance,").should('be.visible')
    .contains("answers, and advice.").should('be.visible')
    .contains("Get the answers and support you need for your electric vehicle journey. We're here for you!").should('be.visible')
    }; 


















}