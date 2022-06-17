Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var register_link = 'https://alpha.incytesdata-dev.com/auth/register/'


describe('Register page localization SP ', function () {
    it("Check register page ", function () {
        cy.setCookie('languageAbbreviation', 'es')                                                                                                      // Set cookie variable to change language
        cy.visit(register_link, {
            failOnStatusCode: false
        })
        cy.get("h1[data-testid = 'form-registration-title']").should('contain', 'Registro de proveedor de atención médica')                             // Head of form
        cy.get("div[data-testid = 'form-registration-first-name']").children('label').should('contain', 'Nombre')                                       //First Name
        cy.get("div[data-testid = 'form-registration-last-name']").children('label').should('contain', 'Apellido')                                      //Last Name
        cy.get("div[data-testid = 'form-registration-email']").children('label').should('contain', 'Correo Electrónico')                                //Email
        cy.get("div[data-testid = 'jurisdiction-selector-formcontrol']").children('label').should('contain', 'Región PI')                               //PI region
        cy.get("span[data-testid = 'form-registration-help-text']").should('contain', "Mínimo 8 caracteres, con al menos 1 mayúscula, 1 minúscula y 1 número.")
        cy.get("div[data-testid = 'form-registration-password']").children('label').should('contain', 'Contraseña')                                     //Password
        cy.get("div[data-testid = 'form-registration-reentee']").children('label').should('contain', 'Verificar Contraseña')                            //Verify Password

        cy.get("input[name = 'firstName']").click()
        cy.get("input[name = 'lastName']").click()
        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("input[name = 'verifyPassword']").click()
        cy.get("input[type = 'checkbox']").check()


        cy.get("div[data-testid = 'form-registration-first-name']").children('p').should('contain', 'Requerido')                                    //First name Required
        cy.get("div[data-testid = 'form-registration-last-name']").children('p').should('contain', 'Requerido')                                     //Last name Required
        cy.get("div[data-testid = 'form-registration-email']").children('p').should('contain', 'Requerido')                                         //Email Required
        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Requerido')                                      //Password Required
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Requerido')                                       //Verify pass Required

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'verifyPassword']").type('f')

        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Mínimo de 8 caracteres. Debe contener al menos 1 mayúscula, 1 minúscula, 1 número.')   //Password should contain ...
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Las contraseñas deben coincidir')                                                        //Password should match
   
        cy.get("a[href = 'https://www.clinician.rgnmed.com/support-post/incytes-tm-license-agreement']").should('contain', "Acuerdo de licencia de inCytes")                               //License agreement link
        
        cy.get("button[data-testid = 'form-registration-button-submit']").children('span').should('contain', "SIGUIENTE")                                                                   //Next Button

        cy.get("a[data-testid = 'form-registration-button-back']").children('span').should('contain', "¿YA TIENES UNA CUENTA?")                                                             //Already have an account link
        
        
    })
})