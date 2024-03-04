export class Support {
    // Below Mentioned Functions are called in step definitions for Feature file reference

    Support_BTN() {
        cy.get("#support")
            .contains("Support")
            .should('be.visible')
            .click();
    };

    Support_Banner() {
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

    Support_Page_Assersions() {
        cy.scrollToCoordinates(0, 300, 400);
        cy.get("h4.monument.mb-16.mb-xs-8")
            .contains("Trending FAQ’s")
            .should("be.visible")
            .get(".faq-list")
            .contains("What features does the homescreen of the VIC have?")
            .should("be.visible")
    };


    First_FAQ_CTA() {
        cy.get("#panel1a-header")
            .scrollIntoView({ duration: 500 })
            .contains("What features does the homescreen of the VIC have?")
            .click();
    };

    First_FAQ_List() {
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

    Second_FAQ_CTA() {
        cy.get('[role="button"]')
            .contains("How do I cancel my booking?")
            .click();
    };


    Second_FAQ_List() {
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

    Third_FAQ_CTA() {
        cy.get('[role="button"]')
            .contains("How do I create an account?")
            .click();
    };

    Third_FAQ_List() {
        cy.get('[role="region"]')
            .contains('To create an account on the website, click on "Login" on the navigation bar. Enter your mobile number to get verified through OTP. Fill in your name, Email ID, and create a username. Agreeing with the T&Cs after filling in the details will create an account on the Matter Website.')
            .get('[role="button"]')
            .contains("How do I create an account?")
            .click();
    };

    Fourth_FAQ_CTA() {
        cy.get('[role="button"]').eq(3)
            .contains("What are the primary specifications of this bike?")
            .click();
    };

    Fourth_FAQ_List() {
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

    Fifth_FAQ_CTA() {
        cy.get('[role="button"]').eq(4)
            .contains("What are the smart features of the bike?")
            .click();
    };

    Fifth_FAQ_List() {
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

    ViewAll_FAQ_CTA() {
        cy.get('a[href="/faq"]')
            .contains("View all FAQs")
            .should("be.visible")
            .click();
    };

    View_All_FAQ_Page() {
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

    View_All_Page_Info() {
        cy.get(".explore-section")
            .contains("Explore the Era of ")
            .should("be.visible")
            .get(".explore-section")
            .contains(" Matter with us.")
            .should("be.visible")
    };

    Varien_CTA() {
        cy.get(".subtopic")
            .contains("Variants")
            .should("be.visible")
            .click();
    };

    Varient_List() {
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

    Vehicle_Specification() {
        cy.get(".subtopic")
            .contains("Vehicle Specifications")
            .should("be.visible")
            .click();
    };

    Vehicle_Specification_List() {
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

    Battery_And_Range() {
        cy.get(".subtopic")
            .contains("Battery & Range")
            .should("be.visible")
            .click({ force: true });
    };

    Battery_And_Range_List() {
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

    Safety_List() {
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


    Finance_BTN() {
        cy.get(".monument.small")
            .contains("Finance")
            .should("be.visible")
            .click();
    };
    Finance_Partner() {
        cy.get(".subtopic.active")
            .contains("Finance Partners")
            .should("be.visible")
            .get(".monument.primary.mb-16.mt-16")
            .contains("Finance Partners")
            .should("be.visible");
    };

    Finance_Label_Tab() {
        cy.get('[role="button"]')
            .contains("What are the available financing options?")
            .should("be.visible")
            .click();
    };

    Finance_List() {
        cy.get(".MuiAccordion-region")
            .contains("We have tie-ups with a couple of finance partners. We shall let you know when the dealership centers open up.")
            .should("be.visible");
    };

    All_About_Matter() {
        cy.get(".monument.small")
            .contains("About Matter")
            .should("be.visible")
            .click();
    };

    All_About_Matter_Label() {
        cy.get(".monument.primary.mb-16.mt-16")
            .contains("All about Matter")
            .should("be.visible")
    };

    When_Matter_Born() {
        cy.get('[role="button"]')
            .contains("When was Matter born?")
            .should("be.visible")
            .click();
    };

    When_Matter_Born_Label() {
        cy.get(".MuiAccordion-region")
            .contains("Matter had its inception in January 2019 in Ahmedabad.")
            .should("be.visible");
    };

    What_Does_Matter_Do() {
        cy.get('[role="button"]')
            .contains("What does Matter do?")
            .should("be.visible")
            .click();
    };

    What_Does_Matter_Do_Label() {
        cy.get(".MuiAccordion-region")
            .contains("Matter is a product tech company that works for innovating the electric mobility space. We are vertically integrated, which essentially means that we work on all the core components that entail in a motorbike. This stretches from the battery technologies, to the powertrain development, to the software and electronics backing, that stitches the whole system together, all the way to curation of experiences that the consumers value. We presently have a vertical of business that provides energy storage and management solutions- Matter Energy and an Electic Motorbike that is completely developed in-house as offerings.")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("This is nothing but the tip of the iceberg of the solutions and products we have in the pipeline. We leverage our technological expertise to provide individuals with cleaner and greener alternatives.")
            .should("be.visible");
    };

    Sign_Up_and_Login() {
        cy.get(".monument.small")
            .contains("Signup and Login")
            .should("be.visible")
            .click();
    };

    Creating_an_Account_Tab() {
        cy.get(".monument.primary.mb-16.mt-16")
            .contains("Creating an Account")
            .should("be.visible")
    };

    How_do_I_create_an_account() {
        cy.get('[role="button"]')
            .contains("How do I create an account?")
            .should("be.visible")
            .click();
    };

    How_do_I_create_an_account_Info() {
        cy.get(".MuiAccordion-region")
            .contains('To create an account on the website, click on "Login" on the navigation bar. Enter your mobile number to get verified through OTP. Fill in your name, Email ID, and create a username. Agreeing with the T&Cs after filling in the details will create an account on the Matter Website.')
            .should("be.visible")
    };

    What_is_my_username() {
        cy.get('[role="button"]')
            .contains("What is my username?")
            .should("be.visible")
            .click();
    };

    What_is_my_username_Info() {
        cy.get(".MuiAccordion-region")
            .contains('Your username is a unique 10-character name that will be your display name in the bike, app, the community portal, leaderboards, and other Matter platforms. The username must be of 10 characters which is a combination of letters, numbers, and only "_" or "." as special characters. Your username is important because it creates a unique identity in a world full of similar names.')
            .should("be.visible")
    };

    How_do_I_create_my_username() {
        cy.get('[role="button"]')
            .contains("How do I create my username?")
            .should("be.visible")
            .click();
    };

    How_do_I_create_my_username_Info() {
        cy.get(".MuiAccordion-region")
            .contains('To create your username, go to the Matter website and click on the Sign-up button at the top-right corner. Get your number verified and enter your personal details like name and email ID. Next, you will be asked to create a 10-character username. This is your unique name across all Matter platforms. Create a username that is a combination of letter, numbers, and only "_" and "." special characters.')
            .should("be.visible");
    };

    Can_I_make_an_account_with_a_phone_number_outside_of_India() {
        cy.get('[role="button"]')
            .contains("Can I make an account with a phone number outside of India?")
            .should("be.visible")
            .click();
    };

    Can_I_make_an_account_with_a_phone_number_outside_of_India_Info() {
        cy.get(".MuiAccordion-region")
            .contains('No, you can only use an Indian phone number to create an account.')
            .should("be.visible");
    };

    Editing_your_profile() {
        cy.get(".subtopic")
            .contains("Editing your profile")
            .should("be.visible")
            .click();
    }

    Editing_your_profile_Tab() {
        cy.get(".monument.primary.mb-16.mt-16")
            .contains("Editing your profile")
            .should("be.visible");
    };

    How_do_I_edit_my_profile() {
        cy.get('[role="button"]')
            .contains("How do I edit my profile?")
            .should("be.visible")
            .click();
    };

    How_do_I_edit_my_profile_Info() {
        cy.get(".MuiAccordion-region")
            .contains('Login to the website with your mobile number and click on your username at the top-right corner and go to your account. Click on your name and start editing your profile.')
            .should("be.visible");
    };

    Can_I_change_my_username() {
        cy.get('[role="button"]')
            .contains("Can I change my username?")
            .should("be.visible")
            .click();
    };
    Can_I_change_my_username_Info() {
        cy.get(".MuiAccordion-region")
            .contains('Yes, you can change your username. To change your username, login to your Matter account and click on your username to go to your profile. You can edit and change your username in your profile')
            .should("be.visible");
    };

    How_do_I_create_my_username() {
        cy.get('[role="button"]')
            .contains("How do I create my username?")
            .should("be.visible")
            .click();
    };

    How_do_I_create_My_Username_Info() {
        cy.get(".MuiAccordion-region")
            .contains('After you log into the website, go to your account, click on your name, and edit your username in your profile.')
            .should("be.visible");
    };

    Login_and_Sign_up_issues_CTA() {
        cy.get(".subtopic")
            .contains("Login & Sign up issues")
            .should("be.visible")
            .click();
    };

    Login_and_Sign_up_issues_Tab() {
        cy.get(".monument.primary.mb-16.mt-16")
            .contains("Login & Sign up issues")
            .should("be.visible");
    };

    Why_am_I_facing_trouble_receiving_OTP_on_my_phone() {
        cy.get('[role="button"]')
            .contains("Why am I facing trouble receiving OTP on my phone?")
            .should("be.visible")
            .click();
    };

    Why_am_I_facing_trouble_receiving_OTP_on_my_phone_Info() {
        cy.get(".MuiAccordion-region")
            .contains('You need a stable network connectivity to receive an OTP on your phone. You could be in a weak network zone. Try restarting your phone to refresh network on your phone.')
            .should("be.visible");
    };

    I_have_changed_my_mobile_number_can_I_still_login_using_my_old_number() {
        cy.get('[role="button"]')
            .contains("I have changed my mobile number, can I still login using my old number?")
            .should("be.visible")
            .click();
    };
    How_do_I_change_my_username() {
        cy.get('[role="button"]')
            .contains("How do I change my username?")
            .should("be.visible")
            .click();
    };

    How_do_I_change_my_username_Info() {
        cy.get(".MuiAccordion-region")
            .contains('After you log into the website, go to your account, click on your name, and edit your username in your profile.')
            .should("be.visible");
    };

    I_have_changed_my_mobile_number_can_I_still_login_using_my_old_number_Info() {
        cy.get(".MuiAccordion-region")
            .contains('No, you cannot login using your old number. For updating your phone number, please contact the Matter Support team.')
            .should("be.visible");
    };

    RegistrationCTA() {
        cy.get(".monument.small")
            .contains("Registration")
            .should("be.visible")
            .click();
    };

    Register_Your_Interest_Tab() {
        cy.get(".monument.primary.mb-16.mt-16")
            .contains("Register Your Interest")
            .should("be.visible");
    };

    What_happens_when_I_register_my_interest() {
        cy.get('[role="button"]')
            .contains("What happens when I register my interest?")
            .should("be.visible")
            .click();
    };

    What_happens_when_I_register_my_interest_Info() {
        cy.get(".MuiAccordion-region")
            .contains('When you register your interest, you get all the timely updates about the release dates, offer availability, design specifications, etc.')
            .should("be.visible");
    };

    Why_is_it_mandatory_to_provide_my_mobile_number_and_email_id_for_registering_my_interest() {
        cy.get('[role="button"]')
            .contains("Why is it mandatory to provide my mobile number and email id for registering my interest?")
            .should("be.visible")
            .click();
    };

    Why_is_it_mandatory_to_provide_my_mobile_number_and_email_id_for_registering_my_interest_Info() {
        cy.get(".MuiAccordion-region")
            .contains('Your mobile number is mandatory for verifying the authenticity of interest, and email id is required for clear communication about your vehicle and any further updates on it.')
            .should("be.visible");
    };

    I_m_a_channel_partner_Can_I_still_register_my_interest() {
        cy.get('[role="button"]')
            .contains("I'm a channel partner. Can I still register my interest?")
            .should("be.visible")
            .click();
    };

    I_m_a_channel_partner_Can_I_still_register_my_interest_Info() {
        cy.get(".MuiAccordion-region")
            .contains('Yes, you can register your interest in becoming a channel partner (dealer/supplier).')
            .should("be.visible");
    };


    Ownership_Tab() {
        cy.get(".monument.small")
            .contains("Ownership")
            .should("be.visible")
            .click();
    };

    Charging_Tab() {
        cy.get(".monument.primary.mb-16.mt-16")
            .contains("Charging")
            .should("be.visible");
    };

    How_do_I_charge_my_bike() {
        cy.get('[role="button"]')
            .contains("How do I charge my bike?")
            .should("be.visible")
            .click();
    };

    How_do_I_charge_my_bike_Info() {
        cy.get(".MuiAccordion-region")
            .contains('Our bike has an on-board 3 pin connecter that can be plugged into to any 5A 3-pin socket for charging.')
            .should("be.visible");
    };

    How_much_time_does_it_take_to_charge_the_bike() {
        cy.get('[role="button"]')
            .contains("How much time does it take to charge the bike?")
            .should("be.visible")
            .click();
    };

    How_much_time_does_it_take_to_charge_the_bike_Info() {
        cy.get(".MuiAccordion-region")
            .contains('It takes up to 5 hours to charge the bike.')
            .should("be.visible");
    };

    Does_the_vehicle_have_fast_charging() {
        cy.get('[role="button"]')
            .contains("Does the vehicle have fast charging?")
            .should("be.visible")
            .click();
    };

    Does_the_vehicle_have_fast_charging_Info() {
        cy.get(".MuiAccordion-region")
            .contains('Yes, there is a fast charger for the bike that charges the bike in 2 hours.')
            .should("be.visible");
    };

    What_type_of_electric_socket_is_compatible_to_the_charging_point() {
        cy.get('[role="button"]')
            .contains("What type of electric socket is compatible to the charging point?")
            .should("be.visible")
            .click();
    };

    What_type_of_electric_socket_is_compatible_to_the_charging_point_Info() {
        cy.get(".MuiAccordion-region")
            .contains("You don't need any special arrangements to charge your bike at home. The bike can be charged on a universal 3 pin 5A socket")
            .should("be.visible");
    };

    How_much_electricity_will_I_consume_in_charging_the_bike() {
        cy.get('[role="button"]')
            .contains("How much electricity will I consume in charging the bike?")
            .should("be.visible")
            .click();
    };

    How_much_electricity_will_I_consume_in_charging_the_bike_Info() {
        cy.get(".MuiAccordion-region")
            .contains("Since the power tariff differs from state to state, the charges vary in each state. Yet, for reference, a full battery charge consumes around 5 units of power.")
            .should("be.visible");
    };


    Can_I_keep_it_charging_overnight() {
        cy.get('[role="button"]')
            .contains("Can I keep it charging overnight?")
            .should("be.visible")
            .click();
    };

    Can_I_keep_it_charging_overnight_Info() {
        cy.get(".MuiAccordion-region")
            .contains("Yes, you can leave it charging overnight. Our intelligent BMS and charger does auto-cut off once charging has been completed.")
            .should("be.visible");
    };

    Do_I_need_to_make_any_extra_arrangements_for_charging_my_bike() {
        cy.get('[role="button"]')
            .contains("Do I need to make any extra arrangements for charging my bike?")
            .should("be.visible")
            .click();
    };

    Do_I_need_to_make_any_extra_arrangements_for_charging_my_bike_Info() {
        cy.get(".MuiAccordion-region")
            .contains("Not at all. All you need is a universal 5Amp 3-pin socket.")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Please ensure that your house is equipped and protected with all the basic electric installation features, such as circuit breakers.")
            .should("be.visible")
    };

    VIC_Tab() {
        cy.get(".monument.small")
            .contains("VIC")
            .should("be.visible")
            .click();
    };

    Features_Tab() {
        cy.get(".monument.primary.mb-16.mt-16")
            .contains("Features")
            .should("be.visible");
    };

    What_features_does_the_homescreen_of_the_VIC_have() {
        cy.get('[role="button"]')
            .contains("What features does the homescreen of the VIC have?")
            .should("be.visible")
            .click();
    };

    What_features_does_the_homescreen_of_the_VIC_have_Info() {
        cy.get(".MuiAccordion-region")
            .contains("The homescreen features include:")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Battery Indicator")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Gear Indicator")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Gear Shift Suggestion")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Range")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Vehicle Speed")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("RPM")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Efficiency")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Widgets (Ride/ Mini Map/ Media Controls)")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Odometer")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Trip meter")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Tell tales (Indicator, Hazard, High Beam , ABS, Coolant temp etc.)")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Ambient temperature")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Time")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Connectivity status (e-sim, bluetooth, etc)")
            .should("be.visible")
    };

    What_are_the_options_for_customizing_the_VIC_experience() {
        cy.get('[role="button"]')
            .contains("What are the options for customizing the VIC experience?")
            .should("be.visible")
            .click();
    };

    What_are_the_options_for_customizing_the_VIC_experience_Info() {
        cy.get(".MuiAccordion-region")
            .contains("You can choose between light and dark themes. You can also choose the widgets to be shown on the ride screen.")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Additionally, you can customize all the parameters you want to be displayed for the ride stats widget.")
            .should("be.visible");
    };

    Where_do_I_find_the_ride_stats_on_the_device() {
        cy.get('[role="button"]')
            .contains("Where do I find the ride stats on the device?")
            .should("be.visible")
            .click();
    };


    Where_do_I_find_the_ride_stats_on_the_device_Info() {
        cy.get(".MuiAccordion-region")
            .contains("You can find the overall detailed ride statistics under the Ride Stats menu in the VIC.")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("You can also check rider-specific ride statistics in the Profile menu of the VIC.")
            .should("be.visible");
    };

    What_details_can_we_find_on_the_ride_details_page() {
        cy.get('[role="button"]')
            .contains("What details can we find on the ride details page?")
            .should("be.visible")
            .click();
    };
    What_details_can_we_find_on_the_ride_details_page_Info() {
        cy.get(".MuiAccordion-region")
            .contains("The ride details page will give you a summary of various parameters like distance travelled, ride duration, energy spent, energy efficiency, top speed, average speed, and much more.")
            .should("be.visible")
    };


    What_is_a_rider_and_guest_profile() {
        cy.get('[role="button"]')
            .contains("What is a rider and guest profile?")
            .should("be.visible")
            .click();
    };

    What_is_a_rider_and_guest_profile_Info() {
        cy.get(".MuiAccordion-region")
            .contains("A rider profile is a personal profile of the owner of the bike that has all the data of the rider's characteristics. It has parameters like top speed, average speed, energy consumption, lean angle, and also rider score, depending on riding style and traffic conditions.")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("A guest profile is for someone to whom the bike has been lent out by the owner of the bike. It will have similar parameters for the guest rider. A guest rider can also monitor their ride stats on the VIC, but will have limited access of the VIC features.")
            .should("be.visible");
    };

    How_do_I_switch_between_rider_and_guest_profiles() {
        cy.get('[role="button"]')
            .contains("How do I switch between rider and guest profiles?")
            .should("be.visible")
            .click();
    };

    How_do_I_switch_between_rider_and_guest_profiles_Info() {
        cy.get(".MuiAccordion-region")
            .contains("You can switch between rider and guest mode either through the VIC or using the Matter Companion app (Matterverse)")
            .should("be.visible")
    };

    Connectivity_CTA() {
        cy.get(".subtopic")
            .contains("Connectivity")
            .should("be.visible")
            .click();
    };

    Connectivity_Tab() {
        cy.get(".monument.primary.mb-16.mt-16")
            .contains("Connectivity")
            .should("be.visible");
    };

    What_are_the_connectivity_features_of_this_bike() {
        cy.get('[role="button"]')
            .contains("What are the connectivity features of this bike?")
            .should("be.visible")
            .click();
    };

    What_are_the_connectivity_features_of_this_bike_Info() {
        cy.get(".MuiAccordion-region")
            .contains("The bike has a 7-inch LCD capacitive touchscreen dashboard with a state-of-the-art processor + 3GB RAM. It has 4G, WiFi, and Bluetooth 5.0 enabled, equipped with a 9-axis IMU (Interial Measurement Unit).")
            .should("be.visible");
    };

    Is_there_an_app_to_operate_the_bike() {
        cy.get('[role="button"]')
            .contains("Is there an app to operate the bike?")
            .should("be.visible")
            .click();
    };

    Is_there_an_app_to_operate_the_bike_Info() {
        cy.get(".MuiAccordion-region")
            .contains("The bike has a 7-inch LCD capacitive touchscreen dashboard with a state-of-the-art processor + 3GB RAM. It has 4G, WiFi, and Bluetooth 5.0 enabled, equipped with a 9-axis IMU (Interial Measurement Unit).")
            .should("be.visible")
    };

    Can_I_navigate_using_the_VIC() {
        cy.get('[role="button"]')
            .contains("Can I navigate using the VIC?")
            .should("be.visible")
            .click();
    };

    Can_I_navigate_using_the_VIC_Info() {
        cy.get(".MuiAccordion-region")
            .contains("Yes, the bike comes with an in-built navigation powered by Map My India")
            .should("be.visible");
    };

    Booking_and_Purchasing() {
        cy.get(".monument.small")
            .contains("Booking & Purchasing")
            .should("be.visible")
            .click();
    };

    Test_Ride_Tab() {
        cy.get(".monument.primary.mb-16.mt-16")
            .contains("Test Ride")
            .should("be.visible");
    };

    Can_I_test_ride_the_bike_before_making_a_purchase() {
        cy.get('[role="button"]')
            .contains("Can I test ride the bike before making a purchase?")
            .should("be.visible")
            .click();
    };

    Can_I_test_ride_the_bike_before_making_a_purchase_Info() {
        cy.get(".MuiAccordion-region")
            .contains("Yes, you can test ride the bike. If you have pre-booked the bike, you will be notified via SMS or email. You get to be on top of the list to test ride it! We will let you know the test-ride schedule soon.")
            .should("be.visible");
    };

    Will_I_be_charged_any_amount_for_the_test_ride() {
        cy.get('[role="button"]')
            .contains("Will I be charged any amount for the test ride?")
            .should("be.visible")
            .click();
    };

    Will_I_be_charged_any_amount_for_the_test_ride_Info() {
        cy.get(".MuiAccordion-region")
            .contains("Test rides for the AERA are completely free of charge. We believe in providing you with the opportunity to experience the exhilaration of riding our electric motorbike without any financial commitment.")
            .should("be.visible");
    };

    Do_I_need_a_driver_license_to_ride_this_bike() {
        cy.get('[role="button"]')
            .contains("Do I need a driver's license to ride this bike?")
            .should("be.visible")
            .click();
    };

    Do_I_need_a_driver_license_to_ride_this_bike_Info() {
        cy.get(".MuiAccordion-region")
            .contains("Yes, you need a permanent driver's license since it's a high-speed motorbike.")
            .should("be.visible");
    };

    Prebooking_CTA() {
        cy.get(".subtopic")
            .contains("Pre-booking")
            .click({ force: true });
    };

    Prebooking_Tab() {
        cy.get(".monument.primary.mb-16.mt-16")
            .contains("Pre-booking")
            .should("be.visible");
    };

    Why_do_I_have_to_prebook_the_bike() {
        cy.get('[role="button"]')
            .contains("Why do I have to pre-book the bike?")
            .should("be.visible")
            .click();
    };

    Why_do_I_have_to_prebook_the_bike_Info() {
        cy.get(".MuiAccordion-region")
            .contains("When you pre-book the AERA, you get to own the AERA and enjoy all the Limited Period Introductory Offers. Introductory Pre-registration price starting at ₹1,73,999/- Pre-book AERA at just Rs. 990/-")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Benefits of Pre-booking:")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Be the first to own the revolutionary Matter AERA!")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Exclusive test rides and welcome package!")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Exciting financial options available!")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("Easy cancellation with full refunds!")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("2 variants, 5 colors to choose from!")
            .should("be.visible");
    };

    Is_it_mandatory_to_prebook_the_vehicle_or_can_I_purchase_it_directly_from_the_experience_center_or_online() {
        cy.get('[role="button"]')
            .contains("Is it mandatory to pre-book the vehicle, or can I purchase it directly from the experience center or online?")
            .should("be.visible")
            .click();
    };

    Is_it_mandatory_to_prebook_the_vehicle_or_can_I_purchase_it_directly_from_the_experience_center_or_online_Info() {
        cy.get(".MuiAccordion-region")
            .contains("While pre-booking the AERA ensures that you're among the first to own this revolutionary electric motorbike, you also have the option to purchase it directly from our Experience Centers or online at a later date. However, by pre-booking, you secure exclusive benefits and introductory offers that are available for a limited period only. Don't miss out on the opportunity to be part of the early adopters' community and enjoy exciting perks!")
            .should("be.visible");
    };

    How_do_I_prebook_the_product() {
        cy.get('[role="button"]')
            .contains("How do I pre-book the product?")
            .should("be.visible")
            .click();
    };

    How_do_I_prebook_the_product_Info() {
        cy.get(".MuiAccordion-region")
            .contains('To pre-book the bike on the Matter website, visit our website, and click on the "Pre-book Now" link to pre-book the bike. Choose your favorite bike from the two variants, configure your bike by picking the right color, your location, and pre-book the bike at just Rs. 990/-.')
            .should("be.visible");
    };

    What_are_the_perks_of_prebooking_the_bike() {
        cy.get('[role="button"]')
            .contains("What are the perks of pre-booking the bike?")
            .should("be.visible")
            .click();
    };

    What_are_the_perks_of_prebooking_the_bike_Info() {
        cy.get(".MuiAccordion-region")
            .contains("When you pre-book the AERA, you secure your spot as one of the first customers to own this groundbreaking electric motorbike.")
            .should("be.visible");
    };

    When_will_the_prebooking_start() {
        cy.get('[role="button"]')
            .contains("When will the pre-booking start?")
            .should("be.visible")
            .click();
    };

    When_will_the_prebooking_start_Info() {
        cy.get(".MuiAccordion-region")
            .contains("We have opened up pre-booking now. You can pre-book the bike through your preferred platforms out of - the Matter website, OTOCapital, or Flipkart.")
            .should("be.visible");
    };

    What_are_the_payment_gateways_available_for_online_payment() {
        cy.get('[role="button"]')
            .contains("What are the payment gateways available for online payment?")
            .should("be.visible")
            .click();
    };


    What_are_the_payment_gateways_available_for_online_payment() {
        cy.get('[role="button"]')
            .contains("What are the payment gateways available for online payment?")
            .should("be.visible")
            .click();
    };

    What_are_the_payment_gateways_available_for_online_payment_Info() {
        cy.get(".MuiAccordion-region")
            .contains("You can use NetBanking, Credit/Debit Cards, UPI and linked wallets(Yes Bank and FreeCharge) to pay the prebooking amount.")
            .should("be.visible");
    }

    Do_I_have_to_pay_extra_charges_for_booking_online() {
        cy.get('[role="button"]')
            .contains("Do I have to pay extra charges for booking online?")
            .should("be.visible")
            .click();
    };
    Do_I_have_to_pay_extra_charges_for_booking_online_info() {
        cy.get(".MuiAccordion-region")
            .contains("No, there are no extra charges for booking online. The process is convenient, hassle-free, and doesn't come with any additional fees. The pre-booking amount for the AERA is fully refundable, as well.")
            .should("be.visible");
    };

    How_do_I_cancel_my_booking() {
        cy.get('[role="button"]')
            .contains("How do I cancel my booking?")
            .should("be.visible")
            .click();
    };
    How_do_I_cancel_my_booking_Info() {
        cy.get(".MuiAccordion-region")
            .contains("You can cancel your pre-booking from your profile on https://matter.in/")
            .should("be.visible")
            .get(".MuiAccordion-region")
            .contains("any time before making the full payment of your bike. The Cancellation tab is available in your profile. The booking amount is fully refundable.")
            .should("be.visible")
    };
    Can_I_prebook_or_show_interest_register_for_more_than_one_vehicle() {
        cy.get('[role="button"]')
            .contains("Can I pre-book or show interest (register) for more than one vehicle?")
            .should("be.visible")
            .click();
    };

    Can_I_prebook_or_show_interest_register_for_more_than_one_vehicle_Info() {
        cy.get(".MuiAccordion-region")
            .contains("Absolutely! You have the option to pre-book two AERAs using the same mobile number that you have registered with. This allows you to secure multiple AERAs and enjoy the thrill of riding alongside your friends or family.")
            .should("be.visible")
    };

    Why_is_my_Aadhar_card_and_Drivers_License_required_for_prebooking() {
        cy.get('[role="button"]')
            .contains("Why is my Aadhar card and Driver's License required for pre-booking?")
            .should("be.visible")
            .click();
    };

    Why_is_my_Aadhar_card_and_Drivers_License_required_for_prebooking_Info() {
        cy.get(".MuiAccordion-region")
            .contains("You don't need any documents to pre-book the bike. However, these documents will be required at the time of delivery for further procedures.")
            .should("be.visible");
    };



};