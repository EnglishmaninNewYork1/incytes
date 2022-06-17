Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'


describe('Sign in page localization ES ', function () {
    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'es')
        cy.visit(login_link, {
            failOnStatusCode: false
            })
        cy.get("h1[data-testid = 'form-login-title']").should('contain', 'Registrarse')
        cy.get("div[data-testid = 'form-login-email']").children('label').should('contain', 'Correo Electrónico*')
        cy.get("div[data-testid = 'form-login-password']").children('label').should('contain', 'Contraseña*')

        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("div[data-testid = 'form-login-email']").children('p').should('contain', 'Requerido')
        cy.get("input[name = 'email']").click()
        cy.get("div[data-testid = 'form-login-password']").children('p').should('contain', 'Requerido')

        cy.get("a[data-testid = 'form-login-button-forgot']").children('span').first().should('contain', '¿Olvidaste tu Contraseña?')

        cy.get("div[data-testid = 'form-login-keep-label']").children('div').first().should('contain', 'Mantenerme registrado')
        cy.get("div[data-testid = 'form-login-keep-label']").children('div').last().should('contain', 'Desmarque si usa un dispositivo público')

        cy.get("a[data-testid = 'form-login-button-register']").children('span').first().should('contain', 'REGÍSTRATE')
        cy.get("button[data-testid = 'form-login-button-login']").children('span').first().should('contain', 'REGISTRARSE')

        cy.get("input[name = 'email']").type('g')
        cy.get("input[name = 'password']").type('g')
        cy.get("button[data-testid = 'form-login-button-login']").click()
        cy.get("div[data-testid = 'snackbar-inner']").children('div').last().children('h6').should('contain', 'Su correo electrónico o contraseña son incorrectos, vuelva a ingresar. Los nuevos usuarios deben primero registrarse.')
    })
})