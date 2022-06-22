Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email = 'vitas.leschenko+testclinician1@gmail.com'
var user_password = 'pacienT1'


describe('Incytes Navbar localization ES ', function () {
    it("Check Si ", function () {
        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', 'es')                                                      // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
        })
        cy.get("input[name = 'email']").type(user_email)                                                                // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()

        cy.get("p[data-testid = 'left-navigation-search-text']", { 'timeout': 5000 }).should('contain', 'Búsqueda')       //Search
        cy.get("p[data-testid = 'left-navigation-add-case']").should('contain', 'Nuevo Caso')                             //New Case
        cy.get("a[href = '/dashboard']").children('p').should('contain', 'Panel de Instrumentos')                                   //Dashboard
        cy.get("a[id = 'casesLink']").children('p').should('contain', 'Casos')                                          //Cases
        cy.get("a[id = 'mytasksLink']").children('p').should('contain', 'Tareas')                                        //Tasks
        cy.get("a[href = '/reports']").children('p').should('contain', 'Informes')                                       //Reports
        cy.get("a[id = 'circlesLink']").children('p').should('contain', 'Círculos')                                      //Circles
        cy.get("a[id = 'patientsLink']").children('p').should('contain', 'Pacientes')                                    //Patients
        cy.get("div[data-testid = 'left-nav-button-schedule-demo']").children('div').children('div').children('p').should('contain', 'Apoyo') //Support

        cy.get("a[data-testid = 'left-nav-button-account']").children('div').children('div').last().children('p').should('contain', 'Cuenta') //Account
        cy.get("a[data-testid = 'left-nav-button-userprofile']").children('div').children('div').last().children('p').should('contain', 'Administrar Perfil') //Profile
        cy.get("div[data-testid = 'left-nav-button-logout']").children('div').children('div').last().children('p').should('contain', 'Salir') //Logout
    })
})