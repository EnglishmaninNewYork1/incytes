Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var forgot_link = 'https://alpha.incytesdata-dev.com/auth/forgotPassword'


describe('Forgot password page localization IT ', function () {

    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'it')                                                                                          // Set cookie variable to change language
        cy.visit(forgot_link, {
            failOnStatusCode: false
        })
        
        cy.get("h1[class = 'MuiTypography-root MuiTypography-h1']").should('contain', 'Ha dimenticato la password')                                    // Head of form
        cy.get("div[data-testid = 'component-form-text-field']").children('label').should('contain', 'Email*')                              //Email
        cy.get("a[href = '/auth/login']").should('contain', 'Torna al Login')                                                                //Back to login page
        cy.get("a[role = 'button']").should('contain', "Registrarsi")                                                                           // Sign Up Button
        cy.get("button[type = 'submit']").children('span').should('contain', 'Invia')                                                      // Submit button check

        cy.get("button[type = 'submit']").click()
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Necessario')              // Required label

        cy.get("input[name = 'email']").type('g')
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Indirizzo email non valido') // Invalid email label

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+notregisteredinsystem@gmail.com')
        cy.get("button[type = 'submit']").click()
        cy.get("h6[data-testid = 'snackbar-text']").should('contain', "Non è stato possibile verificare quell'indirizzo e-mail, reinseriscilo.")  // Not registered email in system check

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+testbbbbbnnn@gmail.com')
        cy.get("button[type = 'submit']").click()



        cy.get("h1[data-testid = 'confirm-forgot-password-title']", { "timeout": 10000 }).should('contain', 'Resetta la Password')                                     //Reset password modal name
        cy.get("h6[data-testid = 'confirm-forgot-password-success']").should('contain', "Un codice di verifica è stato inviato con successo alla tua email. Per favore inserisci il codice qui sotto. Se necessario, controlla anche la cartella spam.") //Under Text

        cy.get("input[name = 'email']").should('have.attr', 'placeholder', 'Email')
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', "Codice d'accesso").click()                                                    //Placeholder localization check
        cy.get("input[name = 'password']").should('have.attr', 'placeholder', 'Password').click()
        cy.get("input[name = 'confirmPassword']").should('have.attr', 'placeholder', 'Conferma la Password').click()
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', "Codice d'accesso").click()

        cy.get("div[data-testid = 'confirm-forgot-password-token']").children('p').should('contain', 'Necessario')
        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', 'Necessario')                                 //Reuqired label check under eeach input
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Necessario')

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'confirmPassword']").type('h')

        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', "Minimo 8 caratteri. Deve contenere almeno 1 maiuscolo, 1 minuscolo e 1 numero.")  // Password structure reminder
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Le password devono essere identiche')                                                           // Password must match

        cy.get("a[data-testid = 'confirm-forgot-password-link-signin']").should('contain', "TORNA AL LOGIN")                                                                                  //Back to login link
        cy.get("button[data-testid = 'confirm-forgot-password-button-submit']").should('contain', "Reimposta la Password")                                                              //Reset password button
    })
})