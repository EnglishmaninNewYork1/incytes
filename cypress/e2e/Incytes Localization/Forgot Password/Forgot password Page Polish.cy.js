Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var forgot_link = 'https://alpha.incytesdata-dev.com/auth/forgotPassword'


describe('Forgot password page localization PL ', function () {

    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'pl')                                                                                          // Set cookie variable to change language
        cy.visit(forgot_link, {
            failOnStatusCode: false
        })
        
        cy.get("h1[class = 'MuiTypography-root MuiTypography-h1']").should('contain', 'Zapomniałeś hasła')                                    // Head of form
        cy.get("div[data-testid = 'component-form-text-field']").children('label').should('contain', 'Email*')                              //Email
        cy.get("a[href = '/auth/login']").should('contain', 'Powrót do logowania')                                                                //Back to login page
        cy.get("a[role = 'button']").should('contain', 'Zapisać się')                                                                           // Sign Up Button
        cy.get("button[type = 'submit']").children('span').should('contain', 'Przesłać')                                                      // Submit button check

        cy.get("button[type = 'submit']").click()
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Wymagane')              // Required label

        cy.get("input[name = 'email']").type('g')
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Niepoprawny adres email') // Invalid email label

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+notregisteredinsystem@gmail.com')
        cy.get("button[type = 'submit']").click()
        cy.get("h6[data-testid = 'snackbar-text']").should('contain', "Ten adres e-mail nie jest zarejestrowany w naszym systemie, spróbuj ponownie.")  // Not registered email in system check

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+conditionalvisibilitytest@gmail.com')
        cy.get("button[type = 'submit']").click()



        cy.get("h1[data-testid = 'confirm-forgot-password-title']", { "timeout": 10000 }).should('contain', 'Zresetuj hasło')                                     //Reset password modal name
        cy.get("h6[data-testid = 'confirm-forgot-password-success']").should('contain', 'Kod weryfikacyjny został pomyślnie wysłany na Twój e-mail. Proszę wpisać kod poniżej. W razie potrzeby sprawdź również folder ze spamem.') //Under Text

        cy.get("input[name = 'email']").should('have.attr', 'placeholder', 'Email')
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', 'Kod dostępu').click()
        cy.get("input[name = 'password']").should('have.attr', 'placeholder', 'Hasło').click()                                                       // Placeholders localization check
        cy.get("input[name = 'confirmPassword']").should('have.attr', 'placeholder', 'Potwierdź hasło').click()
        cy.get("input[name = 'code']").click()

        cy.get("div[data-testid = 'confirm-forgot-password-token']").children('p').should('contain', 'Wymagane')
        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', 'Wymagane')                                 //Reuqired label check under eeach input
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Wymagane')

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'confirmPassword']").type('h')

        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', "Minimum 8 znaków. Musi zawierać co najmniej 1 wielką literę, 1 małą literę i 1 cyfrę.") // Password structure reminder
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Hasło musi pasować')                                                              // Password must match

        cy.get("a[data-testid = 'confirm-forgot-password-link-signin']").should('contain', "POWRÓT DO LOGOWANIA")                                                                                 //Back to login link
        cy.get("button[data-testid = 'confirm-forgot-password-button-submit']").should('contain', "Zresetuj hasło")                                                                         //Reset password button
    })
})