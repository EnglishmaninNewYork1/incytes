Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

var login_link = 'https://alpha.incytesdata-dev.com/auth/login/'
var user_email = 'vitas.leschenko+cohortfiltertester@gmail.com'
var user_password = 'pacienT1'
var language_cookie_set = 'en'

describe('Incytes Case Details localization EN ', function () {

    it("Check Cases overview page ", function () {                 

        cy.viewport(1920, 1080)
        cy.setCookie('languageAbbreviation', language_cookie_set)                                                                          // Set cookie variable to change language
        cy.visit(login_link, {
            failOnStatusCode: false
        })

        cy.get("input[name = 'email']").type(user_email)                                                                                    // Log in
        cy.get("input[name = 'password']").type(user_password)
        cy.get("button[data-testid = 'form-login-button-login']").click()

        cy.get("a[href = '/cases']", { "timeout": 10000 }).click()
        cy.get("a[data-testid = 'case-cell-link']", {"timeout": 10000}).first().click()

        cy.get("a[data-testid = 'case-detail-link']", { "timeout": 10000 }).children('p').should('contain', 'BACK TO CASE OVERVIEW')                            // Back to case overview link

        cy.get("h1[data-testid = 'case-detail-item-title']").should('contain', 'Case Detail')                                                                            //Head title
        //cy.get("button[data-testid = 'case-detail-item-send-email']").children('span').first().should('contain', "RESEND INVITATION")                                  //Resent Invitation button
        cy.get("button[data-testid = 'case-detail-item-archive']").children('span').first().should('contain', "ARCHIVE CASE")                                          //Archive case button
        cy.get("button[data-testid = 'case-detail-item-button-close']").children('span').first().should('contain', "COMPLETE CASE")                                    //Complete case button
        cy.get("button[data-testid = 'case-detail-item-button-edit']").children('span').first().should('contain', "EDIT CASE")                                         //Edit case button

        cy.get("div[data-testid = 'case-phi-view']").children('button').click()                                                                                         //Open eye button
        
        cy.get("h6[data-testid = 'case-phi-id']").should('contain', 'Case ID')                                                                                         // Case id label
        cy.get("h6[data-testid = 'case-phi-patient-id']").should('contain', 'Patient ID')                                                                              //Patient ID label
        cy.get("h6[data-testid = 'case-phi-protocol-version']").should('contain', 'Version')                                                                            //Version label

        cy.get("span[data-testid = 'header-case-detail-create-label']").should('contain', 'Created By')                                                                 //Created by
        cy.get("span[data-testid = 'header-case-detail-commencement-label']").should('contain', 'Commencement Date')                                                    //Commencement date
        cy.get("span[data-testid = 'header-case-detail-treatment-label']").should('contain', 'Treatment Date')                                                          //Treatment date

        cy.get("h4[data-testid = 'hidden-phi-section-contact']").should('contain', 'Contact Information')
        cy.get("span[data-testid = 'hidden-phi-section-general-email']").should('contain', 'EMAIL')
        cy.get("span[data-testid = 'hidden-phi-section-general-phone']").should('contain', 'MOBILE PHONE')
        cy.get("span[data-testid = 'phi-section-languageName-text']").should('contain', 'COMMUNICATION ON')

        cy.get("h4[data-testid = 'hidden-phi-membership']").should('contain', 'Circle Membership')
        cy.get("span[data-testid = 'hidden-phi-section-sponsor']").should('contain', 'SPONSOR')
        cy.get("p[data-testid = 'hidden-phi-section-no-data']").should('contain', 'Data not shared')

        cy.get("p[data-testid = 'component-label-paper-title']").should('contain', 'Case Alerts')
        cy.get("span[data-testid = 'case-alert-head-survey']").should('contain', 'SURVEY')
        cy.get("span[data-testid = 'case-alert-head-type']").should('contain', 'ALERT TYPE')
        cy.get("span[data-testid = 'case-alert-head-date']").should('contain', 'ALERT DATE')
        cy.get("span[data-testid = 'case-alert-head-delegate']").should('contain', 'DELEGATE')

        cy.get("p[data-testid = 'case-outlier-alert-cell-posttreatment']").first().should('contain', 'Post-Treatment')
        cy.get("div[data-testid = 'case-outlier-alert-type-cell']").first().children('h6').should('contain', 'Outlier Detected')
        cy.get("div[data-testid = 'case-outlier-alert-type-cell']").children('div').children('div').children('div').first().next().children('p').should('contain', 'Upper limit')
        cy.get("p[data-testid = 'case-outlier-alert-delegate-patient']").first().should('contain', 'Patient')
        cy.get("button[aria-label = 'more']").first().click()
        cy.get("li[data-testid = 'case-outlier-alert-menu-item']").should('contain', 'Dismiss')
        cy.get("div[data-testid = 'observational-protocol-menu-task']").first().click({force:true})
        cy.get("div[data-testid = 'case-outlier-alert-type-cell']").children('div').children('div').children('div').first().next().children('p').should('contain', 'Lower limit')
    })

})