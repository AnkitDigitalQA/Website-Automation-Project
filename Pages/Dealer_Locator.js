export class Dealer_Locator {

    // Below Mentioned Functions are called in step definitions for Feature file reference 

    DealerLocatorBTN() {
        // This is the Find a dealer BTN 
        cy.get('#delaer').contains("Find a Dealer").should("be.visible").click();
    };

    DealerLocatorPageHeader() {
        // These are the Header assertions on Find a Dealer Page
        cy.get(".dealer-locator-content")
            .contains("Locate").should("be.visible")
            .contains("nearby dealer").should("be.visible");
    };

    DealerLocatorPageAssertions() {
        // These are the assertions on the Find a Dealer Page 
        cy.get(".dealer-locator-content")
            .contains("Visit India's first Matter Space dealership, now open at Ahmedabad.").should("be.visible")
            .get(".dealer-card-list")
            .contains("Matter Motor Works Pvt Ltd").should("be.visible")
            .get(".dealer-card-list")
            .contains("The address, vijay Cross Roads, Navarangpura, Ahmedabad, Gujarat-380009").should("be.visible")
            .get(".dealer-locator-content")
            .contains("Couldn't locate us near you? Don't worry, we will be coming to your city soon.").should("be.visible");
    };

    WhatsAppCTA() {
        // This is the Whatsapp CTA with Phone number copy on the Find a Dealer Page 
        cy.get('[href="https://wa.me/7984774653"]').click({ force: true });
    };

    GetDirectionCTA() {
        // This is the Get Direction CTA on The Find a Dealer Page 
        cy.get('[href*="google.com/maps/dir"]').eq(1).invoke('removeAttr', '_blank').click({ force: true });
    };

    GoogleMapPage() {
        // This is the Google Map Page to Visit 
        cy.visit('https://www.google.com/maps/dir/?api=1&origin=18.580747230023796%2C73.73460294886466&destination=23.0418154%2C72.550444')
            .wait(500);
    };
};
