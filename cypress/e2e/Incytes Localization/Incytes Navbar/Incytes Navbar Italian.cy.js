Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email = 'vitas.leschenko+testclinician1@gmail.com'
var user_password = 'pacienT1'


describe('Incytes Navbar localization IT ', function () {
    it("Check Si ", function () {
        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', 'it')                                                      // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
        })
        cy.get("input[name = 'email']").type(user_email)                                                                // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()

        cy.get("p[data-testid = 'left-navigation-search-text']", { 'timeout': 5000 }).should('contain', 'Ricerca')       //Search
        cy.get("p[data-testid = 'left-navigation-add-case']").should('contain', 'Nuovo Caso')                             //New Case
        cy.get("a[href = '/dashboard']").children('p').should('contain', 'Pannello di Сontrollo')                                   //Dashboard
        cy.get("a[id = 'casesLink']").children('p').should('contain', 'Casi')                                          //Cases
        cy.get("a[id = 'mytasksLink']").children('p').should('contain', 'Attività')                                        //Tasks
        cy.get("a[href = '/reports']").children('p').should('contain', 'Rapporti')                                       //Reports
        cy.get("a[id = 'circlesLink']").children('p').should('contain', 'Circoli')                                      //Circles
        cy.get("a[id = 'patientsLink']").children('p').should('contain', 'Pazienti')                                    //Patients
        cy.get("div[data-testid = 'left-nav-button-schedule-demo']").children('div').children('div').children('p').should('contain', 'Supporto') //Support

        cy.get("a[data-testid = 'left-nav-button-account']").children('div').children('div').last().children('p').should('contain', 'Account') //Account
        cy.get("a[data-testid = 'left-nav-button-userprofile']").children('div').children('div').last().children('p').should('contain', 'Profilo') //Profile
        cy.get("div[data-testid = 'left-nav-button-logout']").children('div').children('div').last().children('p').should('contain', 'Disconnettersi') //Logout
    })
})