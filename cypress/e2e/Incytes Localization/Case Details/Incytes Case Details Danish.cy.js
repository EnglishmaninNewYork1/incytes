Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var case_link = 'https://alpha.incytesdata-dev.com/cases/11314309/survey/0/instance/0/delegate/0/status/0'
var user_email = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_password = 'pacienT1'
var language_cookie_set = 'da'

describe('Incytes Case Details localization DA ', function () {

    it("Check Cases overview page ", function () {                 

        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', language_cookie_set)                                                                          // Set cookie variable to change language
        cy.visit(case_link, {
            failOnStatusCode: false
        })

        cy.get("input[name = 'email']").type(user_email)                                                                                    // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()


        cy.get("a[data-testid = 'case-detail-link']", { "timeout": 10000 }).children('p').should('contain', 'TILBAGE TIL SAGOVERSIGT')                            // Back to case overview link

        cy.get("h1[data-testid = 'case-detail-item-title']").should('contain', 'Sagdetalje')                                                                            //Head title
        //cy.get("button[data-testid = 'case-detail-item-send-email']").children('span').first().should('contain', "RESEND INVITATION")                                  //Resent Invitation button
        cy.get("button[data-testid = 'case-detail-item-archive']").children('span').first().should('contain', "ARKIVERE SAG")                                          //Archive case button
        cy.get("button[data-testid = 'case-detail-item-button-close']").children('span').first().should('contain', "KOMPLET SAG")                                    //Complete case button
        cy.get("button[data-testid = 'case-detail-item-button-edit']").children('span').first().should('contain', "REDIGER SAG")                                         //Edit case button

        cy.get("div[data-testid = 'case-phi-view']").children('button').click()                                                                                         //Open eye button
        
        cy.get("h6[data-testid = 'case-phi-id']").should('contain', 'Sags-ID')                                                                                         // Case id label
        cy.get("h6[data-testid = 'case-phi-patient-id']").should('contain', 'Patient-ID')                                                                              //Patient ID label
        cy.get("h6[data-testid = 'case-phi-protocol-version']").should('contain', 'Version')                                                                            //Version label

        cy.get("span[data-testid = 'header-case-detail-create-label']").should('contain', 'Lavet af')                                                                 //Created by
        cy.get("span[data-testid = 'header-case-detail-commencement-label']").should('contain', 'Begyndelses dato')                                                    //Commencement date
        cy.get("span[data-testid = 'header-case-detail-treatment-label']").should('contain', 'Behandlingsdato')                                                          //Treatment date

        cy.get("h4[data-testid = 'hidden-phi-section-contact']").should('contain', 'Kontaktoplysninger')                                                               //Contact information
        cy.get("span[data-testid = 'hidden-phi-section-general-email']").should('contain', 'E-MAIL')                                                                     // Email
        cy.get("span[data-testid = 'hidden-phi-section-general-phone']").should('contain', 'MOBILTELEFON')                                                              // Mobile phone
        cy.get("span[data-testid = 'phi-section-languageName-text']").should('contain', 'KOMMUNIKATION OM')                                                             // Communicition on

        cy.get("h4[data-testid = 'hidden-phi-membership']").should('contain', 'Cirkelmedlemskab')                                                                      // Circle Membership
        cy.get("span[data-testid = 'hidden-phi-section-sponsor']").should('contain', 'SPONSOR')                                                                         // Sponsor
        cy.get("p[data-testid = 'hidden-phi-section-no-data']").should('contain', 'Data ikke delt')                                                                    // Data not shared

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Sagadvarsler')                                                                       // Case alerts section name
        cy.get("span[data-testid = 'case-alert-head-survey']").should('contain', 'UNDERSØGELSE')                                                                              // Survey title
        cy.get("span[data-testid = 'case-alert-head-type']").should('contain', 'ADVARSLERTYPE')                                                                            // Alert Type
        cy.get("span[data-testid = 'case-alert-head-date']").should('contain', 'ADVARSELSDATO')                                                                            // Alert Date
        cy.get("span[data-testid = 'case-alert-head-delegate']").should('contain', 'DELEGERET')                                                                          // Delegate

        cy.get("p[data-testid = 'case-outlier-alert-cell-posttreatment']").first().should('contain', 'Efterbehandling')                                                  // Post Treatment
        cy.get("div[data-testid = 'case-outlier-alert-type-cell']").first().children('h6').should('contain', 'Outlier opdaget')                                        // Outlier Detected
        cy.get("div[data-testid = 'case-outlier-alert-type-cell']").children('div').children('div').children('div').first().next().children('p').should('contain', 'Øverste grænse') // Upper limit
        cy.get("p[data-testid = 'case-outlier-alert-delegate-patient']").first().should('contain', 'Patient')                                                                     // Patient
        cy.get("button[aria-label = 'more']").first().click()
        cy.get("li[data-testid = 'case-outlier-alert-menu-item']").should('contain', 'Afvise')                                                                                   // Dismiss option
        cy.get("div[data-testid = 'observational-protocol-menu-task']").first().click({ force: true })

        cy.get("div[data-testid = 'case-surveys-alert-cell']").children('p').should('contain', 'Efterbehandling')                                                         // Post treatment
        cy.get("p[data-testid = 'case-surveys-type-overdue']").should('contain', 'Forsinket')                                                                              // Overdue

        cy.get("span[data-testid = 'case-surveys-alert-date-overdue']").children('div').children('div').last().should('contain', 'Forsinket')                              //Overdue with red icon

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', "Patientens Fremskridt")                                                                   //Patient Progress
        cy.get("p[data-testid = 'patient-progress-container-revision']").should('contain', "Version 1 | Opdateret den")                                                     // Updated on
        cy.get("p[data-testid = 'patient-progress-container-revision']").should('contain', "ved")                                                                         // by

        cy.get("button[data-testid = 'patient-progress-container-button-results']").children('span').should('contain', "SE PATIENTENS RESULTATER")                         //View patient's result
        cy.get("button[data-testid = 'patient-progress-container-button-edit']").children('span').should('contain', "REDIGER")                                              //Edit button
        
        cy.get("h4[data-testid = 'observational-protocol-menu-title']").first().should('contain', 'Pre-Treatment')                                                       //Pre-treatment surveys block
        cy.get("h4[data-testid = 'observational-protocol-menu-title']").should('contain', 'Treatment')                                                                   //Treatment surveys block
        cy.get("h4[data-testid = 'observational-protocol-menu-title']").last().should('contain', 'Post-Treatment')                                                       //Post-Treatment surveys block

        cy.get("span[data-testid = 'label-delegate-is-completed']").first().children('span').should('contain', "Færdiggjort af:  Patient")                                 //Completed by patient
        cy.get("span[data-testid = 'label-protocol-is-completed']").first().should('contain', "Afsluttet:")                                                              //Completed Date
        cy.get("div[data-testid = 'observational-protocol-menu-task']").first().children('div').children('span').first().should('contain', "Task ID")                    //Task ID
        cy.get("span[data-testid = 'label-delegate-not-completed']").children('span').should('contain', "Efterforsker")                                                  //Investigator - delegate
        cy.get("div[data-testid = 'observational-protocol-menu-task']").children('span').children('span').should('contain', "Udløbe")                                   // Expires
        cy.get("span[data-testid = 'label-delegate-not-completed']").children('span').should('contain', "Service udbyder")                                              // Service provider -delegate

        cy.get("p[data-testid = 'observational-protocol-menu-item-title']").first().should('contain', 'DANISH BMI')                                          // Survey name check
        cy.get("h6[data-testid = 'writable-readonly-text-title']").first().children('span').should('contain', 'Danish BMI')                                   // Survey question localization check
    })

})