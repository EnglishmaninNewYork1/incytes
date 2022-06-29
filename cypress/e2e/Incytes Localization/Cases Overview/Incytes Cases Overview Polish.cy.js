Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_password = 'pacienT1'
var language_cookie_set = 'pl'

describe('Incytes Case Overview localization PL ', function () {

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
        cy.get("h1[data-testid = 'cases-page-header']", { "timeout": 10000 }).should('contain', 'Przegląd przypadku')                            // Head Title

        cy.get("div[data-testid = 'searchbar-input']").children('input').should('have.attr', 'placeholder', 'Szukaj')                                                                         //Search placeholder
        cy.get("p[data-testid = 'searchbar-message']").should('contain', "Szukaj ID przypadku, ID pacjenta, nazwisko pacjenta, e-mail, protokołu lub nazwę społeczności")                                    //Search help text
        cy.get("button[data-testid = 'add-case-button']").children('span').should('contain', 'DODAĆ PRZYPADEK')                                     //Add case button

        cy.get("div[data-testid = 'cases-filter-select']").click()
        
        cy.get("li[id = '0']").should('contain', 'Wszystkie przypadki')                                                                               //Dropdown - All cases
        cy.get("li[id = '1']").should('contain', 'W toku')                                                                             //Dropdown - In Progress
        cy.get("li[id = '2']").should('contain', 'Zakończony')                                                                               //Dropdown - Completed

        cy.reload()

        cy.get("th[data-testid = 'case-header-patient-name']").children('span').children('span').should('contain', 'PACJENT')                                             //Patient
        cy.get("th[data-testid = 'case-header-protocol-name']").children('span').children('span').should('contain', 'PRZYPADEK')                                               //Case
        cy.get("th[data-testid = 'case-header-birth-date']").children('span').children('span').should('contain', 'DATA URODZENIA')                                         //Date of birth
        cy.get("th[data-testid = 'case-header-treatment']").children('span').children('span').should('contain', 'POCZĄTEK PRZYPADKU')                                      //Case Commencement
        cy.get("th[data-testid = 'case-header-modified']").children('span').children('span').should('contain', 'ZAKTUALIZOWANO')                                                 //Updated
        cy.get("th[data-testid = 'case-header-percent']").children('span').children('span').should('contain', 'POSTĘP')                                                 //Progress

        cy.get("h6[data-testid = 'case-cell-protocol']").should('contain', 'ID pacjenta')                                                    //Patient ID
        cy.get("h6[data-testid = 'survey-status-cell']").should('contain', 'wypełnionych ankiet')                                             //Surveys completed
        cy.get("button[aria-label = 'more']").first().click()

        cy.get("li[data-testid = 'close-menu-item']").should('contain', 'Zakończyć')                                                    // More- Complete case
        cy.get("li[data-testid = 'update-case-menu-item']").should('contain', 'Edytować przypadek')                                                  // More- Edit case

        cy.reload()
        cy.get("button[aria-label = 'more']").last().click()

        cy.get("li[data-testid = 'update-case-menu-item']").should('contain', 'Edytować przypadek')                                                   // Completed case - Edit case

    })

})