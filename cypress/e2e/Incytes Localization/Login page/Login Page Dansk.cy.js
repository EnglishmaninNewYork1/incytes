Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'


describe('Sign in page localization DA ', function () {
    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'da')
        cy.visit(login_link, {
            failOnStatusCode: false
            })
        cy.get("h1[data-testid = 'form-login-title']").should('contain', 'Logon')
        cy.get("div[data-testid = 'form-login-email']").children('label').should('contain', 'E-mail*')
        cy.get("div[data-testid = 'form-login-password']").children('label').should('contain', "Adgangskode*")

        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("div[data-testid = 'form-login-email']").children('p').should('contain', 'Påkrævet')
        cy.get("input[name = 'email']").click()
        cy.get("div[data-testid = 'form-login-password']").children('p').should('contain', 'Påkrævet')

        cy.get("a[data-testid = 'form-login-button-forgot']").children('span').first().should('contain', 'Glemt din adgangskode?')

        cy.get("div[data-testid = 'form-login-keep-label']").children('div').first().should('contain', 'Hold mig logget ind')
        cy.get("div[data-testid = 'form-login-keep-label']").children('div').last().should('contain', 'Fjern markeringen, hvis du bruger en offentlig enhed')

        cy.get("a[data-testid = 'form-login-button-register']").children('span').first().should('contain', 'TILMELDE')
        cy.get("button[data-testid = 'form-login-button-login']").children('span').first().should('contain', 'LOGON')

        cy.get("input[name = 'email']").type('g')
        cy.get("input[name = 'password']").type('g')
        cy.get("button[data-testid = 'form-login-button-login']").click()
        cy.get("div[data-testid = 'snackbar-inner']").children('div').last().children('h6').should('contain', 'Din e-mail og / eller adgangskode er forkert, prøv igen. Nye brugere skal først tilmelde sig.')
    })
})