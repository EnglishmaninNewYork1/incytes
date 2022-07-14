Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var case_link = 'https://alpha.incytesdata-dev.com/cases/11314309/survey/0/instance/0/delegate/0/status/0'
var user_email = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_password = 'pacienT1'
var language_cookie_set = 'fr'

describe('Incytes Case Details localization FR ', function () {

    it("Check Cases overview page ", function () {                 

        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', language_cookie_set)                                                                          // Set cookie variable to change language
        cy.visit(case_link, {
            failOnStatusCode: false
        })

        cy.get("input[name = 'email']").type(user_email)                                                                                    // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()


        cy.get("a[data-testid = 'case-detail-link']", { "timeout": 10000 }).children('p').should('contain', 'RETOUR AU APERÇU DES CAS')                            // Back to case overview link

        cy.get("h1[data-testid = 'case-detail-item-title']").should('contain', 'Détail de cas')                                                                            //Head title
        //cy.get("button[data-testid = 'case-detail-item-send-email']").children('span').first().should('contain', "RESEND INVITATION")                                  //Resent Invitation button
        cy.get("button[data-testid = 'case-detail-item-archive']").children('span').first().should('contain', "ARCHIVATION DU CAS")                                          //Archive case button
        cy.get("button[data-testid = 'case-detail-item-button-close']").children('span').first().should('contain', "CLÔTURE DU CAS")                                    //Complete case button
        cy.get("button[data-testid = 'case-detail-item-button-edit']").children('span').first().should('contain', "MODIFIER LE CAS")                                         //Edit case button

        cy.get("div[data-testid = 'case-phi-view']").children('button').click()                                                                                         //Open eye button
        
        cy.get("h6[data-testid = 'case-phi-id']").should('contain', 'ID de cas')                                                                                         // Case id label
        cy.get("h6[data-testid = 'case-phi-patient-id']").should('contain', 'ID du Patient')                                                                              //Patient ID label
        cy.get("h6[data-testid = 'case-phi-protocol-version']").should('contain', 'Version')                                                                            //Version label

        cy.get("span[data-testid = 'header-case-detail-create-label']").should('contain', 'Créé par')                                                                 //Created by
        cy.get("span[data-testid = 'header-case-detail-commencement-label']").should('contain', 'Date de début')                                                    //Commencement date
        cy.get("span[data-testid = 'header-case-detail-treatment-label']").should('contain', 'Date de traitement')                                                          //Treatment date

        cy.get("h4[data-testid = 'hidden-phi-section-contact']").should('contain', 'Informations de contact')                                                               //Contact information
        cy.get("span[data-testid = 'hidden-phi-section-general-email']").should('contain', 'EMAIL')                                                                     // Email
        cy.get("span[data-testid = 'hidden-phi-section-general-phone']").should('contain', 'TÉLÉPHONE MOBILE')                                                              // Mobile phone
        cy.get("span[data-testid = 'phi-section-languageName-text']").should('contain', 'COMMUNICATION SUR')                                                             // Communicition on

        cy.get("h4[data-testid = 'hidden-phi-membership']").should('contain', 'Adhésion au Cercle')                                                                      // Circle Membership
        cy.get("span[data-testid = 'hidden-phi-section-sponsor']").should('contain', 'PARRAINER')                                                                         // Sponsor
        cy.get("p[data-testid = 'hidden-phi-section-no-data']").should('contain', 'Données non partagées')                                                                    // Data not shared

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Alertes de cas')                                                                       // Case alerts section name
        cy.get("span[data-testid = 'case-alert-head-survey']").should('contain', 'ENQUÊTE')                                                                              // Survey title
        cy.get("span[data-testid = 'case-alert-head-type']").should('contain', "TYPE D'ALERTE")                                                                            // Alert Type
        cy.get("span[data-testid = 'case-alert-head-date']").should('contain', "DATE D'ALERTE")                                                                            // Alert Date
        cy.get("span[data-testid = 'case-alert-head-delegate']").should('contain', 'DÉLÉGUER')                                                                          // Delegate

        cy.get("p[data-testid = 'case-outlier-alert-cell-posttreatment']").first().should('contain', 'Après traitement')                                                  // Post Treatment
        cy.get("div[data-testid = 'case-outlier-alert-type-cell']").first().children('h6').should('contain', 'Valeur aberrante détectée')                                        // Outlier Detected
        cy.get("div[data-testid = 'case-outlier-alert-type-cell']").children('div').children('div').children('div').first().next().children('p').should('contain', 'Limite supérieure') // Upper limit
        cy.get("p[data-testid = 'case-outlier-alert-delegate-patient']").first().should('contain', 'Patient')                                                                     // Patient
        cy.get("button[aria-label = 'more']").first().click()
        cy.get("li[data-testid = 'case-outlier-alert-menu-item']").should('contain', 'Rejeter')                                                                                   // Dismiss option
        cy.get("div[data-testid = 'observational-protocol-menu-task']").first().click({ force: true })

        cy.get("div[data-testid = 'case-surveys-alert-cell']").children('p').should('contain', 'Après traitement')                                                         // Post treatment
        cy.get("p[data-testid = 'case-surveys-type-overdue']").should('contain', 'En retard')                                                                              // Overdue

        cy.get("span[data-testid = 'case-surveys-alert-date-overdue']").children('div').children('div').last().should('contain', 'En retard')                              //Overdue with red icon

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', "Progrès du patient")                                                                   //Patient Progress
        cy.get("p[data-testid = 'patient-progress-container-revision']").should('contain', "Version 1 | Mis à jour le")                                                     // Updated on
        cy.get("p[data-testid = 'patient-progress-container-revision']").should('contain', "par")                                                                         // by

        cy.get("button[data-testid = 'patient-progress-container-button-results']").children('span').should('contain', "VOIR LES RÉSULTATS DU PATIENT")                         //View patient's result
        cy.get("button[data-testid = 'patient-progress-container-button-edit']").children('span').should('contain', "ÉDITER")                                              //Edit button
        
        cy.get("h4[data-testid = 'observational-protocol-menu-title']").first().should('contain', 'Pre-Treatment')                                                       //Pre-treatment surveys block
        cy.get("h4[data-testid = 'observational-protocol-menu-title']").should('contain', 'Treatment')                                                                   //Treatment surveys block
        cy.get("h4[data-testid = 'observational-protocol-menu-title']").last().should('contain', 'Post-Treatment')                                                       //Post-Treatment surveys block

        cy.get("span[data-testid = 'label-delegate-is-completed']").first().children('span').should('contain', "Terminé par:  Patient")                                 //Completed by patient
        cy.get("span[data-testid = 'label-protocol-is-completed']").first().should('contain', "Completed:")                                                              //Completed Date
        cy.get("div[data-testid = 'observational-protocol-menu-task']").first().children('div').children('span').first().should('contain', "Task ID")                    //Task ID
        cy.get("span[data-testid = 'label-delegate-not-completed']").children('span').should('contain', "Investigateur")                                                  //Investigator - delegate
        cy.get("div[data-testid = 'observational-protocol-menu-task']").children('span').children('span').should('contain', "Expire")                                   // Expires
        cy.get("span[data-testid = 'label-delegate-not-completed']").children('span').should('contain', "Fournisseur de Services")                                              // Service provider -delegate

        cy.get("p[data-testid = 'observational-protocol-menu-item-title']").first().should('contain', 'FRENCH BMI')                                          // Survey name check
        cy.get("h6[data-testid = 'writable-readonly-text-title']").first().children('span').should('contain', 'French BMI')                                   // Survey question localization check
    })

})