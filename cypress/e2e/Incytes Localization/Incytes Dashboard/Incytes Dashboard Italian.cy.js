Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email_with_case = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_email_without_case = 'vitas.leschenko+localizationtestaccount@gmail.com'
var user_password = 'pacienT1'


describe('Incytes Navbar localization IT ', function () {

    it("Check Dashboard without outliers and Tasks ", function () {                 // CHECK PAGE WITHOUT TASK AND OUTLIERS

        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', 'it')                                                                                          // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
        })

        cy.get("input[name = 'email']").type(user_email_without_case)                                                                       // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()

        cy.get("h2[data-testid = 'personal-plan-title']", { "timeout": 5000 }).should('contain', 'Benvenuto in inCytes!')                     // Head Title

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'I Miei Compiti')                                               //My tasks
        cy.get("h2[data-testid = 'dashboard-task-epmty-no-task']").should('contain', 'Nessun Compito Corrente.')                                    //No current tasks
        cy.get("p[data-testid = 'dashboard-task-epmty-desc']").should('contain', "Le attività provengono da casi, quindi l'attività verrà visualizzata automaticamente una volta assegnata a te.") //Undertext
        cy.get("p[data-testid = 'dashboard-task-epmty-overdue']").should('contain', 'IN RITARDO')                                               // Overdue
        cy.get("p[data-testid = 'dashboard-task-epmty-upcoming']").should('contain', 'PROSSIMI')                                            //Upcoming
        cy.get("p[data-testid = 'dashboard-task-epmty-completed']").should('contain', 'COMPLETATO')                                          //Completed

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'I Miei Avvisi')                                             //My alerts
        cy.get("h2[data-testid = 'dashboard-alert-empty-no-alert']").should('contain', 'Nessun Avviso Corrente.')                                // No current Alerts
        cy.get("p[data-testid = 'dashboard-alert-empty-desc']").should('contain', "Gli avvisi sui casi si verificano quando la risposta di un paziente non rientra in un intervallo accettabile.")         // Undertext
        cy.get("p[data-testid = 'dashboard-alert-empty-ouliers']").should('contain', 'VALORI ANOMALI')                                            //Outliers
        cy.get("p[data-testid = 'dashboard-alert-empty-phi-free']").should('contain', 'NON-PHI CIRCOLI')                                    // Non PHI circles
        cy.get("p[data-testid = 'dashboard-alert-empty-phi']").should('contain', 'PHI CIRCOLI')                                             //PHI Circles

        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Totale Pazienti')                                       //Total Patients
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Casi Totali')                                          //Total Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Casi Aperti')                                           //Open Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Casi Chiusi')                                      //Completed Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Casi archiviati')                                       //Archived cases
    })

    it("Check Dashboard WITH outliers and Tasks ", function () {                                        // CHECK PAGE WITH!!! TASK AND OUTLIERS
        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', 'it')                                                                                  // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false,
            'timeout':10000
        })
        cy.get("input[name = 'email']").type(user_email_with_case)                                                                // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()
                                                                                                                                                    // MY TASKS BLOCK
        cy.get("th[data-testid = 'task-head-case']").children('span').should('contain', 'PAZIENTE')                     //Patient
        cy.get("th[data-testid = 'task-head-survey']").children('span').should('contain', 'CASO')                       //Case
        cy.get("th[data-testid = 'task-head-survey-info']").children('span').should('contain', 'ATTIVITÀ')                  //Task
        cy.get("th[data-testid = 'task-head-due']").children('span').should('contain', 'SCADENZA')                      //Due Date
        cy.get("th[data-testid = 'task-head-delegate']").children('span').should('contain', 'DELEGARE')                 //Delegate

        cy.get("p[data-testid = 'survey-alert-patient-cell-id']").should('contain', 'ID paziente')                       //Patient ID
        cy.get("p[data-testid = 'survey-alert-case-cell-case-id']").should('contain', 'ID caso')                        //Case ID
        cy.get("div[data-testid = 'dashboard-survey-alert-cell']").children('p').should('contain', 'ID attività')           //Task ID
        cy.get("p[data-testid = 'dashboard-survey-alert-overdue-label']").should('contain', 'In Ritardo')                  //Overdue
        cy.get("h6[data-testid = 'alert-delegate-cell-patient']").should('contain', 'Paziente')                          //Delegate-patient
                                                                                                                                                    //MY ALERTS BLOCK  
        cy.get("th[data-testid = 'dashboard-alert-head-source']", { "timeout": 10000 }).children('span').should('contain', 'FONTE')          //SOURCE
        cy.get("th[data-testid = 'dashboard-alert-head-type']").children('span').should('contain', 'GENERE')              //TYPE
        cy.get("th[data-testid = 'dashboard-alert-head-date']").children('h6').should('contain', 'DATA DI AVVISO')          //Alert Date
        cy.get("h6[data-testid = 'invitation-type-cell-invite']").should('contain', 'Invito al Circolo')                //Type - circle invitation
        cy.get("button[data-testid = 'invitation-alert-menu-button-more']").click()
        cy.get("li[data-testid = 'email-founder']").should('contain', "Inviare un'email al Fondatore")                                  //More options - Email founder
        cy.get("li[data-testid = 'accept']").should('contain', 'Accettare')                                                //More options - Accept
        cy.get("li[data-testid = 'decline']").should('contain', 'Declinare')                                              //More options - Decline

        cy.get("h6[data-testid = 'outlier-alert-delegate-email']").should('contain', 'ID paziente')                      //Source- Patient ID
        cy.get("h6[data-testid = 'outlier-type-cell-title']").should('contain', 'Outlier Rilevato')                     // Type - Outlier detected
        cy.get("p[data-testid = 'outlier-type-cell-lower-fence']").should('contain', 'Limite inferiore')                     //Type - Lower limit
        cy.get("p[data-testid = 'outlier-type-cell-upper-fence']").should('contain', 'Limite superiore')                     //Type - Upper limit

        cy.reload()

        cy.get("button[data-testid = 'outlier-alert-menu-button-more']").first().click()
        cy.get("li[data-testid = 'email-patient']").should('contain', "Invia un'email al Paziente")                                  //More options - Email patient
        cy.get("li[data-testid = 'dismiss']").should('contain', 'Respingere')                                              //Dismiss

    })

})