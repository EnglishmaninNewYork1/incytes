Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'


describe('Sign in page localization EN ', function () {
    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'en')                                                      // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
            })
        cy.get("h1[data-testid = 'form-login-title']").should('contain', 'Sign In')                                         // Head of form
        cy.get("div[data-testid = 'form-login-email']").children('label').should('contain', 'Email*')                    //Email
        cy.get("div[data-testid = 'form-login-password']").children('label').should('contain', 'Password*')                 //Password

        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("div[data-testid = 'form-login-email']").children('p').should('contain', 'Required')                              //Required email field
        cy.get("input[name = 'email']").click()
        cy.get("div[data-testid = 'form-login-password']").children('p').should('contain', 'Required')                          //Required password field

        cy.get("a[data-testid = 'form-login-button-forgot']").children('span').first().should('contain', 'Forgot Your Password?')   // Forgot password?

        cy.get("div[data-testid = 'form-login-keep-label']").children('div').first().should('contain', 'Keep me signed in')             // Keep me logged in
        cy.get("div[data-testid = 'form-login-keep-label']").children('div').last().should('contain', 'Uncheck if using a public device')

        cy.get("a[data-testid = 'form-login-button-register']").children('span').first().should('contain', 'SIGN UP')                        // Sign up
        cy.get("button[data-testid = 'form-login-button-login']").children('span').first().should('contain', 'SIGN IN')                       // Sign in

        cy.get("input[name = 'email']").type('g')
        cy.get("input[name = 'password']").type('g')
        cy.get("button[data-testid = 'form-login-button-login']").click()
        cy.get("div[data-testid = 'snackbar-inner']").children('div').last().children('h6').should('contain', 'Your email and/or password is incorrect, please try again. New users must first sign up.') //Incorrect email/password error
    })
})