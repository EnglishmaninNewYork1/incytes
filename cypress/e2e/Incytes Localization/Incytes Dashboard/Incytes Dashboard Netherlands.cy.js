Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email_with_case = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_email_without_case = 'vitas.leschenko+localizationtestaccount@gmail.com'
var user_password = 'pacienT1'
var language_cookie_set = 'nl'

describe('Incytes Navbar localization NL ', function () {

    it("Check Dashboard without outliers and Tasks ", function () {                 // CHECK PAGE WITHOUT TASK AND OUTLIERS

        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', language_cookie_set)                                                                                          // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
        })

        cy.get("input[name = 'email']").type(user_email_without_case)                                                                       // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()

        cy.get("h2[data-testid = 'personal-plan-title']", { "timeout": 10000 }).should('contain', 'Welkom bij inCytes!')                     // Head Title

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Mijn taken')                                               //My tasks
        cy.get("h2[data-testid = 'dashboard-task-epmty-no-task']").should('contain', 'Geen huidige taken.')                                    //No current tasks
        cy.get("p[data-testid = 'dashboard-task-epmty-desc']").should('contain', 'Taken komen uit gevallen, dus de taak verschijnt automatisch zodra deze aan jou is toegewezen.') //Undertext
        cy.get("p[data-testid = 'dashboard-task-epmty-overdue']").should('contain', 'ACHTERSTALLIG')                                               // Overdue
        cy.get("p[data-testid = 'dashboard-task-epmty-upcoming']").should('contain', 'AANSTAANDE')                                            //Upcoming
        cy.get("p[data-testid = 'dashboard-task-epmty-completed']").should('contain', 'VOLTOOID')                                          //Completed

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Mijn waarschuwingen')                                             //My alerts
        cy.get("h2[data-testid = 'dashboard-alert-empty-no-alert']").should('contain', 'Geen huidige waarschuwingen.')                                // No current Alerts
        cy.get("p[data-testid = 'dashboard-alert-empty-desc']").should('contain', "Geval waarschuwingen treden op wanneer de reactie van een patiënt buiten een acceptabel bereik valt.")         // Undertext
        cy.get("p[data-testid = 'dashboard-alert-empty-ouliers']").should('contain', 'UITBIJTERS')                                            //Outliers
        cy.get("p[data-testid = 'dashboard-alert-empty-phi-free']").should('contain', 'NON-PHI CIRKELS')                                    // Non PHI circles
        cy.get("p[data-testid = 'dashboard-alert-empty-phi']").should('contain', 'PHI-CIRKELS')                                             //PHI Circles

        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Totaal aantal patiënten')                                       //Total Patients
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Totaal aantal gevallen')                                          //Total Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Openstaande gevallen')                                           //Open Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Voltooide gevallen')                                      //Completed Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Gearchiveerde gevallen')                                       //Archived cases
    })

    it("Check Dashboard WITH outliers and Tasks ", function () {                         // CHECK PAGE WITH!!! TASK AND OUTLIERS
        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', language_cookie_set)                                                                                  // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false,
            'timeout':10000
        })
        cy.get("input[name = 'email']").type(user_email_with_case)                                                                // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()
                                                                                                                                                    // MY TASKS BLOCK
        cy.get("th[data-testid = 'task-head-case']", { "timeout": 10000 }).children('span').should('contain', 'PATIËNT')                     //Patient
        cy.get("th[data-testid = 'task-head-survey']").children('span').should('contain', 'GEVAL')                       //Case
        cy.get("th[data-testid = 'task-head-survey-info']").children('span').should('contain', 'TAAK')                  //Task
        cy.get("th[data-testid = 'task-head-due']").children('span').should('contain', 'VERVALDATUM')                      //Due Date
        cy.get("th[data-testid = 'task-head-delegate']").children('span').should('contain', 'AFGEVAARDIGDE')                 //Delegate

        cy.get("p[data-testid = 'survey-alert-patient-cell-id']").should('contain', 'Patiënt ID')                       //Patient ID
        cy.get("p[data-testid = 'survey-alert-case-cell-case-id']").should('contain', 'Geval ID')                        //Case ID
        cy.get("div[data-testid = 'dashboard-survey-alert-cell']").children('p').should('contain', 'Taak-ID')           //Task ID
        cy.get("p[data-testid = 'dashboard-survey-alert-overdue-label']").should('contain', 'Achterstallig')                  //Overdue
        cy.get("h6[data-testid = 'alert-delegate-cell-patient']").should('contain', 'Patiënt')                          //Delegate-patient
                                                                                                                                                    //MY ALERTS BLOCK  
        cy.get("th[data-testid = 'dashboard-alert-head-source']", { "timeout": 10000 }).children('span').should('contain', 'BRON')          //SOURCE
        cy.get("th[data-testid = 'dashboard-alert-head-type']").children('span').should('contain', 'TYPE')              //TYPE
        cy.get("th[data-testid = 'dashboard-alert-head-date']").children('h6').should('contain', 'WAARSCHUWINGSDATUM')          //Alert Date
        cy.get("h6[data-testid = 'invitation-type-cell-invite']").should('contain', 'Cirkel uitnodiging')                //Type - circle invitation
        cy.get("button[data-testid = 'invitation-alert-menu-button-more']").click()
        cy.get("li[data-testid = 'email-founder']").should('contain', 'Om oprichter te e-mailen')                                  //More options - Email founder
        cy.get("li[data-testid = 'accept']").should('contain', 'Accepteren')                                                //More options - Accept
        cy.get("li[data-testid = 'decline']").should('contain', 'Afwijzen')                                              //More options - Decline

        cy.get("h6[data-testid = 'outlier-alert-delegate-email']").should('contain', 'Patiënt ID')                      //Source- Patient ID
        cy.get("h6[data-testid = 'outlier-type-cell-title']").should('contain', 'Uitbijter gedetecteerd')                     // Type - Outlier detected
        cy.get("p[data-testid = 'outlier-type-cell-lower-fence']").should('contain', 'Ondergrens')                     //Type - Lower limit
        cy.get("p[data-testid = 'outlier-type-cell-upper-fence']").should('contain', 'Bovengrens')                     //Type - Upper limit

        cy.reload()

        cy.get("button[data-testid = 'outlier-alert-menu-button-more']", { "timeout": 10000 }).first().click()
        cy.get("li[data-testid = 'email-patient']").should('contain', 'Om patiënt te e-mailen')                                  //More options - Email patient
        cy.get("li[data-testid = 'dismiss']").should('contain', 'Verwijderen')                                              //Dismiss

    })

})