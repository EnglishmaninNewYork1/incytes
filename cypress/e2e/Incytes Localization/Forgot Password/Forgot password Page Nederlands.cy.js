Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var forgot_link = 'https://alpha.incytesdata-dev.com/auth/forgotPassword'


describe('Forgot password page localization NL ', function () {

    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'nl')                                                                                          // Set cookie variable to change language
        cy.visit(forgot_link, {
            failOnStatusCode: false
        })
        
        cy.get("h1[class = 'MuiTypography-root MuiTypography-h1']").should('contain', 'Wachtwoord vergeten')                                    // Head of form
        cy.get("div[data-testid = 'component-form-text-field']").children('label').should('contain', 'E-mail*')                              //Email
        cy.get("a[href = '/auth/login']").should('contain', 'Terug naar Inloggen')                                                                //Back to login page
        cy.get("a[role = 'button']").should('contain', 'Registreren')                                                                           // Sign Up Button
        cy.get("button[type = 'submit']").children('span').should('contain', 'Verzenden')                                                      // Submit button check

        cy.get("button[type = 'submit']").click()
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Verplicht')              // Required label

        cy.get("input[name = 'email']").type('g')
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Ongeldig e-mailadres') // Invalid email label

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+notregisteredinsystem@gmail.com')
        cy.get("button[type = 'submit']").click()
        cy.get("h6[data-testid = 'snackbar-text']").should('contain', "Dat e-mailadres is niet geregistreerd in ons systeem, probeer het opnieuw.")  // Not registered email in system check

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+conditionalvisibilitytest@gmail.com')
        cy.get("button[type = 'submit']").click()



        cy.get("h1[data-testid = 'confirm-forgot-password-title']", { "timeout": 10000 }).should('contain', 'Wachtwoord opnieuw instellen')                                     //Reset password modal name
        cy.get("h6[data-testid = 'confirm-forgot-password-success']").should('contain', 'Er is met succes een verificatiecode naar uw e-mailadres verzonden. Vul a.u.b. onderstaande code in. Controleer indien nodig ook de spamfolder.') //Under Text

        cy.get("input[name = 'email']").should('have.attr', 'placeholder', 'E-mail')
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', 'Toegangscode').click()
        cy.get("input[name = 'password']").should('have.attr', 'placeholder', 'Wachtwoord').click()                                                       // Placeholders localization check
        cy.get("input[name = 'confirmPassword']").should('have.attr', 'placeholder', 'Bevestig wachtwoord').click()
        cy.get("input[name = 'code']").click()

        cy.get("div[data-testid = 'confirm-forgot-password-token']").children('p').should('contain', 'Verplicht')
        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', 'Verplicht')                                 //Reuqired label check under eeach input
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Verplicht')

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'confirmPassword']").type('h')

        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', "Minimaal 8 karakters. Moet minimaal 1 hoofdletter, 1 kleine letter, 1 cijfer bevatten.") // Password structure reminder
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Wachtwoorden moeten overeenkomen')                                                              // Password must match

        cy.get("a[data-testid = 'confirm-forgot-password-link-signin']").should('contain', "TERUG NAAR INLOGGEN")                                                                                 //Back to login link
        cy.get("button[data-testid = 'confirm-forgot-password-button-submit']").should('contain', "Wachtwoord opnieuw instellen")                                                                         //Reset password button
    })
})