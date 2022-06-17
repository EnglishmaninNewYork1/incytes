Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var register_link = 'https://alpha.incytesdata-dev.com/auth/register/'


describe('Register page localization FR ', function () {
    it("Check register page ", function () {
        cy.setCookie('languageAbbreviation', 'fr')                                                                                                      // Set cookie variable to change language
        cy.visit(register_link, {
            failOnStatusCode: false
        })
        cy.get("h1[data-testid = 'form-registration-title']").should('contain', 'Inscription du fournisseur de soins de santé')                             // Head of form
        cy.get("div[data-testid = 'form-registration-first-name']").children('label').should('contain', 'Prénom')                                       //First Name
        cy.get("div[data-testid = 'form-registration-last-name']").children('label').should('contain', 'Nom')                                      //Last Name
        cy.get("div[data-testid = 'form-registration-email']").children('label').should('contain', 'Email')                                //Email
        cy.get("div[data-testid = 'jurisdiction-selector-formcontrol']").children('label').should('contain', 'Région PI')                               //PI region
        cy.get("span[data-testid = 'form-registration-help-text']").should('contain', "8 caractères minimum, avec au moins 1 majuscule, 1 minuscule et 1 chiffre.")
        cy.get("div[data-testid = 'form-registration-password']").children('label').should('contain', 'Mot de passe')                                     //Password
        cy.get("div[data-testid = 'form-registration-reentee']").children('label').should('contain', 'Vérifier le mot de passe')                            //Verify Password

        cy.get("input[name = 'firstName']").click()
        cy.get("input[name = 'lastName']").click()
        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("input[name = 'verifyPassword']").click()
        cy.get("input[type = 'checkbox']").check()


        cy.get("div[data-testid = 'form-registration-first-name']").children('p').should('contain', 'Obligatoire')                                    //First name Required
        cy.get("div[data-testid = 'form-registration-last-name']").children('p').should('contain', 'Obligatoire')                                     //Last name Required
        cy.get("div[data-testid = 'form-registration-email']").children('p').should('contain', 'Obligatoire')                                         //Email Required
        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Obligatoire')                                      //Password Required
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Obligatoire')                                       //Verify pass Required

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'verifyPassword']").type('f')

        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', "8 caractères minimum. Doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre.")   //Password should contain ...
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Les mots de passe doivent correspondre')                                                        //Password should match
   
        cy.get("a[href = 'https://www.clinician.rgnmed.com/support-post/incytes-tm-license-agreement']").should('contain', "Contrat de licence inCytes")                               //License agreement link
        
        cy.get("button[data-testid = 'form-registration-button-submit']").children('span').should('contain', "PROCHAIN")                                                                   //Next Button

        cy.get("a[data-testid = 'form-registration-button-back']").children('span').should('contain', "VOUS AVEZ DÉJÀ UN COMPTE?")                                                             //Already have an account link
        
        
    })
})