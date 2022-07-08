Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email_with_case = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_email_without_case = 'vitas.leschenko+localizationtestaccount@gmail.com'
var user_password = 'pacienT1'
var language_cookie_set = 'pl'

describe('Incytes Navbar localization PL ', function () {

    it("Check Dashboard without outliers and Tasks ", function () {                 // CHECK PAGE WITHOUT TASK AND OUTLIERS

        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', language_cookie_set)                                                                                          // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
        })

        cy.get("input[name = 'email']").type(user_email_without_case)                                                                       // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()

        cy.get("h2[data-testid = 'personal-plan-title']", { "timeout": 10000 }).should('contain', 'Witamy w inCytes!')                     // Head Title

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Moje zadania')                                               //My tasks
        cy.get("h2[data-testid = 'dashboard-task-epmty-no-task']").should('contain', 'Brak aktualnych zadań.')                                    //No current tasks
        cy.get("p[data-testid = 'dashboard-task-epmty-desc']").should('contain', 'Zadania są oparte na przypadkach, więc zadanie pojawi się automatycznie po przydzieleniu do Ciebie.') //Undertext
        cy.get("p[data-testid = 'dashboard-task-epmty-overdue']").should('contain', 'ZALEGŁY')                                               // Overdue
        cy.get("p[data-testid = 'dashboard-task-epmty-upcoming']").should('contain', 'NADCHODZĄCE')                                            //Upcoming
        cy.get("p[data-testid = 'dashboard-task-epmty-completed']").should('contain', 'ZAKOŃCZONY')                                          //Completed

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Moje alerty')                                             //My alerts
        cy.get("h2[data-testid = 'dashboard-alert-empty-no-alert']").should('contain', 'Brak aktualnych alertów.')                                // No current Alerts
        cy.get("p[data-testid = 'dashboard-alert-empty-desc']").should('contain', "Alerty o przypadkach pojawiają się, gdy odpowiedź pacjenta wykracza poza dopuszczalny zakres.")         // Undertext
        cy.get("p[data-testid = 'dashboard-alert-empty-ouliers']").should('contain', 'ODSTAJĄCE')                                            //Outliers
        cy.get("p[data-testid = 'dashboard-alert-empty-phi-free']").should('contain', 'SPOŁECZNOŚCI Z ZAMKNIĘTĄ INFORMACJĄ MEDYCZNĄ')                                    // Non PHI circles
        cy.get("p[data-testid = 'dashboard-alert-empty-phi']").should('contain', 'SPOŁECZNOŚCI Z OTWARTĄ INFORMACJĄ MEDYCZNĄ')                                             //PHI Circles

        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Wszystkich pacjentów')                                       //Total Patients
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Wszystkich przypadków')                                          //Total Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Otwarte przypadki')                                           //Open Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Zakończone przypadki')                                      //Completed Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Zarchiwizowane przypadki')                                       //Archived cases
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
        cy.get("th[data-testid = 'task-head-case']", { "timeout": 10000 }).children('span').should('contain', 'PACJENT')                     //Patient
        cy.get("th[data-testid = 'task-head-survey']").children('span').should('contain', 'PRZYPADEK')                       //Case
        cy.get("th[data-testid = 'task-head-survey-info']").children('span').should('contain', 'ZADANIE')                  //Task
        cy.get("th[data-testid = 'task-head-due']").children('span').should('contain', 'DATA UKOŃCZENIA')                      //Due Date
        cy.get("th[data-testid = 'task-head-delegate']").children('span').should('contain', 'DELEGOWAĆ')                 //Delegate

        cy.get("p[data-testid = 'survey-alert-patient-cell-id']").should('contain', 'ID pacjenta')                       //Patient ID
        cy.get("p[data-testid = 'survey-alert-case-cell-case-id']").should('contain', 'ID przypadku')                        //Case ID
        cy.get("div[data-testid = 'dashboard-survey-alert-cell']").children('p').should('contain', 'ID zadania')           //Task ID
        cy.get("p[data-testid = 'dashboard-survey-alert-overdue-label']").should('contain', 'Zaległy')                  //Overdue
        cy.get("h6[data-testid = 'alert-delegate-cell-patient']").should('contain', 'Pacjent')                          //Delegate-patient
                                                                                                                                                    //MY ALERTS BLOCK  
        cy.get("th[data-testid = 'dashboard-alert-head-source']", { "timeout": 10000 }).children('span').should('contain', 'ŹRÓDŁO')          //SOURCE
        cy.get("th[data-testid = 'dashboard-alert-head-type']").children('span').should('contain', 'TYP')              //TYPE
        cy.get("th[data-testid = 'dashboard-alert-head-date']").children('h6').should('contain', 'DATA ALERTU')          //Alert Date
        cy.get("h6[data-testid = 'invitation-type-cell-invite']").should('contain', 'Zaproszenie do Społeczności')                //Type - circle invitation
        cy.get("button[data-testid = 'invitation-alert-menu-button-more']").click()
        cy.get("li[data-testid = 'email-founder']").should('contain', 'Napisz do sponsora')                                  //More options - Email founder
        cy.get("li[data-testid = 'accept']").should('contain', 'Zaakceptować')                                                //More options - Accept
        cy.get("li[data-testid = 'decline']").should('contain', 'Odmówić')                                              //More options - Decline

        
        cy.get("h6[data-testid = 'outlier-type-cell-title']").should('contain', 'Wykryto odstający')                     // Type - Outlier detected
        cy.get("p[data-testid = 'outlier-type-cell-lower-fence']").should('contain', 'Dolny limit')                     //Type - Lower limit
        cy.get("p[data-testid = 'outlier-type-cell-upper-fence']").should('contain', 'Górny limit')                     //Type - Upper limit

        cy.reload()

        cy.get("button[data-testid = 'outlier-alert-menu-button-more']", { "timeout": 15000 }).first().click()
        cy.get("li[data-testid = 'email-patient']").should('contain', 'Napisz do pacjenta')                                  //More options - Email patient
        cy.get("li[data-testid = 'dismiss']").should('contain', 'Odrzucać')                                              //Dismiss

    })

})