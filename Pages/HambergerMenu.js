export class HambergerMenu {
    WebVisit () {
        cy.visit ("https://newsite-qa.matter.in/")
    }
    
    HambergerMenu (){
     cy.get(".nav-ham-icon ").click(); 
    }
    
    WhoWeAre () {
        cy.get (".monument").contains("Who we are").eq(0).click().wait(2500);
    }
    
    InnovationHub () {
        cy.get (".innovationhub").contains("Innovation Hub").eq(1).should('be.visible').wait(500).click('force:true').wait(2500);
    }
    
    PartnerWithUs () {
        cy.get (".monument").eq(2).click().wait(2500);
    }
    
    MatterStreams () {
        cy.get (".monument").eq(3).click().wait(2500);
    }
    
    MatterCommunity () {
        cy.get (".monument").eq(4).click().wait(2500);
    }
    
    FindaDealer () {
        cy.get (".monument").eq(5).click().wait(2500);
    }
    
    Support () {
        cy.get (".monument").eq(7).click().wait(2500);
    }
    
    CautionNotice () {
        cy.get (".MuiTypography-root").eq(1).click().wait(2500);
    }
    monumentprimary () {
        cy.get (".banner-content").contains("Matter Support").should("be.visible")
          .get (".banner-content").contains ("Your hub for EV assistance, answers, and advice.").should("be.visible")
          .get(".banner-content").contains("Get the answers and support you need for your electric vehicle journey. We're here for you!").should("be.visible")
    }
    
    closeBTN () {
        cy.get (".button").eq(8).click();
    }
    }
    
    