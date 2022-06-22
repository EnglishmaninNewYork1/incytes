Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var register_link = 'https://alpha.incytesdata-dev.com/auth/register/'


describe('Register page localization PL ', function () {
    it("Check register page ", function () {
        cy.setCookie('languageAbbreviation', 'pl')                                                      // Set cookie variable to change language
        cy.visit(register_link, {
            failOnStatusCode: false
        })
        cy.get("h1[data-testid = 'form-registration-title']").should('contain', 'Rejestracja dostawcy opieki zdrowotnej')                              // Head of form
        cy.get("div[data-testid = 'form-registration-first-name']").children('label').should('contain', 'Imię')             //First Name
        cy.get("div[data-testid = 'form-registration-last-name']").children('label').should('contain', 'Nazwisko')                 //Last Name
        cy.get("div[data-testid = 'form-registration-email']").children('label').should('contain', 'Email')                        //Email
        cy.get("div[data-testid = 'jurisdiction-selector-formcontrol']").children('label').should('contain', 'Kraj przechowywania danych')           //PI region
        cy.get("span[data-testid = 'form-registration-help-text']").should('contain', "Minimum 8 znaków, z co najmniej 1 wielką literą, 1 małą literą i 1 cyfrą.") //Password helper
        cy.get("div[data-testid = 'form-registration-password']").children('label').should('contain', 'Hasło')                  //Password
        cy.get("div[data-testid = 'form-registration-reentee']").children('label').should('contain', 'Zweryfikuj hasło')           //Verify Password

        cy.get("input[name = 'firstName']").click()
        cy.get("input[name = 'lastName']").click()
        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("input[name = 'verifyPassword']").click()
        cy.get("input[type = 'checkbox']").check()


        cy.get("div[data-testid = 'form-registration-first-name']").children('p').should('contain', 'Wymagane')                    //First name Required
        cy.get("div[data-testid = 'form-registration-last-name']").children('p').should('contain', 'Wymagane')                      //Last name Required
        cy.get("div[data-testid = 'form-registration-email']").children('p').should('contain', 'Wymagane')                          //Email Required
        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Wymagane')                       //Password Required
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Wymagane')                        //Verify pass Required

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'verifyPassword']").type('f')

        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', "Minimum 8 znaków. Musi zawierać co najmniej 1 wielką literę, 1 małą literę i 1 cyfrę.")   //Password should contain ...
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', "Hasło musi pasować")                                                               //Password should match
   
        cy.get("a[href = 'https://www.clinician.rgnmed.com/support-post/incytes-tm-license-agreement']").should('contain', "Umowa licencyjna")                                        //License agreement link
        
        cy.get("button[data-testid = 'form-registration-button-submit']").children('span').should('contain', "NASTĘPNY")                                                                   //Next Button

        cy.get("a[data-testid = 'form-registration-button-back']").children('span').should('contain', "POSIADASZ JUŻ KONTO?")                                                       //Already have an account link
        
        
    })
})