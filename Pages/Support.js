export class Support {
    // Below Mentioned Functions are called in step definitions for Feature file reference

    SupportBTN() {
        cy.get("#support").contains("Support").should('be.visible').click();
    };

    SupportBanner() {
        cy.get(".banner-content")
            .contains("Matter Support").should('be.visible')
            .get("h3.monument.white.mb-16")
            .contains("Your hub for EV assistance,")
            .contains("answers, and advice.")
            .should('be.visible')
            .get(".subTextLight")
            .contains("Get the answers and support you need for your electric vehicle journey. We're here for you!")
            .should('be.visible')
    };

    SupportPageAssersions() {
        cy.scrollToCoordinates(0, 400, 500);
        cy.get("h4.monument.mb-16.mb-xs-8")
            .contains("Trending FAQ’s")
            .should("be.visible")
            .get(".faq-list")
            .contains("What features does the homescreen of the VIC have?")
            .should("be.visible") 
            };
        };