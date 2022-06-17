Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'


describe('Sign in page localization FR ', function () {
    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'fr')
        cy.visit(login_link, {
            failOnStatusCode: false
            })
        cy.get("h1[data-testid = 'form-login-title']").should('contain', 'Se connecter')
        cy.get("div[data-testid = 'form-login-email']").children('label').should('contain', 'Email*')
        cy.get("div[data-testid = 'form-login-password']").children('label').should('contain', 'Mot de passe*')

        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("div[data-testid = 'form-login-email']").children('p').should('contain', 'Obligatoire')
        cy.get("input[name = 'email']").click()
        cy.get("div[data-testid = 'form-login-password']").children('p').should('contain', 'Obligatoire')

        cy.get("a[data-testid = 'form-login-button-forgot']").children('span').first().should('contain', 'Mot de passe oublié?')

        cy.get("div[data-testid = 'form-login-keep-label']").children('div').first().should('contain', 'Gardez-moi connecté')
        cy.get("div[data-testid = 'form-login-keep-label']").children('div').last().should('contain', 'Décochez si vous utilisez un appareil public')

        cy.get("a[data-testid = 'form-login-button-register']").children('span').first().should('contain', "S'INSCRIRE")
        cy.get("button[data-testid = 'form-login-button-login']").children('span').first().should('contain', 'SE CONNECTER')

        cy.get("input[name = 'email']").type('g')
        cy.get("input[name = 'password']").type('g')
        cy.get("button[data-testid = 'form-login-button-login']").click()
        cy.get("div[data-testid = 'snackbar-inner']").children('div').last().children('h6').should('contain', "Votre email ou mot de passe est incorrect, veuillez ressaisir. Les nouveaux utilisateurs doivent d'abord s'inscrire.")

    })
})