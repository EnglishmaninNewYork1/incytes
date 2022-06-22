Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var forgot_link = 'https://alpha.incytesdata-dev.com/auth/forgotPassword'


describe('Forgot password page localization EN ', function () {

    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'en')                                                                                          // Set cookie variable to change language
        cy.visit(forgot_link, {
            failOnStatusCode: false
        })
        
        cy.get("h1[class = 'MuiTypography-root MuiTypography-h1']").should('contain', 'Forgot Password')                                    // Head of form
        cy.get("div[data-testid = 'component-form-text-field']").children('label').should('contain', 'Email*')                              //Email
        cy.get("a[href = '/auth/login']").should('contain', 'Back to Login')                                                                //Back to login page
        cy.get("a[role = 'button']").should('contain', 'Sign Up')                                                                           // Sign Up Button
        cy.get("button[type = 'submit']").children('span').should('contain', 'Submit')                                                      // Submit button check

        cy.get("button[type = 'submit']").click()
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Required')              // Required label

        cy.get("input[name = 'email']").type('g')
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Invalid email address') // Invalid email label

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+notregisteredinsystem@gmail.com')
        cy.get("button[type = 'submit']").click()
        cy.get("h6[data-testid = 'snackbar-text']").should('contain', "That email address is not registered in our system, please try again.")  // Not registered email in system check

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+testbbbbbnnn@gmail.com')
        cy.get("button[type = 'submit']").click()



        cy.get("h1[data-testid = 'confirm-forgot-password-title']", {"timeout": 10000}).should('contain', 'Reset Password')                                     //Reset password modal name
        cy.get("h6[data-testid = 'confirm-forgot-password-success']").should('contain', 'A verification code has been successfully sent to your email. Please enter the code below. If necessary, please also check the spam folder.') //Under Text

        cy.get("input[name = 'email']").should('have.attr', 'placeholder', 'Email')
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', 'Access Code').click()                                                            // Placeholders localization check
        cy.get("input[name = 'password']").should('have.attr', 'placeholder', 'Password').click()
        cy.get("input[name = 'confirmPassword']").should('have.attr', 'placeholder', 'Confirm Password').click()
        cy.get("input[name = 'code']").click()

        cy.get("div[data-testid = 'confirm-forgot-password-token']").children('p').should('contain', 'Required')    
        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', 'Required')                                 //Reuqired label check under eeach input
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Required')

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'confirmPassword']").type('h')

        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', "8 characters minimum. Must contain at least 1 uppercase, 1 lowercase, 1 number.") // Password structure reminder
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Passwords must match')                                                              // Password must match

        cy.get("a[data-testid = 'confirm-forgot-password-link-signin']").should('contain', "BACK TO LOGIN")                                                                                 //Back to login link
        cy.get("button[data-testid = 'confirm-forgot-password-button-submit']").should('contain', "Reset Password")                                                                         //Reset password button
    })
})