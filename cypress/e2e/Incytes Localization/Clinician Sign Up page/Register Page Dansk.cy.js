Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var register_link = 'https://alpha.incytesdata-dev.com/auth/register/'


describe('Register page localization DA ', function () {
    it("Check register page ", function () {
        cy.setCookie('languageAbbreviation', 'da')                                                      // Set cookie variable to change language
        cy.visit(register_link, {
            failOnStatusCode: false
        })
        cy.get("h1[data-testid = 'form-registration-title']").should('contain', 'Sundhedsudbyder tilmelder dig')                              // Head of form
        cy.get("div[data-testid = 'form-registration-first-name']").children('label').should('contain', 'Fornavn')             //First Name
        cy.get("div[data-testid = 'form-registration-last-name']").children('label').should('contain', 'Efternavn')                 //Last Name
        cy.get("div[data-testid = 'form-registration-email']").children('label').should('contain', 'E-mail')                        //Email
        cy.get("div[data-testid = 'jurisdiction-selector-formcontrol']").children('label').should('contain', 'PI-region')           //PI region
        cy.get("span[data-testid = 'form-registration-help-text']").should('contain', "Mindst 8 tegn, med mindst 1 store, 1 små og 1 tal.") //Password helper
        cy.get("div[data-testid = 'form-registration-password']").children('label').should('contain', 'Adgangskode')                  //Password
        cy.get("div[data-testid = 'form-registration-reentee']").children('label').should('contain', 'Bekræft adgangskode')           //Verify Password

        cy.get("input[name = 'firstName']").click()
        cy.get("input[name = 'lastName']").click()
        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("input[name = 'verifyPassword']").click()
        cy.get("input[type = 'checkbox']").check()


        cy.get("div[data-testid = 'form-registration-first-name']").children('p').should('contain', 'Påkrævet')                    //First name Required
        cy.get("div[data-testid = 'form-registration-last-name']").children('p').should('contain', 'Påkrævet')                      //Last name Required
        cy.get("div[data-testid = 'form-registration-email']").children('p').should('contain', 'Påkrævet')                          //Email Required
        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Påkrævet')                       //Password Required
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Påkrævet')                        //Verify pass Required

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'verifyPassword']").type('f')

        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Mindst 8 tegn. Skal indeholde mindst 1 store og små bogstaver, 1 nummer.')   //Password should contain ...
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Adgangskode skal være ens')                                                               //Password should match
   
        cy.get("a[href = 'https://www.clinician.rgnmed.com/support-post/incytes-tm-license-agreement']").should('contain', "-licensaftale")                                        //License agreement link
        
        cy.get("button[data-testid = 'form-registration-button-submit']").children('span').should('contain', "NÆSTE")                                                                   //Next Button

        cy.get("a[data-testid = 'form-registration-button-back']").children('span').should('contain', "HAR DU ALLEREDE EN BRUGER?")                                                       //Already have an account link
        
        
    })
})