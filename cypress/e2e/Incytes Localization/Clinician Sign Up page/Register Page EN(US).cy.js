Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var register_link = 'https://alpha.incytesdata-dev.com/auth/register/'


describe('Register page localization EN ', function () {
    it("Check register page ", function () {
        cy.setCookie('languageAbbreviation', 'en')                                                      // Set cookie variable to change language
        cy.visit(register_link, {
            failOnStatusCode: false
        })
        cy.get("h1[data-testid = 'form-registration-title']").should('contain', 'Healthcare Provider Sign Up')                              // Head of form
        cy.get("div[data-testid = 'form-registration-first-name']").children('label').should('contain', 'First Name')             //First Name
        cy.get("div[data-testid = 'form-registration-last-name']").children('label').should('contain', 'Last Name')                 //Last Name
        cy.get("div[data-testid = 'form-registration-email']").children('label').should('contain', 'Email')                        //Email
        cy.get("div[data-testid = 'jurisdiction-selector-formcontrol']").children('label').should('contain', 'PI Region')           //PI region
        cy.get("span[data-testid = 'form-registration-help-text']").should('contain', "8 characters minimum, with at least 1 uppercase, 1 lowercase and 1 number.")
        cy.get("div[data-testid = 'form-registration-password']").children('label').should('contain', 'Password')                  //Password
        cy.get("div[data-testid = 'form-registration-reentee']").children('label').should('contain', 'Verify Password')           //Verify Password

        cy.get("input[name = 'firstName']").click()
        cy.get("input[name = 'lastName']").click()
        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("input[name = 'verifyPassword']").click()
        cy.get("input[type = 'checkbox']").check()


        cy.get("div[data-testid = 'form-registration-first-name']").children('p').should('contain', 'Required')                    //First name Required
        cy.get("div[data-testid = 'form-registration-last-name']").children('p').should('contain', 'Required')                      //Last name Required
        cy.get("div[data-testid = 'form-registration-email']").children('p').should('contain', 'Required')                          //Email Required
        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Required')                       //Password Required
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Required')                        //Verify pass Required

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'verifyPassword']").type('f')

        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', '8 characters minimum. Must contain at least 1 uppercase, 1 lowercase, 1 number.')   //Password should contain ...
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Passwords must match')                                                               //Password should match
   
        cy.get("a[href = 'https://www.clinician.rgnmed.com/support-post/incytes-tm-license-agreement']").should('contain', "License Agreement")                                        //License agreement link
        
        cy.get("button[data-testid = 'form-registration-button-submit']").children('span').should('contain', "NEXT")                                                                   //Next Button

        cy.get("a[data-testid = 'form-registration-button-back']").children('span').should('contain', "ALREADY HAVE AN ACCOUNT?")                                                       //Already have an account link
        
        
    })
})