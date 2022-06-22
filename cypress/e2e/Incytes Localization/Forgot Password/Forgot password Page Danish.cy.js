Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var forgot_link = 'https://alpha.incytesdata-dev.com/auth/forgotPassword'


describe('Forgot password page localization DA ', function () {

    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'da')                                                                                          // Set cookie variable to change language
        cy.visit(forgot_link, {
            failOnStatusCode: false
        })
        
        cy.get("h1[class = 'MuiTypography-root MuiTypography-h1']").should('contain', 'Glemt adgangskode')                                    // Head of form
        cy.get("div[data-testid = 'component-form-text-field']").children('label').should('contain', 'E-mail*')                              //Email
        cy.get("a[href = '/auth/login']").should('contain', 'Tilbage til log-on')                                                                //Back to login page
        cy.get("a[role = 'button']").should('contain', 'Tilmelde')                                                                           // Sign Up Button
        cy.get("button[type = 'submit']").children('span').should('contain', 'Sende')                                                      // Submit button check

        cy.get("button[type = 'submit']").click()
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Påkrævet')              // Required label

        cy.get("input[name = 'email']").type('g')
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Ugyldig emailadresse') // Invalid email label

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+notregisteredinsystem@gmail.com')
        cy.get("button[type = 'submit']").click()
        cy.get("h6[data-testid = 'snackbar-text']").should('contain', "Denne e-mail-adresse er ikke registreret i vores system. Prøv igen.")  // Not registered email in system check

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+testbbbbbnnn@gmail.com')
        cy.get("button[type = 'submit']").click()



        cy.get("h1[data-testid = 'confirm-forgot-password-title']", { "timeout": 10000 }).should('contain', 'Nulstille adgangskode')                                     //Reset password modal name
        cy.get("h6[data-testid = 'confirm-forgot-password-success']").should('contain', 'En bekræftelseskode er sendt til din e-mail. Indtast koden nedenfor. Kontroller om nødvendigt også spam-mappen.') //Under Text

        cy.get("input[name = 'email']").should('have.attr', 'placeholder', 'E-mail')
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', 'Kodenøgle').click()
        cy.get("input[name = 'password']").should('have.attr', 'placeholder', 'Adgangskode').click()                                                       // Placeholders localization check
        cy.get("input[name = 'confirmPassword']").should('have.attr', 'placeholder', 'Bekræfte adgangskode').click()
        cy.get("input[name = 'code']").click()

        cy.get("div[data-testid = 'confirm-forgot-password-token']").children('p').should('contain', 'Påkrævet')
        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', 'Påkrævet')                                 //Reuqired label check under eeach input
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Påkrævet')

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'confirmPassword']").type('h')

        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', "Mindst 8 tegn. Skal indeholde mindst 1 store og små bogstaver, 1 nummer.") // Password structure reminder
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Adgangskode skal være ens')                                                              // Password must match

        cy.get("a[data-testid = 'confirm-forgot-password-link-signin']").should('contain', "TILBAGE TIL LOGON")                                                                                 //Back to login link
        cy.get("button[data-testid = 'confirm-forgot-password-button-submit']").should('contain', "Nulstille adgangskode")                                                                         //Reset password button
    })
})