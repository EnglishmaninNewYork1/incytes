Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email_with_case = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_email_without_case = 'vitas.leschenko+localizationtestaccount@gmail.com'
var user_password = 'pacienT1'


describe('Incytes Navbar localization EN ', function () {

    it("Check Dashboard without outliers and Tasks ", function () {                 // CHECK PAGE WITHOUT TASK AND OUTLIERS

        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', 'en')                                                                                          // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
        })

        cy.get("input[name = 'email']").type(user_email_without_case)                                                                       // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()

        cy.get("h2[data-testid = 'personal-plan-title']", { "timeout": 5000 }).should('contain', 'Welcome to inCytes!')                     // Head Title

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'My Tasks')                                               //My tasks
        cy.get("h2[data-testid = 'dashboard-task-epmty-no-task']").should('contain', 'No Current Tasks.')                                    //No current tasks
        cy.get("p[data-testid = 'dashboard-task-epmty-desc']").should('contain', 'Tasks come from Cases, so the task will appear automatically once it is assigned to you.') //Undertext
        cy.get("p[data-testid = 'dashboard-task-epmty-overdue']").should('contain', 'OVERDUE')                                               // Overdue
        cy.get("p[data-testid = 'dashboard-task-epmty-upcoming']").should('contain', 'UPCOMING')                                            //Upcoming
        cy.get("p[data-testid = 'dashboard-task-epmty-completed']").should('contain', 'COMPLETED')                                          //Completed

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'My Alerts')                                             //My alerts
        cy.get("h2[data-testid = 'dashboard-alert-empty-no-alert']").should('contain', 'No Current Alerts.')                                // No current Alerts
        cy.get("p[data-testid = 'dashboard-alert-empty-desc']").should('contain', "response falls outside of an acceptable range.")         // Undertext
        cy.get("p[data-testid = 'dashboard-alert-empty-ouliers']").should('contain', 'OUTLIERS')                                            //Outliers
        cy.get("p[data-testid = 'dashboard-alert-empty-phi-free']").should('contain', 'NON-PHI CIRCLES')                                    // Non PHI circles
        cy.get("p[data-testid = 'dashboard-alert-empty-phi']").should('contain', 'PHI CIRCLES')                                             //PHI Circles

        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Total Patients')                                       //Total Patients
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Total Cases')                                          //Total Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Open Cases')                                           //Open Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Completed Cases')                                      //Completed Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Archived Cases')                                       //Archived cases
    })

    it("Check Dashboard WITH outliers and Tasks ", function () {                                        // CHECK PAGE WITH!!! TASK AND OUTLIERS
        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', 'en')                                                                                  // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false,
            'timeout':10000
        })
        cy.get("input[name = 'email']").type(user_email_with_case)                                                                // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()
                                                                                                                                                    // MY TASKS BLOCK
        cy.get("th[data-testid = 'task-head-case']").children('span').should('contain', 'PATIENT')                     //Patient                    
        cy.get("th[data-testid = 'task-head-survey']").children('span').should('contain', 'CASE')                       //Case
        cy.get("th[data-testid = 'task-head-survey-info']").children('span').should('contain', 'TASK')                  //Task
        cy.get("th[data-testid = 'task-head-due']").children('span').should('contain', 'DUE DATE')                      //Due Date
        cy.get("th[data-testid = 'task-head-delegate']").children('span').should('contain', 'DELEGATE')                 //Delegate

        cy.get("p[data-testid = 'survey-alert-patient-cell-id']").should('contain', 'Patient ID')                       //Patient ID
        cy.get("p[data-testid = 'survey-alert-case-cell-case-id']").should('contain', 'Case ID')                        //Case ID
        cy.get("div[data-testid = 'dashboard-survey-alert-cell']").children('p').should('contain', 'Task ID')           //Task ID
        cy.get("p[data-testid = 'dashboard-survey-alert-overdue-label']").should('contain', 'Overdue')                  //Overdue
        cy.get("h6[data-testid = 'alert-delegate-cell-patient']").should('contain', 'Patient')                          //Delegate-patient
                                                                                                                                                    //MY ALERTS BLOCK  
        cy.get("th[data-testid = 'dashboard-alert-head-source']").children('span').should('contain', 'SOURCE')          //SOURCE
        cy.get("th[data-testid = 'dashboard-alert-head-type']").children('span').should('contain', 'TYPE')              //TYPE
        cy.get("th[data-testid = 'dashboard-alert-head-date']").children('h6').should('contain', 'ALERT DATE')          //Alert Date
        cy.get("h6[data-testid = 'invitation-type-cell-invite']").should('contain', 'Circle Invitation')                //Type - circle invitation
        cy.get("button[data-testid = 'invitation-alert-menu-button-more']").click()
        cy.get("li[data-testid = 'email-founder']").should('contain', 'Email Founder')                                  //More options - Email founder
        cy.get("li[data-testid = 'accept']").should('contain', 'Accept')                                                //More options - Accept
        cy.get("li[data-testid = 'decline']").should('contain', 'Decline')                                              //More options - Decline

        cy.get("h6[data-testid = 'outlier-alert-delegate-email']").should('contain', 'Patient ID')                      //Source- Patient ID
        cy.get("h6[data-testid = 'outlier-type-cell-title']").should('contain', 'Outlier Detected')                     // Type - Outlier detected
        cy.get("p[data-testid = 'outlier-type-cell-lower-fence']").should('contain', 'Lower limit')                     //Type - Lower limit
        cy.get("p[data-testid = 'outlier-type-cell-upper-fence']").should('contain', 'Upper limit')                     //Type - Upper limit

        cy.reload()

        cy.get("button[data-testid = 'outlier-alert-menu-button-more']").first().click()
        cy.get("li[data-testid = 'email-patient']").should('contain', 'Email Patient')                                  //More options - Email patient
        cy.get("li[data-testid = 'dismiss']").should('contain', 'Dismiss')                                              //Dismiss

    })

})