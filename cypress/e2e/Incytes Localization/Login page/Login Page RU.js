Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'


describe('Sign in page localization RU ', function () {
    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'ru')
        cy.visit(login_link, {
            failOnStatusCode: false
        })
        cy.get("h1[data-testid = 'form-login-title']").should('contain', 'Вход')
        cy.get("div[data-testid = 'form-login-email']").children('label').should('contain', 'Электронная почта*')
        cy.get("div[data-testid = 'form-login-password']").children('label').should('contain', 'Пароль*')

        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("div[data-testid = 'form-login-email']").children('p').should('contain', 'Обязательно для заполнения')
        cy.get("input[name = 'email']").click()
        cy.get("div[data-testid = 'form-login-password']").children('p').should('contain', 'Обязательно для заполнения')

        cy.get("a[data-testid = 'form-login-button-forgot']").children('span').first().should('contain', 'Забыли пароль?')

        cy.get("div[data-testid = 'form-login-keep-label']").children('div').first().should('contain', 'Не выходить из системы')
        cy.get("div[data-testid = 'form-login-keep-label']").children('div').last().should('contain', 'Если Вы используете чужой компьютер, то уберите галочку')

        cy.get("a[data-testid = 'form-login-button-register']").children('span').first().should('contain', 'Зарегистрировать')
        cy.get("button[data-testid = 'form-login-button-login']").children('span').first().should('contain', 'Войти')
    })
})
