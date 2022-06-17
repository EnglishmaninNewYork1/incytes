Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'


describe('Sign in page localization DE ', function () {
    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'de')
        cy.visit(login_link, {
            failOnStatusCode: false
            })
        cy.get("h1[data-testid = 'form-login-title']").should('contain', 'Einloggen')
        cy.get("div[data-testid = 'form-login-email']").children('label').should('contain', 'E-Mail*')
        cy.get("div[data-testid = 'form-login-password']").children('label').should('contain', "Passwort*")

        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("div[data-testid = 'form-login-email']").children('p').should('contain', 'Erforderlich')
        cy.get("input[name = 'email']").click()
        cy.get("div[data-testid = 'form-login-password']").children('p').should('contain', 'Erforderlich')

        cy.get("a[data-testid = 'form-login-button-forgot']").children('span').first().should('contain', 'Passwort vergessen?')

        cy.get("div[data-testid = 'form-login-keep-label']").children('div').first().should('contain', 'Halten Sie mich angemeldet')
        cy.get("div[data-testid = 'form-login-keep-label']").children('div').last().should('contain', 'Deaktivieren Sie diese Option, wenn Sie ein öffentliches Gerät verwenden')

        cy.get("a[data-testid = 'form-login-button-register']").children('span').first().should('contain', 'REGISTRIEREN')
        cy.get("button[data-testid = 'form-login-button-login']").children('span').first().should('contain', 'EINLOGGEN')

        cy.get("input[name = 'email']").type('g')
        cy.get("input[name = 'password']").type('g')
        cy.get("button[data-testid = 'form-login-button-login']").click()
        cy.get("div[data-testid = 'snackbar-inner']").children('div').last().children('h6').should('contain', 'Ihre E-Mail-Adresse und / oder Ihr Passwort sind falsch. Bitte versuchen Sie es erneut. Neue Benutzer müssen sich zuerst registrieren.')
    })
})