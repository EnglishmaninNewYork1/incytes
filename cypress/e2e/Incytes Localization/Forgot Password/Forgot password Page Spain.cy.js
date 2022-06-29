Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var forgot_link = 'https://alpha.incytesdata-dev.com/auth/forgotPassword'


describe('Forgot password page localization ES ', function () {

    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'es')                                                                                          // Set cookie variable to change language
        cy.visit(forgot_link, {
            failOnStatusCode: false
        })
        
        cy.get("h1[class = 'MuiTypography-root MuiTypography-h1']").should('contain', 'Se te Olvidó tu Contraseña')                                    // Head of form
        cy.get("div[data-testid = 'component-form-text-field']").children('label').should('contain', 'Correo Electrónico*')                              //Email
        cy.get("a[href = '/auth/login']").should('contain', 'Atrás Para Iniciar Sesión')                                                                //Back to login page
        cy.get("a[role = 'button']").should('contain', 'Regístrate')                                                                           // Sign Up Button
        cy.get("button[type = 'submit']").children('span').should('contain', 'Enviar')                                                      // Submit button check

        cy.get("button[type = 'submit']").click()
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Requerido')              // Required label

        cy.get("input[name = 'email']").type('g')
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Dirección de correo electrónico inválida') // Invalid email label

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+notregisteredinsystem@gmail.com')
        cy.get("button[type = 'submit']").click()
        cy.get("h6[data-testid = 'snackbar-text']").should('contain', "No pudimos verificar esa dirección de correo electrónico. Vuelva a ingresar.")  // Not registered email in system check

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+conditionalvisibilitytest@gmail.com')
        cy.get("button[type = 'submit']").click()



        cy.get("h1[data-testid = 'confirm-forgot-password-title']", { "timeout": 10000 }).should('contain', 'Restablecer Contraseña')                                     //Reset password modal name
        cy.get("h6[data-testid = 'confirm-forgot-password-success']").should('contain', "Se ha enviado correctamente un código de verificación a su correo electrónico. Por favor, introduzca el código de abajo. Si es necesario, consulte también la carpeta de correo no deseado.") //Under Text

        cy.get("input[name = 'email']").should('have.attr', 'placeholder', 'Correo Electrónico')
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', 'Código de Acceso').click()                                                    //Placeholder localization check
        cy.get("input[name = 'password']").should('have.attr', 'placeholder', 'Contraseña').click()
        cy.get("input[name = 'confirmPassword']").should('have.attr', 'placeholder', 'Confirmar Contraseña').click()
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', 'Código de Acceso').click()

        cy.get("div[data-testid = 'confirm-forgot-password-token']").children('p').should('contain', 'Requerido')
        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', 'Requerido')                                 //Reuqired label check under eeach input
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Requerido')

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'confirmPassword']").type('h')

        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', "Mínimo de 8 caracteres. Debe contener al menos 1 mayúscula, 1 minúscula, 1 número.")  // Password structure reminder
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Las contraseñas deben coincidir')                                                                  // Password must match

        cy.get("a[data-testid = 'confirm-forgot-password-link-signin']").should('contain', "ATRÁS PARA INICIAR SESIÓN")                                                                                     //Back to login link
        cy.get("button[data-testid = 'confirm-forgot-password-button-submit']").should('contain', "Restablecer Contraseña")                                                                                 //Reset password button
    })
})