Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var register_link = 'https://alpha.incytesdata-dev.com/auth/register/'


describe('Register page localization IT ', function () {
    it("Check register page ", function () {
        cy.setCookie('languageAbbreviation', 'it')                                                                                                      // Set cookie variable to change language
        cy.visit(register_link, {
            failOnStatusCode: false
        })
        cy.get("h1[data-testid = 'form-registration-title']").should('contain', "Registrati per l'operatore sanitario")                             // Head of form
        cy.get("div[data-testid = 'form-registration-first-name']").children('label').should('contain', 'Nome')                                       //First Name
        cy.get("div[data-testid = 'form-registration-last-name']").children('label').should('contain', 'Cognome')                                      //Last Name
        cy.get("div[data-testid = 'form-registration-email']").children('label').should('contain', 'Email')                                //Email
        cy.get("div[data-testid = 'jurisdiction-selector-formcontrol']").children('label').should('contain', 'Regione PI')                               //PI region
        cy.get("span[data-testid = 'form-registration-help-text']").should('contain', "Minimo 8 caratteri, con almeno 1 maiuscolo, 1 minuscolo e 1 numero.")
        cy.get("div[data-testid = 'form-registration-password']").children('label').should('contain', 'Password')                                     //Password
        cy.get("div[data-testid = 'form-registration-reentee']").children('label').should('contain', 'Verificare il Password')                            //Verify Password

        cy.get("input[name = 'firstName']").click()
        cy.get("input[name = 'lastName']").click()
        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("input[name = 'verifyPassword']").click()
        cy.get("input[type = 'checkbox']").check()


        cy.get("div[data-testid = 'form-registration-first-name']").children('p').should('contain', 'Necessario')                                    //First name Required
        cy.get("div[data-testid = 'form-registration-last-name']").children('p').should('contain', 'Necessario')                                     //Last name Required
        cy.get("div[data-testid = 'form-registration-email']").children('p').should('contain', 'Necessario')                                         //Email Required
        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Necessario')                                      //Password Required
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Necessario')                                       //Verify pass Required

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'verifyPassword']").type('f')

        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', "Minimo 8 caratteri. Deve contenere almeno 1 maiuscolo, 1 minuscolo e 1 numero.")   //Password should contain ...
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Le password devono essere identiche')                                                 //Password should match
   
        cy.get("a[href = 'https://www.clinician.rgnmed.com/support-post/incytes-tm-license-agreement']").should('contain', "Contratto di licenza inCytes")                               //License agreement link
        
        cy.get("button[data-testid = 'form-registration-button-submit']").children('span').should('contain', "IL PROSSIMO")                                                                   //Next Button

        cy.get("a[data-testid = 'form-registration-button-back']").children('span').should('contain', "HAI GIÀ UN ACCOUNT?")                                                             //Already have an account link
        
        
    })
})