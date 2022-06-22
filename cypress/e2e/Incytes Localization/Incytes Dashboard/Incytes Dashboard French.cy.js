Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email_with_case = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_email_without_case = 'vitas.leschenko+localizationtestaccount@gmail.com'
var user_password = 'pacienT1'


describe('Incytes Navbar localization FR ', function () {

    it("Check Dashboard without outliers and Tasks ", function () {                 // CHECK PAGE WITHOUT TASK AND OUTLIERS

        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', 'fr')                                                                                          // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
        })

        cy.get("input[name = 'email']").type(user_email_without_case)                                                                       // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()

        cy.get("h2[data-testid = 'personal-plan-title']", { "timeout": 10000 }).should('contain', 'Bienvenue chez inCytes!')                     // Head Title

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Mes tâches')                                               //My tasks
        cy.get("h2[data-testid = 'dashboard-task-epmty-no-task']").should('contain', 'Aucune tâche en cours.')                                    //No current tasks
        cy.get("p[data-testid = 'dashboard-task-epmty-desc']").should('contain', "Les tâches proviennent des cas, donc la tâche apparaîtra automatiquement une fois qu'elle vous sera assignée.") //Undertext
        cy.get("p[data-testid = 'dashboard-task-epmty-overdue']").should('contain', 'EN RETARD')                                               // Overdue
        cy.get("p[data-testid = 'dashboard-task-epmty-upcoming']").should('contain', 'A VENIR')                                            //Upcoming
        cy.get("p[data-testid = 'dashboard-task-epmty-completed']").should('contain', 'TERMINÉ')                                          //Completed

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Mes alertes')                                             //My alerts
        cy.get("h2[data-testid = 'dashboard-alert-empty-no-alert']").should('contain', 'Aucune alerte actuelle.')                                // No current Alerts
        cy.get("p[data-testid = 'dashboard-alert-empty-desc']").should('contain', "Les alertes de cas se produisent lorsque la réponse d'un patient se situe en dehors d'une plage acceptable.")         // Undertext
        cy.get("p[data-testid = 'dashboard-alert-empty-ouliers']").should('contain', 'VALEURS ABERRANTES')                                            //Outliers
        cy.get("p[data-testid = 'dashboard-alert-empty-phi-free']").should('contain', 'CERCLES NON-PHI')                                    // Non PHI circles
        cy.get("p[data-testid = 'dashboard-alert-empty-phi']").should('contain', 'CERCLES PHI')                                             //PHI Circles

        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Total des patients')                                       //Total Patients
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Nombre total de cas')                                          //Total Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Cas ouverts')                                           //Open Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Cas fermés')                                      //Completed Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Cas archivés')                                       //Archived cases
    })

    it("Check Dashboard WITH outliers and Tasks ", function () {                                        // CHECK PAGE WITH!!! TASK AND OUTLIERS
        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', 'fr')                                                                                  // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false,
            'timeout':10000
        })
        cy.get("input[name = 'email']").type(user_email_with_case)                                                                // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()
                                                                                                                                                    // MY TASKS BLOCK
        cy.get("th[data-testid = 'task-head-case']").children('span').should('contain', 'PATIENT')                     //Patient
        cy.get("th[data-testid = 'task-head-survey']").children('span').should('contain', 'CAS')                       //Case
        cy.get("th[data-testid = 'task-head-survey-info']").children('span').should('contain', 'TÂCHE')                  //Task
        cy.get("th[data-testid = 'task-head-due']").children('span').should('contain', "DATE D'ÉCHÉANCE")                      //Due Date
        cy.get("th[data-testid = 'task-head-delegate']").children('span').should('contain', 'DÉLÉGUER')                 //Delegate

        cy.get("p[data-testid = 'survey-alert-patient-cell-id']").should('contain', 'Patient ID')                       //Patient ID
        cy.get("p[data-testid = 'survey-alert-case-cell-case-id']").should('contain', 'Cas ID')                        //Case ID
        cy.get("div[data-testid = 'dashboard-survey-alert-cell']").children('p').should('contain', 'ID de tâche')           //Task ID
        cy.get("p[data-testid = 'dashboard-survey-alert-overdue-label']").should('contain', 'En retard')                  //Overdue
        cy.get("h6[data-testid = 'alert-delegate-cell-patient']").should('contain', 'Patient')                          //Delegate-patient
                                                                                                                                                    //MY ALERTS BLOCK  
        cy.get("th[data-testid = 'dashboard-alert-head-source']").children('span').should('contain', 'LA SOURCE')          //SOURCE
        cy.get("th[data-testid = 'dashboard-alert-head-type']").children('span').should('contain', 'TYPE')              //TYPE
        cy.get("th[data-testid = 'dashboard-alert-head-date']").children('h6').should('contain', "DATE D'ALERTE")          //Alert Date
        cy.get("h6[data-testid = 'invitation-type-cell-invite']").should('contain', 'Invitation au Cercle')                //Type - circle invitation
        cy.get("button[data-testid = 'invitation-alert-menu-button-more']").click()
        cy.get("li[data-testid = 'email-founder']").should('contain', "Fondateur d'email")                                  //More options - Email founder
        cy.get("li[data-testid = 'accept']").should('contain', 'Accepter')                                                //More options - Accept
        cy.get("li[data-testid = 'decline']").should('contain', 'Décliner')                                              //More options - Decline

        cy.get("h6[data-testid = 'outlier-alert-delegate-email']").should('contain', 'Patient ID')                      //Source- Patient ID
        cy.get("h6[data-testid = 'outlier-type-cell-title']").should('contain', 'Valeur aberrante détectée')                     // Type - Outlier detected
        cy.get("p[data-testid = 'outlier-type-cell-lower-fence']").should('contain', 'Limite inférieure')                     //Type - Lower limit
        cy.get("p[data-testid = 'outlier-type-cell-upper-fence']").should('contain', 'Limite supérieure')                     //Type - Upper limit

        cy.reload()

        cy.get("button[data-testid = 'outlier-alert-menu-button-more']", {"timeout": 10000}).first().click()
        cy.get("li[data-testid = 'email-patient']").should('contain', 'Email de patient')                                  //More options - Email patient
        cy.get("li[data-testid = 'dismiss']").should('contain', 'Rejeter')                                              //Dismiss

    })

})