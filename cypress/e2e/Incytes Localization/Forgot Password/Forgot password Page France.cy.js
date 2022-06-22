Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var forgot_link = 'https://alpha.incytesdata-dev.com/auth/forgotPassword'


describe('Forgot password page localization FR ', function () {

    it("Check Si ", function () {
        cy.setCookie('languageAbbreviation', 'fr')                                                                                          // Set cookie variable to change language
        cy.visit(forgot_link, {
            failOnStatusCode: false
        })
        
        cy.get("h1[class = 'MuiTypography-root MuiTypography-h1']").should('contain', 'Mot de passe oublié')                                    // Head of form
        cy.get("div[data-testid = 'component-form-text-field']").children('label').should('contain', 'Email*')                              //Email
        cy.get("a[href = '/auth/login']").should('contain', 'Retour à la connexion')                                                                //Back to login page
        cy.get("a[role = 'button']").should('contain', "S'inscrire")                                                                           // Sign Up Button
        cy.get("button[type = 'submit']").children('span').should('contain', 'Soumettre')                                                      // Submit button check

        cy.get("button[type = 'submit']").click()
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Obligatoire')              // Required label

        cy.get("input[name = 'email']").type('g')
        cy.get("div[data-testid = 'component-form-text-field']").children('label').siblings('p').should('contain', 'Adresse e-mail invalide') // Invalid email label

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+notregisteredinsystem@gmail.com')
        cy.get("button[type = 'submit']").click()
        cy.get("h6[data-testid = 'snackbar-text']").should('contain', "Nous n'avons pas pu vérifier cette adresse email, veuillez ressaisir.")  // Not registered email in system check

        cy.get("input[name = 'email']").clear()
        cy.get("input[name = 'email']").type('vitas.leschenko+testbbbbbnnn@gmail.com')
        cy.get("button[type = 'submit']").click()



        cy.get("h1[data-testid = 'confirm-forgot-password-title']", { "timeout": 10000 }).should('contain', 'Réinitialiser le mot de passe')                                     //Reset password modal name
        cy.get("h6[data-testid = 'confirm-forgot-password-success']").should('contain', "Un code de vérification a été envoyé avec succès à votre adresse e-mail. Veuillez saisir le code ci-dessous. Si nécessaire, veuillez également vérifier le dossier spam.") //Under Text

        cy.get("input[name = 'email']").should('have.attr', 'placeholder', 'Email')
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', "Code d'accès").click()                                                    //Placeholder localization check
        cy.get("input[name = 'password']").should('have.attr', 'placeholder', 'Mot de passe').click()
        cy.get("input[name = 'confirmPassword']").should('have.attr', 'placeholder', 'Confirmez le mot de passe').click()
        cy.get("input[name = 'code']").should('have.attr', 'placeholder', "Code d'accès").click()

        cy.get("div[data-testid = 'confirm-forgot-password-token']").children('p').should('contain', 'Obligatoire')
        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', 'Obligatoire')                                 //Reuqired label check under eeach input
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Obligatoire')

        cy.get("input[name = 'password']").type('g')
        cy.get("input[name = 'confirmPassword']").type('h')

        cy.get("div[data-testid = 'confirm-forgot-password-password']").children('p').should('contain', "8 caractères minimum. Doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre.")  // Password structure reminder
        cy.get("div[data-testid = 'confirm-forgot-password-reenter']").children('p').should('contain', 'Les mots de passe doivent correspondre')                                                                  // Password must match

        cy.get("a[data-testid = 'confirm-forgot-password-link-signin']").should('contain', "RETOUR CONNEXION")
        cy.get("button[data-testid = 'confirm-forgot-password-button-submit']").should('contain', "Réinitialiser le mot de passe")
    })
})