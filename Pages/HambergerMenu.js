export class HambergerMenu {
    WebVisit() {
        cy.visit("https://newsite-qa.matter.in/");
    }

    HambergerMenu() {
        cy.get(".nav-ham-icon ").click();
    }

    WhoWeAre() {
        cy.get("#whoweare")
            .contains("Who we are")
            .should('be.visible')
            .click().wait(2500);
    }

    InnovationHub() {
        cy.get("#innovationhub")
            .contains("Innovation Hub")
            .should('be.visible')
            .click()
            .wait(2500);
    }

    MatterStreams() {
        cy.get("#matterstream")
            .contains("Matter Stream")
            .should("be.visible")
            .click()
            .wait(2500);
    }

    PartnerWithUs() {
        cy.get("#partnerwithus")
            .contains("Partner with Us")
            .should("be.visible")
            .click()
            .wait(2500);
    }



    MatterCommunity() {
        cy.get("#matterCommunity")
            .contains("Matter Community")
            .should("be.visible")
            .click()
            .wait(2500);
    }

    FindaDealer() {
        cy.get("#delaer")
            .contains("Find a Dealer")
            .should("be.visible")
            .click()
            .wait(2500);
    }

    Support() {
        cy.get("#support")
            .contains("Support")
            .should("be.visible")
            .click()
            .wait(2500);
    }

    CLoseButton() {
        cy.get(".MuiTouchRipple-root")
            .click({ force: true })
            .wait(1000);
    }


}; 