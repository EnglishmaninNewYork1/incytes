Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email_with_case = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_email_without_case = 'vitas.leschenko+localizationtestaccount@gmail.com'
var user_password = 'pacienT1'
var language_cookie_set = 'da'

describe('Incytes Navbar localization DA ', function () {

    it("Check Dashboard without outliers and Tasks ", function () {                 // CHECK PAGE WITHOUT TASK AND OUTLIERS

        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', language_cookie_set)                                                                                          // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
        })

        cy.get("input[name = 'email']").type(user_email_without_case)                                                                       // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()

        cy.get("h2[data-testid = 'personal-plan-title']", { "timeout": 10000 }).should('contain', 'Velkommen til inCytes!')                     // Head Title

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Mine opgaver')                                               //My tasks
        cy.get("h2[data-testid = 'dashboard-task-epmty-no-task']").should('contain', 'Ingen aktuelle opgaver.')                                    //No current tasks
        cy.get("p[data-testid = 'dashboard-task-epmty-desc']").should('contain', 'Opgaver kommer fra sager, så opgaven vises automatisk, når den er tildelt dig.') //Undertext
        cy.get("p[data-testid = 'dashboard-task-epmty-overdue']").should('contain', 'FORSINKET')                                               // Overdue
        cy.get("p[data-testid = 'dashboard-task-epmty-upcoming']").should('contain', 'KOMMENDE')                                            //Upcoming
        cy.get("p[data-testid = 'dashboard-task-epmty-completed']").should('contain', 'AFSLUTTET')                                          //Completed

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Mine advarsler')                                             //My alerts
        cy.get("h2[data-testid = 'dashboard-alert-empty-no-alert']").should('contain', 'Ingen aktuelle advarsler.')                                // No current Alerts
        cy.get("p[data-testid = 'dashboard-alert-empty-desc']").should('contain', "Sagsalarmer opstår, når en patients respons falder uden for et acceptabelt interval.")         // Undertext
        cy.get("p[data-testid = 'dashboard-alert-empty-ouliers']").should('contain', 'OUTLIERS')                                            //Outliers
        cy.get("p[data-testid = 'dashboard-alert-empty-phi-free']").should('contain', 'NON-PHI-CIRKLER')                                    // Non PHI circles
        cy.get("p[data-testid = 'dashboard-alert-empty-phi']").should('contain', 'PHI-CIRKLER')                                             //PHI Circles

        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'I alt patienter')                                       //Total Patients
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'I alt tilfælde')                                          //Total Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Åbn sager')                                           //Open Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Afsluttede sager')                                      //Completed Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Arkiverede sager')                                       //Archived cases
    })

    it("Check Dashboard WITH outliers and Tasks ", function () {                                        // CHECK PAGE WITH!!! TASK AND OUTLIERS
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
        cy.get("th[data-testid = 'task-head-case']", { "timeout": 10000 }).children('span').should('contain', 'PATIENT')                     //Patient
        cy.get("th[data-testid = 'task-head-survey']").children('span').should('contain', 'SAG')                       //Case
        cy.get("th[data-testid = 'task-head-survey-info']").children('span').should('contain', 'OPGAVE')                  //Task
        cy.get("th[data-testid = 'task-head-due']").children('span').should('contain', 'AFLEVERINGSDATO')                      //Due Date
        cy.get("th[data-testid = 'task-head-delegate']").children('span').should('contain', 'DELEGERET')                 //Delegate

        cy.get("p[data-testid = 'survey-alert-patient-cell-id']").should('contain', 'Patient-ID')                       //Patient ID
        cy.get("p[data-testid = 'survey-alert-case-cell-case-id']").should('contain', 'Sags-ID')                        //Case ID
        cy.get("div[data-testid = 'dashboard-survey-alert-cell']").children('p').should('contain', 'Opgave ID')           //Task ID
        cy.get("p[data-testid = 'dashboard-survey-alert-overdue-label']").should('contain', 'Forsinket')                  //Overdue
        cy.get("h6[data-testid = 'alert-delegate-cell-patient']").should('contain', 'Patient')                          //Delegate-patient
                                                                                                                                                    //MY ALERTS BLOCK  
        cy.get("th[data-testid = 'dashboard-alert-head-source']", { "timeout": 10000 }).children('span').should('contain', 'KILDE')          //SOURCE
        cy.get("th[data-testid = 'dashboard-alert-head-type']").children('span').should('contain', 'TYPE')              //TYPE
        cy.get("th[data-testid = 'dashboard-alert-head-date']").children('h6').should('contain', 'ADVARSELSDATO')          //Alert Date
        cy.get("h6[data-testid = 'invitation-type-cell-invite']").should('contain', 'Cirkelinvitation')                //Type - circle invitation
        cy.get("button[data-testid = 'invitation-alert-menu-button-more']").click()
        cy.get("li[data-testid = 'email-founder']").should('contain', 'E-mail-grundlægger')                                  //More options - Email founder
        cy.get("li[data-testid = 'accept']").should('contain', 'Acceptere')                                                //More options - Accept
        cy.get("li[data-testid = 'decline']").should('contain', 'Afvise')                                              //More options - Decline

        
        cy.get("h6[data-testid = 'outlier-type-cell-title']").should('contain', 'Outlier opdaget')                     // Type - Outlier detected
        cy.get("p[data-testid = 'outlier-type-cell-lower-fence']").should('contain', 'Nedre grænse')                     //Type - Lower limit
        cy.get("p[data-testid = 'outlier-type-cell-upper-fence']").should('contain', 'Øverste grænse')                     //Type - Upper limit

        cy.reload()

        cy.get("button[data-testid = 'outlier-alert-menu-button-more']", { "timeout": 15000 }).first().click()
        cy.get("li[data-testid = 'email-patient']").should('contain', 'E-mail patient')                                  //More options - Email patient
        cy.get("li[data-testid = 'dismiss']").should('contain', 'Afvise')                                              //Dismiss

    })

})