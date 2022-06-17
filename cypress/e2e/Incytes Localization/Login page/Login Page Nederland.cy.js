Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'


describe('Sign in page localization NL ', function () {
    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'nl')                                                  // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
            })
        cy.get("h1[data-testid = 'form-login-title']").should('contain', 'Aanmelden')                             // Head of form
        cy.get("div[data-testid = 'form-login-email']").children('label').should('contain', 'E-mail*')             //Email
        cy.get("div[data-testid = 'form-login-password']").children('label').should('contain', "Wachtwoord*")           //Password

        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("div[data-testid = 'form-login-email']").children('p').should('contain', 'Verplicht')                  //Required email field
        cy.get("input[name = 'email']").click()
        cy.get("div[data-testid = 'form-login-password']").children('p').should('contain', 'Verplicht')               //Required password field

        cy.get("a[data-testid = 'form-login-button-forgot']").children('span').first().should('contain', 'Uw wachtwoord vergeten?')  // Forgot password?

        cy.get("div[data-testid = 'form-login-keep-label']").children('div').first().should('contain', 'Houd me aangemeld')        // Keep me logged in
        cy.get("div[data-testid = 'form-login-keep-label']").children('div').last().should('contain', 'Schakel het vinkje uit bij gebruik van een openbaar apparaat')

        cy.get("a[data-testid = 'form-login-button-register']").children('span').first().should('contain', 'REGISTREREN')                  // Sign up
        cy.get("button[data-testid = 'form-login-button-login']").children('span').first().should('contain', 'AANMELDEN')              // Sign in

        cy.get("input[name = 'email']").type('g')
        cy.get("input[name = 'password']").type('g')
        cy.get("button[data-testid = 'form-login-button-login']").click()
        cy.get("div[data-testid = 'snackbar-inner']").children('div').last().children('h6').should('contain', 'Uw e-mailadres en/of wachtwoord is onjuist, probeer het opnieuw. Nieuwe gebruikers moeten zich eerst registreren.') //Incorrect email/password error
    })
})