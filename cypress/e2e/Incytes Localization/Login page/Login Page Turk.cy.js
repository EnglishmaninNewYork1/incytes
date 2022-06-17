Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'


describe('Sign in page localization TR ', function () {
    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'tr')                                                  // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
            })
        cy.get("h1[data-testid = 'form-login-title']").should('contain', 'Kayıt olmak')                             // Head of form
        cy.get("div[data-testid = 'form-login-email']").children('label').should('contain', 'E-posta*')             //Email
        cy.get("div[data-testid = 'form-login-password']").children('label').should('contain', "Parola*")           //Password

        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("div[data-testid = 'form-login-email']").children('p').should('contain', 'Gerekli')                  //Required email field
        cy.get("input[name = 'email']").click()
        cy.get("div[data-testid = 'form-login-password']").children('p').should('contain', 'Gerekli')               //Required password field

        cy.get("a[data-testid = 'form-login-button-forgot']").children('span').first().should('contain', 'Parolanızı mı unuttunuz?')  // Forgot password?

        cy.get("div[data-testid = 'form-login-keep-label']").children('div').first().should('contain', 'Oturumumu açık tut')        // Keep me logged in
        cy.get("div[data-testid = 'form-login-keep-label']").children('div').last().should('contain', 'Herkese açık bir cihaz kullanıp kullanmadığınızın işaretini kaldırın')

        cy.get("a[data-testid = 'form-login-button-register']").children('span').first().should('contain', 'ÜYE OLMAK')                  // Sign up
        cy.get("button[data-testid = 'form-login-button-login']").children('span').first().should('contain', 'KAYIT OLMAK')              // Sign in

        cy.get("input[name = 'email']").type('g')
        cy.get("input[name = 'password']").type('g')
        cy.get("button[data-testid = 'form-login-button-login']").click()
        cy.get("div[data-testid = 'snackbar-inner']").children('div').last().children('h6').should('contain', 'E-posta adresiniz ve/veya şifreniz yanlış, lütfen tekrar deneyin. Yeni kullanıcılar önce kaydolmalıdır.') //Incorrect email/password error
    })
})