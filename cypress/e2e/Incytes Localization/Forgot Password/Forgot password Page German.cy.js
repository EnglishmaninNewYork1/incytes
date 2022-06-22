Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var forgot_link = 'https://alpha.incytesdata-dev.com/auth/forgotPassword'


describe('Forgot password page localization DE ', function () {

    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'de')                                                                                          // Set cookie variable to change language
        cy.visit(forgot_link, {
            failOnStatusCode: false
        })
        
        cy.get("h1[class = 'MuiTypography-root MuiTypography-h1']").should('contain', 'Passwort vergessen')                                    // Head of form
        cy.get("div[data-testid = 'component-form-text-field']").children('label').should('contain', 'E-Mail*')                              //Email
        cy.get("a[href = '/auth/login']").should('contain', 'Zurück zur Anmeldung')                                                                //Back to login page
        cy.get("a[role = 'button']").should('contain', 'Registrieren')                                                                           // Sign Up Button
        cy.get("button[type = 'submit']").children('span').should('contain', 'Einreichen')                                                      // Submit button check

        cy.get("button[type = 'submit']").click()
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Erforderlich')              // Required label

        cy.get("input[name = 'email']").type('g')
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Ungültige E-Mail-Adresse') // Invalid email label

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+notregisteredinsystem@gmail.com')
        cy.get("button[type = 'submit']").click()
        cy.get("h6[data-testid = 'snackbar-text']").should('contain', "Diese E-Mail-Adresse ist nicht in unserem System registriert. Bitte versuchen Sie es erneut.")  // Not registered email in system check

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+testbbbbbnnn@gmail.com')
        cy.get("button[type = 'submit']").click()



        cy.get("h1[data-testid = 'confirm-forgot-password-title']", { "timeout": 10000 }).should('contain', 'Passwort zurücksetzen')                                     //Reset password modal name
        cy.get("h6[data-testid = 'confirm-forgot-password-success']").should('contain', 'Ein Bestätigungscode wurde erfolgreich an Ihre E-Mail gesendet. Bitte geben Sie den folgenden Code ein. Überprüfen Sie bei Bedarf auch den Spam-Ordner.') //Under Text

        cy.get("input[name = 'email']").should('have.attr', 'placeholder', 'E-Mail')
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', 'Zugangscode').click()
        cy.get("input[name = 'password']").should('have.attr', 'placeholder', 'Passwort').click()                                                       // Placeholders localization check
        cy.get("input[name = 'confirmPassword']").should('have.attr', 'placeholder', 'Passwort bestätigen').click()
        cy.get("input[name = 'code']").click()

        cy.get("div[data-testid = 'confirm-forgot-password-token']").children('p').should('contain', 'Erforderlich')
        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', 'Erforderlich')                                 //Reuqired label check under eeach input
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Erforderlich')

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'confirmPassword']").type('h')

        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', "Mindestens 8 Zeichen. Muss mindestens 1 Großbuchstabe, 1 Kleinbuchstabe, 1 Zahl enthalten.") // Password structure reminder
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Passwörter müssen übereinstimmen')                                                              // Password must match

        cy.get("a[data-testid = 'confirm-forgot-password-link-signin']").should('contain', "ZURÜCK ZUR ANMELDUNG")                                                                                 //Back to login link
        cy.get("button[data-testid = 'confirm-forgot-password-button-submit']").should('contain', "Passwort zurücksetzen")                                                                         //Reset password button
    })
})