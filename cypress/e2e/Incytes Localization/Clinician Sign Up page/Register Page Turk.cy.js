Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var register_link = 'https://alpha.incytesdata-dev.com/auth/register/'


describe('Register page localization TR ', function () {
    it("Check register page ", function () {
        cy.setCookie('languageAbbreviation', 'tr')                                                      // Set cookie variable to change language
        cy.visit(register_link, {
            failOnStatusCode: false
        })
        cy.get("h1[data-testid = 'form-registration-title']").should('contain', 'Sağlık kuruluşu kaydı')                              // Head of form
        cy.get("div[data-testid = 'form-registration-first-name']").children('label').should('contain', 'İlk adı')             //First Name
        cy.get("div[data-testid = 'form-registration-last-name']").children('label').should('contain', 'Soyadı')                 //Last Name
        cy.get("div[data-testid = 'form-registration-email']").children('label').should('contain', 'E-posta')                        //Email
        cy.get("div[data-testid = 'jurisdiction-selector-formcontrol']").children('label').should('contain', 'PI Bölgesi')           //PI region
        cy.get("span[data-testid = 'form-registration-help-text']").should('contain', "En az 1 büyük harf, 1 küçük harf ve 1 rakamdan oluşan minimum 8 karakter.") //Password helper
        cy.get("div[data-testid = 'form-registration-password']").children('label').should('contain', 'Parola')                  //Password
        cy.get("div[data-testid = 'form-registration-reentee']").children('label').should('contain', 'Şifreyi Doğrula')           //Verify Password

        cy.get("input[name = 'firstName']").click()
        cy.get("input[name = 'lastName']").click()
        cy.get("input[name = 'email']").click()
        cy.get("input[name = 'password']").click()
        cy.get("input[name = 'verifyPassword']").click()
        cy.get("input[type = 'checkbox']").check()


        cy.get("div[data-testid = 'form-registration-first-name']").children('p').should('contain', 'Gerekli')                    //First name Required
        cy.get("div[data-testid = 'form-registration-last-name']").children('p').should('contain', 'Gerekli')                      //Last name Required
        cy.get("div[data-testid = 'form-registration-email']").children('p').should('contain', 'Gerekli')                          //Email Required
        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', 'Gerekli')                       //Password Required
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', 'Gerekli')                        //Verify pass Required

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'verifyPassword']").type('f')

        cy.get("div[data-testid = 'form-registration-password']").children('p').should('contain', "Minimum 8 karakter. En az 1 büyük harf, 1 küçük harf, 1 rakam içermelidir.")   //Password should contain ...
        cy.get("div[data-testid = 'form-registration-reentee']").children('p').should('contain', "Parolalar eşleşmeli")                                                               //Password should match
   
        cy.get("a[href = 'https://www.clinician.rgnmed.com/support-post/incytes-tm-license-agreement']").should('contain', "Lisans Sözleşmesi")                                        //License agreement link
        
        cy.get("button[data-testid = 'form-registration-button-submit']").children('span').should('contain', "SONRAKİ")                                                                   //Next Button

        cy.get("a[data-testid = 'form-registration-button-back']").children('span').should('contain', "ZATEN HESABINIZ VAR MI?")                                                       //Already have an account link
        
        
    })
})