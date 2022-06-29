Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_password = 'pacienT1'
var language_cookie_set = 'da'

describe('Incytes Case Overview localization DA ', function () {

    it("Check Cases overview page ", function () {                 

        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', language_cookie_set)                                                                          // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
        })

        cy.get("input[name = 'email']").type(user_email)                                                                                    // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()

        cy.get("a[href = '/cases']", { "timeout": 10000 }).click()
        cy.get("h1[data-testid = 'cases-page-header']", { "timeout": 10000 }).should('contain', 'Sag Oversigt')                            // Head Title

        cy.get("div[data-testid = 'searchbar-input']").children('input').should('have.attr', 'placeholder', 'Søg')                                                                         //Search placeholder
        cy.get("p[data-testid = 'searchbar-message']").should('contain', "Søg på patient-ID, patientnavn, e-mail, sags-id, protokol eller cirkelnavn")                                    //Search help text
        cy.get("button[data-testid = 'add-case-button']").children('span').should('contain', 'TILFØJ SAG')                                     //Add case button

        cy.get("div[data-testid = 'cases-filter-select']").click()
        
        cy.get("li[id = '0']").should('contain', 'Alle sager')                                                                               //Dropdown - All cases
        cy.get("li[id = '1']").should('contain', 'Igangværende')                                                                             //Dropdown - In Progress
        cy.get("li[id = '2']").should('contain', 'Fuldført')                                                                               //Dropdown - Completed

        cy.reload()

        cy.get("th[data-testid = 'case-header-patient-name']").children('span').children('span').should('contain', 'PATIENT')                                             //Patient
        cy.get("th[data-testid = 'case-header-protocol-name']").children('span').children('span').should('contain', 'SAG')                                               //Case
        cy.get("th[data-testid = 'case-header-birth-date']").children('span').children('span').should('contain', 'FØDSELSDATO')                                         //Date of birth
        cy.get("th[data-testid = 'case-header-treatment']").children('span').children('span').should('contain', 'SAGSMEDDELELSE')                                      //Case Commencement
        cy.get("th[data-testid = 'case-header-modified']").children('span').children('span').should('contain', 'OPDATERET')                                                 //Updated
        cy.get("th[data-testid = 'case-header-percent']").children('span').children('span').should('contain', 'FREMSKRIDT')                                                 //Progress

        cy.get("h6[data-testid = 'case-cell-protocol']").should('contain', 'Patient-ID')                                                    //Patient ID
        cy.get("h6[data-testid = 'survey-status-cell']").should('contain', 'Undersøgelser fuldført')                                             //Surveys completed
        cy.get("button[aria-label = 'more']").first().click()

        cy.get("li[data-testid = 'close-menu-item']").should('contain', 'Komplet sag')                                                    // More- Complete case
        cy.get("li[data-testid = 'update-case-menu-item']").should('contain', 'Rediger sag')                                                  // More- Edit case

        cy.reload()
        cy.get("button[aria-label = 'more']").last().click()

        cy.get("li[data-testid = 'update-case-menu-item']").should('contain', 'Rediger sag')                                                   // Completed case - Edit case

    })

})