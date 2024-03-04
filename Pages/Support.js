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


    FirstFAQCTA() {
        cy.get("#panel1a-header")
            .scrollIntoView({ duration: 500 })
            .contains("What features does the homescreen of the VIC have?")
            .click();
    };

    FirstFAQList() {
        cy.get("#panel1a-content")
            .contains("The homescreen features include:").should("be.visible")
            .get("#panel1a-content")
            .contains("Battery Indicator").should("be.visible")
            .get("#panel1a-content")
            .contains("Gear Indicator").should("be.visible")
            .get("#panel1a-content")
            .contains("Gear Shift Suggestion").should("be.visible")
            .get("#panel1a-content")
            .contains("Range").should("be.visible")
            .get("#panel1a-content")
            .contains("Vehicle Speed").should("be.visible")
            .get("#panel1a-content")
            .contains("RPM").should("be.visible")
            .get("#panel1a-content")
            .contains("Efficiency").should("be.visible")
            .get("#panel1a-content")
            .contains("Widgets (Ride/ Mini Map/ Media Controls)").should("be.visible")
            .get("#panel1a-content")
            .contains("Odometer").should("be.visible")
            .get("#panel1a-content")
            .contains("Trip meter").should("be.visible")
            .get("#panel1a-content")
            .contains("Tell tales (Indicator, Hazard, High Beam , ABS, Coolant temp etc.)").should("be.visible")
            .get("#panel1a-content")
            .contains("Ambient temperature").should("be.visible")
            .get("#panel1a-content")
            .contains("Time").should("be.visible")
            .get("#panel1a-content")
            .contains("Connectivity status (e-sim, bluetooth, etc)").should("be.visible")
        cy.get("#panel1a-header")
            .contains("What features does the homescreen of the VIC have?")
            .click();
    };

    SecondFAQCTA() {
        cy.get('[role="button"]')
            .contains("How do I cancel my booking?")
            .click();
    };


    SecondFAQList() {
        cy.get(".MuiAccordion-region")
            .contains("You can cancel your pre-booking from your profile on ")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("https://matter.in/")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains(" any time before making the full payment of your bike. The Cancellation tab is available in your profile. The booking amount is fully refundable.")
            .should("be.visible")
            .get('[role="button"]')
            .contains("How do I cancel my booking?")
            .click();
    };

    ThirdFAQCTA() {
        cy.get('[role="button"]')
            .contains("How do I create an account?")
            .click();
    };

    ThirdFAQList() {
        cy.get('[role="region"]')
            .contains('To create an account on the website, click on "Login" on the navigation bar. Enter your mobile number to get verified through OTP. Fill in your name, Email ID, and create a username. Agreeing with the T&Cs after filling in the details will create an account on the Matter Website.')
            .get('[role="button"]')
            .contains("How do I create an account?")
            .click();
    };

    FourthFAQCTA() {
        cy.get('[role="button"]').eq(3)
            .contains("What are the primary specifications of this bike?")
            .click();
    };

    FourthFAQList() {
        cy.get('[role="region"]')
            .contains("Here you go with the vehicle specs")
            .should("be.visible")
            .get('[role="region"]')
            .contains("Power: 10kW")
            .should("be.visible")
            .get('[role="region"]')
            .contains("3 Ride modes: Eco, Sports & City")
            .should("be.visible")
            .get('[role="region"]')
            .contains("Acceleration - 0 to 60 kmph in under 6 seconds")
            .should("be.visible")
            .get('[role="region"]')
            .contains("Range 125 kms* (under testing conditions)")
            .should("be.visible")
            .get('[role="region"]')
            .contains("Battery - 5kWh")
            .should("be.visible")
            .get('[role="region"]')
            .contains("Charging time - It takes 5 hours with a normal charger, whereas it takes only 2 hours with a fast charger.")
            .should("be.visible")
            .get('[role="button"]').eq(3)
            .contains("What are the primary specifications of this bike?")
            .click();
    };

    FifthFAQCTA() {
        cy.get('[role="button"]').eq(4)
            .contains("What are the smart features of the bike?")
            .click();
    };

    FifthFAQList() {
        cy.get('[role="region"]')
            .contains("The common smart features of the bikes are:")
            .should("be.visible")
            .get('[role="region"]')
            .contains("Some features that are slightly different in the variants are:")
            .should("be.visible")
            .get('[role="region"]')
            .contains("AERA 5000 has offline integrated navigation and regulatory updates via OTA.")
            .should("be.visible")
            .get('[role="region"]')
            .contains("AERA 5000+ has advanced integrated navigation and comes with new features in the OTA updates.")
            .should("be.visible")
            .get('[role="button"]').eq(4)
            .contains("What are the smart features of the bike?")
            .click();
    };

    ViewAllFAQCTA() {
        cy.get('a[href="/faq"]')
            .contains("View all FAQs")
            .should("be.visible")
            .click();
    };

    ViewAllFAQPage() {
        cy.get(".banner-content")
            .contains("FAQs")
            .should("be.visible")
            .get(".banner-content")
            .contains("We are here to help you!")
            .should("be.visible")
            .get(".banner-content")
            .contains("Get answers to all your questions here.")
            .should("be.visible")

    };

    ViewAllPageInfo() {
        cy.get(".explore-section")
            .contains("Explore the Era of ")
            .should("be.visible")
            .get(".explore-section")
            .contains(" Matter with us.")
            .should("be.visible")
    };

    VarientCTA() {
        cy.get(".subtopic")
            .contains("Variants")
            .should("be.visible")
            .click();
    };

    VarientList() {
        cy.get('[role="button"]').eq(0)
            .scrollIntoView({ duration: 200 })
            .contains("How many variants are available for Matter AERA?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("Currently, there are two variants available for Matter. Matter AERA 5000 and AERA 5000+.")
            .should("be.visible");

        cy.get('[role="button"]').eq(1)
            .contains("What colours are available in both the variants?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("Matter AERA 5000 is available in the colours Cosmic Black and Cosmic Blue.")
            .should("be.visible")
            .get('[role="region"]')
            .contains("AERA 5000+ is available in a range of colours: Cosmic Black, Cosmic Blue, Blaze Red, Nord Grey, and Glacier White.")
            .should("be.visible");

        // cy.get('[role="button"]').eq(2)
        //     .scrollIntoView({ duration: 200 })
        //     .contains("What are the smart features of the bike?")
        //     .should("be.visible")
        //     .click()
        //     .get('.MuiAccordion-region')
        //     .contains("The common smart features of the bikes are:")
        //     .should("be.Visible")
        //     .get('.MuiAccordion-region')
        //     .contains("Predicted range, real-time battery consumption (SoC), ride stats, vehicle sharing (Matter Family), accident detection and emergency notification, park assist, welcome lights, battery saving, battery usage stats, gear indicator, predicted range, and passive keyless entry. Some common features also include Service reminder, an owner's manual, etc.")
        //     .should("be.Visible")
        //     .get('.MuiAccordion-region')
        //     .contains("Feature that makes the AERA 5000+ stand out the most are:")
        //     .should("be.Visible")
        //     .get('.MuiAccordion-region')
        //     .contains("AERA 5000+ has advanced integrated navigation and comes with new features in the OTA updates.")
        //     .should("be.Visible")
        //     .get('.MuiAccordion-region')
        //     .contains("Whereas, AERA 5000 has offline integrated navigation and regulatory updates via OTA.")
        //     .should("be.Visible");

        cy.get('[role="button"]').eq(3)
            .contains("What features are included in the connected mobile app of the two bikes?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("The common features include: Service reminder and management, owner's manual, basic ride history and stats in AERA 5000, advanced in AERA 5000+, manual running cost saving calculator in AERA 5000, auto in AERA 5000+.")
            .should("be.visible")

    };

    VehicleSpecification() {
        cy.get(".subtopic")
            .contains("Vehicle Specifications")
            .should("be.visible")
            .click();
    };

    VehicleSpecificationList() {
        cy.get('[role="button"]').eq(0)
            .contains("Is this a smart bike?")
            .click()
            .get(".MuiAccordion-region")
            .contains("Yes, this is a smart bike that stays connected to the app, has an intelligent BMS, smart motor controller, a smart connected cluster, multiple sensors and a lot of other smart features and systems in it.")
            .should("be.visible");

        cy.get('[role="button"]').eq(1)
            .contains("What are the primary specifications of this bike?")
            .click()
            .get(".MuiAccordion-region")
            .contains("Here you go with the vehicle specs")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Power: 10kW")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("3 Ride modes: Eco, Sports & City")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Acceleration - 0 to 60 kmph in under 6 seconds")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Range 125 kms* (under testing conditions)")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Battery - 5kWh")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Charging time - It takes 5 hours with a normal charger, whereas it takes only 2 hours with a fast charger.")
            .should("be.visible");

        cy.get('[role="button"]').eq(2)
            .contains("What are the smart features of the bike?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("The common smart features of the bikes are:")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Predicted range, real-time battery consumption (SoC), ride stats, vehicle sharing (Matter Family), accident detection and emergency notification, park assist, welcome lights, battery saving, battery usage stats, gear indicator, predicted range, and passive keyless entry.")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Some features that are slightly different in the variants are:")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("AERA 5000 has offline integrated navigation and regulatory updates via OTA.")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("AERA 5000+ has advanced integrated navigation and comes with new features in the OTA updates.")
            .should("be.visible");

        cy.get('[role="button"]').eq(3)
            .contains("What are the ride modes in the bike?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("The three ride modes are: Eco, Sports & City")
            .should("be.visible");

        cy.get('[role="button"]').eq(4)
            .contains("What is the top speed of the bike?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("The bike can speed up to a good 105 km/hr")
            .should("be.visible");
    };

    BatteryAndRange() {
        cy.get(".subtopic")
            .contains("Battery & Range")
            .should("be.visible")
            .click({ force: true });
    };

    BatteryAndRangeList() {
        cy.get('[role="button"]').eq(0)
            .contains("What is the average range of the bike?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("The testing range of the bike is 125 kms. The range will vary depending on the mode you are riding the bike in.")
            .should("be.visible");

        cy.get('[role="button"]').eq(1)
            .contains("How long will the batteries last?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("Battery can retain 70% of its capacity over 1500 charge cycles, which is more than 1,50,000 kms. It is going to last for a few good years!")
            .should("be.visible");

        cy.get('[role="button"]').eq(2)
            .contains("What is the battery specification of the bike?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("The bike comes with a 5kWh battery pack with an integrated with a super smart Battery Management System (BMS).")
            .should("be.visible");

        cy.get('[role="button"]').eq(3)
            .contains("Does the range availability of the bike change with different ride modes?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("Yes, the range availability changes with ride modes. Additionally, the range depends on a number of factors like weight, riding style, road conditions etc.")
            .should("be.visible");
    };

    Safety() {
        cy.get(".subtopic")
            .contains("Safety")
            .should("be.visible")
            .click({ force: true });
    };

    SafetyList() {
        cy.get('[role="button"]').eq(0)
            .contains("How safe is the battery box?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("Our battery box has been designed to ensure utmost safety - considering both regulatory and real world relevance.")
            .should("be.visible");

        cy.get('[role="button"]').eq(1)
            .contains("Does the bike have a battery cooling system?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("Yes, the bike has an active liquid cooling system for the battery.")
            .should("be.visible");

        cy.get('[role="button"]').eq(2)
            .contains("What system is used for thermal management in the bike?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("The bike is equipped with IITMS (Integrated Intelligent Thermal Management System)")
            .should("be.visible");

        cy.get('[role="button"]').eq(3)
            .contains("Does the bike's battery heat up?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("Yes, it does. But our IITMS ensures that the components are in their optimal temperature range for safety, efficiency, and performance.")
            .should("be.visible");

        cy.get('[role="button"]').eq(4)
            .contains("Is the bike protected with IP67?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("Yes, the bike is IP67 protected.")
            .should("be.visible");

        cy.get('[role="button"]').eq(5)
            .contains("How is the battery pack protected considering it's a Li-ion battery?")
            .should("be.visible")
            .click()
            .get(".MuiAccordion-region")
            .contains("Our Li-ion battery has been protected with our smart BMS (Battery Management System) that is integrated with safety features - protective features for excessive heating, over charge, over discharge, short circuit etc.")
            .should("be.visible");

    };


    FinanceBTN() {
        cy.get(".monument.small")
            .contains("Finance")
            .should("be.visible")
            .click();
    };
FinancePartner() {
    cy.get(".subtopic.active")
    .contains("Finance Partners")
    .should("be.visible")
    .get(".monument.primary.mb-16.mt-16")
    .contains("Finance Partners")
    .should("be.visible"); 
};

FinanceLabelTab() {
    cy.get('[role="button"]')
    .contains("What are the available financing options?")
    .should("be.visible")
    .click(); 
};

FinanceList() {
  cy.get(".MuiAccordion-region")
  .contains("We have tie-ups with a couple of finance partners. We shall let you know when the dealership centers open up.")
  .should("be.visible"); 
};

AllAboutMatter() {
    cy.get(".monument.small")
    .contains("About Matter")
    .should("be.visible")
    .click(); 
};

AllAboutMatterLabel() {
    cy.get(".monument.primary.mb-16.mt-16")
    .contains("All about Matter")
    .should("be.visible")
};

WhenMatterBorn() {
    cy.get('[role="button"]')
    .contains("When was Matter born?")
    .should("be.visible")
    .click();
}; 

WhenMatterBornLabel() {
cy.get(".MuiAccordion-region")
  .contains("Matter had its inception in January 2019 in Ahmedabad.")
  .should("be.visible");
}; 

WhatDoesMatterDo() {
    cy.get('[role="button"]')
    .contains("What does Matter do?")
    .should("be.visible")
    .click(); 
};

WhatDoesMatterDoLabel() {
    cy.get(".MuiAccordion-region")
    .contains("Matter is a product tech company that works for innovating the electric mobility space. We are vertically integrated, which essentially means that we work on all the core components that entail in a motorbike. This stretches from the battery technologies, to the powertrain development, to the software and electronics backing, that stitches the whole system together, all the way to curation of experiences that the consumers value. We presently have a vertical of business that provides energy storage and management solutions- Matter Energy and an Electic Motorbike that is completely developed in-house as offerings.")
    .should("be.visible")
    .get(".MuiAccordion-region")
    contains("This is nothing but the tip of the iceberg of the solutions and products we have in the pipeline. We leverage our technological expertise to provide individuals with cleaner and greener alternatives.")
    .should("be.visible"); 
}





};