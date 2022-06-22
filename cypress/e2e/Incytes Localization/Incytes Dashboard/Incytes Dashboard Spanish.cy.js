Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email_with_case = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_email_without_case = 'vitas.leschenko+localizationtestaccount@gmail.com'
var user_password = 'pacienT1'


describe('Incytes Navbar localization ES ', function () {

    it("Check Dashboard without outliers and Tasks ", function () {                 // CHECK PAGE WITHOUT TASK AND OUTLIERS

        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', 'es')                                                                                          // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
        })

        cy.get("input[name = 'email']").type(user_email_without_case)                                                                       // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()

        cy.get("h2[data-testid = 'personal-plan-title']", { "timeout": 5000 }).should('contain', '¡Bienvenido a inCytes!')                     // Head Title

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Mis tareas')                                               //My tasks
        cy.get("h2[data-testid = 'dashboard-task-epmty-no-task']").should('contain', 'Sin Tareas Actuales.')                                    //No current tasks
        cy.get("p[data-testid = 'dashboard-task-epmty-desc']").should('contain', 'Las Tareas provienen de Casos, por lo que la tarea aparecerá automáticamente una vez que se le asigne.') //Undertext
        cy.get("p[data-testid = 'dashboard-task-epmty-overdue']").should('contain', 'ATRASADO')                                               // Overdue
        cy.get("p[data-testid = 'dashboard-task-epmty-upcoming']").should('contain', 'PRÓXIMO')                                            //Upcoming
        cy.get("p[data-testid = 'dashboard-task-epmty-completed']").should('contain', 'TERMINADO')                                          //Completed

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Mis alertas')                                             //My alerts
        cy.get("h2[data-testid = 'dashboard-alert-empty-no-alert']").should('contain', 'Sin alertas actuales.')                                // No current Alerts
        cy.get("p[data-testid = 'dashboard-alert-empty-desc']").should('contain', "Las alertas de casos se producen cuando la respuesta de un paciente se encuentra fuera de un rango aceptable.")         // Undertext
        cy.get("p[data-testid = 'dashboard-alert-empty-ouliers']").should('contain', 'VALORES ATÍPICOS')                                            //Outliers
        cy.get("p[data-testid = 'dashboard-alert-empty-phi-free']").should('contain', 'CÍRCULOS NO PHI')                                    // Non PHI circles
        cy.get("p[data-testid = 'dashboard-alert-empty-phi']").should('contain', 'CÍRCULOS PHI')                                             //PHI Circles

        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Pacientes totales')                                       //Total Patients
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Casos totales')                                          //Total Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Casos abiertos')                                           //Open Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Casos cerrados')                                      //Completed Cases
        cy.get("p[data-testid = 'dashboard-stats-number-title']").should('contain', 'Casos archivados')                                       //Archived cases
    })

    it("Check Dashboard WITH outliers and Tasks ", function () {                                        // CHECK PAGE WITH!!! TASK AND OUTLIERS
        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', 'es')                                                                                  // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false,
            'timeout':10000
        })
        cy.get("input[name = 'email']").type(user_email_with_case)                                                                // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()
                                                                                                                                                    // MY TASKS BLOCK
        cy.get("th[data-testid = 'task-head-case']").children('span').should('contain', 'PACIENTE')                     //Patient
        cy.get("th[data-testid = 'task-head-survey']").children('span').should('contain', 'CASO')                       //Case
        cy.get("th[data-testid = 'task-head-survey-info']").children('span').should('contain', 'TAREA')                  //Task
        cy.get("th[data-testid = 'task-head-due']").children('span').should('contain', 'FECHA DE VENCIMIENTO')                      //Due Date
        cy.get("th[data-testid = 'task-head-delegate']").children('span').should('contain', 'DELEGAR')                 //Delegate

        cy.get("p[data-testid = 'survey-alert-patient-cell-id']").should('contain', 'ID del paciente')                       //Patient ID
        cy.get("p[data-testid = 'survey-alert-case-cell-case-id']").should('contain', 'ID del caso')                        //Case ID
        cy.get("div[data-testid = 'dashboard-survey-alert-cell']").children('p').should('contain', 'ID de tarea')           //Task ID
        cy.get("p[data-testid = 'dashboard-survey-alert-overdue-label']").should('contain', 'Atrasado')                  //Overdue
        cy.get("h6[data-testid = 'alert-delegate-cell-patient']").should('contain', 'Paciente')                          //Delegate-patient
                                                                                                                                                    //MY ALERTS BLOCK  
        cy.get("th[data-testid = 'dashboard-alert-head-source']").children('span').should('contain', 'FUENTE')          //SOURCE
        cy.get("th[data-testid = 'dashboard-alert-head-type']").children('span').should('contain', 'TIPO')              //TYPE
        cy.get("th[data-testid = 'dashboard-alert-head-date']").children('h6').should('contain', 'FECHA ENCUESTA')          //Alert Date
        cy.get("h6[data-testid = 'invitation-type-cell-invite']").should('contain', 'Invitación Circular')                //Type - circle invitation
        cy.get("button[data-testid = 'invitation-alert-menu-button-more']").click()
        cy.get("li[data-testid = 'email-founder']").should('contain', 'Fundador de correo electrónico')                                  //More options - Email founder
        cy.get("li[data-testid = 'accept']").should('contain', 'Aceptar')                                                //More options - Accept
        cy.get("li[data-testid = 'decline']").should('contain', 'Disminución')                                              //More options - Decline

        cy.get("h6[data-testid = 'outlier-alert-delegate-email']").should('contain', 'ID del paciente: P73MTB')                      //Source- Patient ID
        cy.get("h6[data-testid = 'outlier-type-cell-title']").should('contain', 'Outlier detectado')                     // Type - Outlier detected
        cy.get("p[data-testid = 'outlier-type-cell-lower-fence']").should('contain', 'Límite inferior')                     //Type - Lower limit
        cy.get("p[data-testid = 'outlier-type-cell-upper-fence']").should('contain', 'Limite superior')                     //Type - Upper limit

        cy.reload()

        cy.get("button[data-testid = 'outlier-alert-menu-button-more']").first().click()
        cy.get("li[data-testid = 'email-patient']").should('contain', 'Enviar correo electrónico')                                  //More options - Email patient
        cy.get("li[data-testid = 'dismiss']").should('contain', 'Descartar')                                              //Dismiss

    })

})