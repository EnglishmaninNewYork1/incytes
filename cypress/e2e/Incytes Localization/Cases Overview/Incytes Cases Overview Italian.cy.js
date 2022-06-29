Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_password = 'pacienT1'
var language_cookie_set = 'it'

describe('Incytes Case Overview localization IT ', function () {

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
        cy.get("h1[data-testid = 'cases-page-header']", { "timeout": 10000 }).should('contain', 'Panoramica del Caso')                            // Head Title

        cy.get("div[data-testid = 'searchbar-input']").children('input').should('have.attr', 'placeholder', 'Cerca')                                                                         //Search placeholder
        cy.get("p[data-testid = 'searchbar-message']").should('contain', "Cerca per ID paziente, nome del paziente, email, ID caso, protocollo o nome della cerchia")                                    //Search help text
        cy.get("button[data-testid = 'add-case-button']").children('span').should('contain', 'AGGIUNGI CASO')                                     //Add case button

        cy.get("div[data-testid = 'cases-filter-select']").click()
        
        cy.get("li[id = '0']").should('contain', 'Tutti i Casi')                                                                               //Dropdown - All cases
        cy.get("li[id = '1']").should('contain', 'In Corso')                                                                             //Dropdown - In Progress
        cy.get("li[id = '2']").should('contain', 'Completato')                                                                               //Dropdown - Completed

        cy.reload()

        cy.get("th[data-testid = 'case-header-patient-name']").children('span').children('span').should('contain', 'PAZIENTE')                                             //Patient
        cy.get("th[data-testid = 'case-header-protocol-name']").children('span').children('span').should('contain', 'CASO')                                               //Case
        cy.get("th[data-testid = 'case-header-birth-date']").children('span').children('span').should('contain', 'DATA DI NASCITA')                                         //Date of birth
        cy.get("th[data-testid = 'case-header-treatment']").children('span').children('span').should('contain', 'AVVIO DEL CASO')                                      //Case Commencement
        cy.get("th[data-testid = 'case-header-modified']").children('span').children('span').should('contain', 'AGGIORNATO')                                                 //Updated
        cy.get("th[data-testid = 'case-header-percent']").children('span').children('span').should('contain', 'PROGRESSO')                                                 //Progress

        cy.get("h6[data-testid = 'case-cell-protocol']").should('contain', 'ID paziente')                                                    //Patient ID
        cy.get("h6[data-testid = 'survey-status-cell']").should('contain', 'Sondaggi Completati')                                             //Surveys completed
        cy.get("button[aria-label = 'more']").first().click()

        cy.get("li[data-testid = 'close-menu-item']").should('contain', 'Caso Chiuso')                                                    // More- Complete case
        cy.get("li[data-testid = 'update-case-menu-item']").should('contain', 'Modifica Caso')                                                  // More- Edit case

        cy.reload()
        cy.get("button[aria-label = 'more']").last().click()

        cy.get("li[data-testid = 'update-case-menu-item']").should('contain', 'Modifica Caso')                                                   // Completed case - Edit case

    })

})