Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'


describe('Sign in page localization PL ', function () {
    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'pl')
        cy.visit(login_link, {
            failOnStatusCode: false
            })
        cy.get("h1[data-testid = 'form-login-title']").should('contain', 'Zaloguj')
        cy.get("div[data-testid = 'form-login-email']").children('label').should('contain', 'Email*')
        cy.get("div[data-testid = 'form-login-password']").children('label').should('contain', "Hasło*")

        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("div[data-testid = 'form-login-email']").children('p').should('contain', 'Wymagane')
        cy.get("input[name = 'email']").click()
        cy.get("div[data-testid = 'form-login-password']").children('p').should('contain', 'Wymagane')

        cy.get("a[data-testid = 'form-login-button-forgot']").children('span').first().should('contain', 'Zapomniałeś hasła?')

        cy.get("div[data-testid = 'form-login-keep-label']").children('div').first().should('contain', 'Nie wylogowuj mnie')
        cy.get("div[data-testid = 'form-login-keep-label']").children('div').last().should('contain', 'Odznacz, jeśli używasz urządzenia publicznego')

        cy.get("a[data-testid = 'form-login-button-register']").children('span').first().should('contain', 'REJESTRACJA')
        cy.get("button[data-testid = 'form-login-button-login']").children('span').first().should('contain', 'ZALOGUJ SIĘ')

        cy.get("input[name = 'email']").type('g')
        cy.get("input[name = 'password']").type('g')
        cy.get("button[data-testid = 'form-login-button-login']").click()
        cy.get("div[data-testid = 'snackbar-inner']").children('div').last().children('h6').should('contain', 'Twój adres e-mail i/lub hasło są nieprawidłowe, spróbuj ponownie. Nowi użytkownicy muszą się najpierw zarejestrować.')
    })
})