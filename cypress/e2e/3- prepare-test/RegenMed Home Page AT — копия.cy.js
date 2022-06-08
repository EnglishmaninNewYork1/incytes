Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Example to demonstrate the handling of new browser windows in cypress', () => {

    it('Handling new Browser Tab', function () {
        cy.viewport(1920,1080)
        cy.visit("https://alpha.incytesdata-dev.com/")

        cy.get('form[data-testid = "form-login"]').should("exist", "be.visible")
    })
})