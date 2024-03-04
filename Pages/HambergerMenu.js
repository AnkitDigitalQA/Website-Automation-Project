export class HambergerMenu {
    WebVisit() {
        cy.visit("https://newsite-qa.matter.in/");
    };

    HambergerMenu() {
        cy.get(".nav-ham-icon ").click();
    };

    WhoWeAre() {
        cy.get("#whoweare")
            .contains("Who we are")
            .should('be.visible')
            .click().wait(2500);
    };

    InnovationHub() {
        cy.get("#innovationhub")
            .contains("Innovation Hub")
            .should('be.visible')
            .click()
            .wait(2500);
    };

    MatterStreams() {
        cy.get("#matterstream")
            .contains("Matter Stream")
            .should("be.visible")
            .click()
            .wait(2500);
    };

    PartnerWithUs() {
        cy.get("#partnerwithus")
            .contains("Partner with Us")
            .should("be.visible")
            .click()
            .wait(2500);
    };

    MatterCommunity() {
        cy.get("#matterCommunity")
            .contains("Matter Community")
            .should("be.visible")
            .click()
            .wait(2500);
    };

    FindaDealer() {
        cy.get("#delaer")
            .contains("Find a Dealer")
            .should("be.visible")
            .click()
            .wait(2500);
    };

    Support() {
        cy.get("#support")
            .contains("Support")
            .should("be.visible")
            .click()
            .wait(2500);
    };

    CLoseButton() {
        cy.get(".MuiTouchRipple-root")
            .click({ force: true })
            .wait(1000);
    };

    CAUTION_NOTICE_CTA() {
        cy.get(".top")
        .contains("Caution Notice")
        .should(be.visible)
        .click(); 
    }; 


    Privacy_Policy_CTA() {
        cy.get(".top")
        .contains("Privacy Policy")
        .should(be.visible)
        .click(); 
    };

    Join_Waitlist_TandC_CTA() {
        cy.get(".top")
        .contains("Join Waitlist T&C")
        .should(be.visible)
        .click(); 
    };

    
    T_C_of_Use_CTA() {
        cy.get(".top")
        .contains("T & C of Use")
        .should(be.visible)
        .click(); 
    };

    Pre_Booking_T_C() {
        cy.get(".top")
        .contains("Pre-Booking T & C")
        .should(be.visible)
        .click(); 
    };

    Copyright_Label() {
        cy.get(".bottom")
        .scrolltoview()
        .contains("© 2023. Matter Motor Works Pvt. Ltd. All rights reserved")
        .should("be.visible")
    }; 

    CAUTION_NOTICE_Header() {
        cy.get(".heading.monument.mb-10.mt-20")
        .contains("CAUTION NOTICE")
        .should(be.visible)
        .click(); 
    };
    
    PRIVACY_POLICY_Header() {
        cy.get(".heading.monument.mb-10.mt-20")
        .contains("PRIVACY POLICY")
        .should(be.visible)
        .click(); 
    };

    PRIVACY_POLICY_Header() {
        cy.get(".heading.monument.mb-10.mt-20")
        .contains("PRIVACY POLICY")
        .should(be.visible)
        .click(); 
    };

    TERMS_AND_CONDITIONS_OF_JOIN_THE_WAITLIST_Header() {
        cy.get(".heading.monument.mb-10.mt-20")
        .contains("TERMS AND CONDITIONS OF JOIN THE WAITLIST")
        .should(be.visible)
        .click(); 
    };

    TERMS_AND_CONDITIONS_OF_ONLINE_PRE_BOOKING_Header() {
        cy.get(".heading.monument.mb-10.mt-20")
        .contains("TERMS AND CONDITIONS OF ONLINE PRE-BOOKING")
        .should(be.visible)
        .click();    
    }



}; 