Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'


describe('Sign in page localization It ', function () {
    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'it')
        cy.visit(login_link, {
            failOnStatusCode: false
            })
        cy.get("h1[data-testid = 'form-login-title']").should('contain', 'Registrati')
        cy.get("div[data-testid = 'form-login-email']").children('label').should('contain', 'Email*')
        cy.get("div[data-testid = 'form-login-password']").children('label').should('contain', "Parola d'ordine*")

        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("div[data-testid = 'form-login-email']").children('p').should('contain', 'Necessario')
        cy.get("input[name = 'email']").click()
        cy.get("div[data-testid = 'form-login-password']").children('p').should('contain', 'Necessario')

        cy.get("a[data-testid = 'form-login-button-forgot']").children('span').first().should('contain', 'Hai dimenticato la password?')

        cy.get("div[data-testid = 'form-login-keep-label']").children('div').first().should('contain', 'Mantienimi connesso')
        cy.get("div[data-testid = 'form-login-keep-label']").children('div').last().should('contain', 'Deseleziona se utilizzi un dispositivo pubblico')

        cy.get("a[data-testid = 'form-login-button-register']").children('span').first().should('contain', 'ISCRIVITI')
        cy.get("button[data-testid = 'form-login-button-login']").children('span').first().should('contain', 'REGISTRATI')

        cy.get("input[name = 'email']").type('g')
        cy.get("input[name = 'password']").type('g')
        cy.get("button[data-testid = 'form-login-button-login']").click()
        cy.get("div[data-testid = 'snackbar-inner']").children('div').last().children('h6').should('contain', 'La tua email o la tua password non sono corrette, inserisci di nuovo. I nuovi utenti devono prima registrarsi.')
    })
})