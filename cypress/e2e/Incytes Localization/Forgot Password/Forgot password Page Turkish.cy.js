Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var forgot_link = 'https://alpha.incytesdata-dev.com/auth/forgotPassword'


describe('Forgot password page localization TR ', function () {

    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'tr')                                                                                          // Set cookie variable to change language
        cy.visit(forgot_link, {
            failOnStatusCode: false
        })
        
        cy.get("h1[class = 'MuiTypography-root MuiTypography-h1']").should('contain', 'Parolanızı mı unuttunuz')                                    // Head of form
        cy.get("div[data-testid = 'component-form-text-field']").children('label').should('contain', 'E-posta*')                              //Email
        cy.get("a[href = '/auth/login']").should('contain', 'Girişe geri dön')                                                                //Back to login page
        cy.get("a[role = 'button']").should('contain', 'Kaydolmak')                                                                           // Sign Up Button
        cy.get("button[type = 'submit']").children('span').should('contain', 'Göndermek ')                                                      // Submit button check

        cy.get("button[type = 'submit']").click()
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Gerekli')              // Required label

        cy.get("input[name = 'email']").type('g')
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Geçersiz e-posta adresi') // Invalid email label

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+notregisteredinsystem@gmail.com')
        cy.get("button[type = 'submit']").click()
        cy.get("h6[data-testid = 'snackbar-text']").should('contain', "Bu e-posta adresi sistemimizde kayıtlı değil, lütfen tekrar deneyin.")  // Not registered email in system check

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+conditionalvisibilitytest@gmail.com')
        cy.get("button[type = 'submit']").click()



        cy.get("h1[data-testid = 'confirm-forgot-password-title']", { "timeout": 10000 }).should('contain', 'Şifreyi yenile')                                     //Reset password modal name
        cy.get("h6[data-testid = 'confirm-forgot-password-success']").should('contain', 'E-postanıza bir doğrulama kodu başarıyla gönderildi. Lütfen aşağıdaki kodu girin. Gerekirse lütfen spam klasörünü de kontrol edin.') //Under Text

        cy.get("input[name = 'email']").should('have.attr', 'placeholder', 'E-posta')
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', 'Giriş kodu').click()
        cy.get("input[name = 'password']").should('have.attr', 'placeholder', 'Parola').click()                                                       // Placeholders localization check
        cy.get("input[name = 'confirmPassword']").should('have.attr', 'placeholder', 'Şifreyi onayla').click()
        cy.get("input[name = 'code']").click()

        cy.get("div[data-testid = 'confirm-forgot-password-token']").children('p').should('contain', 'Gerekli')
        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', 'Gerekli')                                 //Reuqired label check under eeach input
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Gerekli')

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'confirmPassword']").type('h')

        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', "Minimum 8 karakter. En az 1 büyük harf, 1 küçük harf, 1 rakam içermelidir.") // Password structure reminder
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Parolalar eşleşmeli')                                                              // Password must match

        cy.get("a[data-testid = 'confirm-forgot-password-link-signin']").should('contain', "GİRİŞE DÖN")                                                                                 //Back to login link
        cy.get("button[data-testid = 'confirm-forgot-password-button-submit']").should('contain', "Şifreyi yenile")                                                                         //Reset password button
    })
})