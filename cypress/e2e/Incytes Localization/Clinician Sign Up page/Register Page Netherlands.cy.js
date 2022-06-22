Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var register_link = 'https://alpha.incytesdata-dev.com/auth/register/'


describe('Register page localization NL ', function () {
    it("Check register page ", function () {
        cy.setCookie('languageAbbreviation', 'nl')                                                                                      // Set cookie variable to change language
        cy.visit(register_link, {
            failOnStatusCode: false
        })
        cy.get("h1[data-testid = 'form-registration-title']").should('contain', 'Zorgverlener Registrerung')                            // Head of form
        cy.get("div[data-testid = 'form-registration-first-name']").children('label').should('contain', 'Voornaam')                     //First Name
        cy.get("div[data-testid = 'form-registration-last-name']").children('label').should('contain', 'Achternaam')                    //Last Name
        cy.get("div[data-testid = 'form-registration-email']").children('label').should('contain', 'E-mail')                            //Email
        cy.get("div[data-testid = 'jurisdiction-selector-formcontrol']").children('label').should('contain', 'PI-regio')                //PI region
        cy.get("span[data-testid = 'form-registration-help-text']").should('contain', "Minimaal 8 tekens, met minimaal 1 hoofdletter, 1 kleine letter en 1 cijfer.") //Password helper
        cy.get("div[data-testid = 'form-registration-password']").children('label').should('contain', 'Wachtwoord')                     //Password
        cy.get("div[data-testid = 'form-registration-reentee']").children('label').should('contain', 'Wachtwoord verifiëren')           //Verify Password

        cy.get("input[name = 'firstName']").click()
        cy.get("input[name = 'lastName']").click()
        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("input[name = 'verifyPassword']").click()
        cy.get("input[type = 'checkbox']").check()


        cy.get("div[data-testid = 'form-registration-first-name']").children('p').should('contain', 'Verplicht')                     //First name Required
        cy.get("div[data-testid = 'form-registration-last-name']").children('p').should('contain', 'Verplicht')                      //Last name Required
        cy.get("div[data-testid = 'form-registration-email']").children('p').should('contain', 'Verplicht')                          //Email Required
        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Verplicht')                       //Password Required
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Verplicht')                        //Verify pass Required

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'verifyPassword']").type('f')

        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', "Minimaal 8 karakters. Moet minimaal 1 hoofdletter, 1 kleine letter, 1 cijfer bevatten.")   //Password should contain ...
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', "Wachtwoorden moeten overeenkomen")                                                          //Password should match
   
        cy.get("a[href = 'https://www.clinician.rgnmed.com/support-post/incytes-tm-license-agreement']").should('contain', "-licentieovereenkomst")                                           //License agreement link
        
        cy.get("button[data-testid = 'form-registration-button-submit']").children('span').should('contain', "VOLGENDE")                                                                      //Next Button

        cy.get("a[data-testid = 'form-registration-button-back']").children('span').should('contain', "HEEFT U AL EEN ACCOUNT?")                                                              //Already have an account link
        
        
    })
})