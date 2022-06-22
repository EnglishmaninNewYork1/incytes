Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var register_link = 'https://alpha.incytesdata-dev.com/auth/register/'


describe('Register page localization DE ', function () {
    it("Check register page ", function () {
        cy.setCookie('languageAbbreviation', 'de')                                                      // Set cookie variable to change language
        cy.visit(register_link, {
            failOnStatusCode: false
        })
        cy.get("h1[data-testid = 'form-registration-title']").should('contain', 'Arzt Anmeldung')                              // Head of form
        cy.get("div[data-testid = 'form-registration-first-name']").children('label').should('contain', 'Vorname')             //First Name
        cy.get("div[data-testid = 'form-registration-last-name']").children('label').should('contain', 'Nachname')                 //Last Name
        cy.get("div[data-testid = 'form-registration-email']").children('label').should('contain', 'E-Mail')                        //Email
        cy.get("div[data-testid = 'jurisdiction-selector-formcontrol']").children('label').should('contain', 'PI Region')           //PI region
        cy.get("span[data-testid = 'form-registration-help-text']").should('contain', "Mindestens 8 Zeichen, mit mindestens 1 Großbuchstaben, 1 Kleinbuchstaben und 1 Zahl.")
        cy.get("div[data-testid = 'form-registration-password']").children('label').should('contain', 'Passwort')                  //Password
        cy.get("div[data-testid = 'form-registration-reentee']").children('label').should('contain', 'Passwort bestätigen')           //Verify Password

        cy.get("input[name = 'firstName']").click()
        cy.get("input[name = 'lastName']").click()
        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("input[name = 'verifyPassword']").click()
        cy.get("input[type = 'checkbox']").check()


        cy.get("div[data-testid = 'form-registration-first-name']").children('p').should('contain', 'Erforderlich')                    //First name Required
        cy.get("div[data-testid = 'form-registration-last-name']").children('p').should('contain', 'Erforderlich')                      //Last name Required
        cy.get("div[data-testid = 'form-registration-email']").children('p').should('contain', 'Erforderlich')                          //Email Required
        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Erforderlich')                       //Password Required
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Erforderlich')                        //Verify pass Required

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'verifyPassword']").type('f')

        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Mindestens 8 Zeichen. Muss mindestens 1 Großbuchstabe, 1 Kleinbuchstabe, 1 Zahl enthalten.')   //Password should contain ...
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Passwörter müssen übereinstimmen')                                                               //Password should match
   
        cy.get("a[href = 'https://www.clinician.rgnmed.com/support-post/incytes-tm-license-agreement']").should('contain', "-Lizenzvereinbarung")                                        //License agreement link
        
        cy.get("button[data-testid = 'form-registration-button-submit']").children('span').should('contain', "WEITER")                                                                   //Next Button

        cy.get("a[data-testid = 'form-registration-button-back']").children('span').should('contain', "SIE HABEN BEREITS EIN KONTO?")                                                       //Already have an account link
        
        
    })
})