// to refresh token, refresh clien secret
//(https://console.cloud.google.com/apis/credentials),
//write on cmd: node credentials.json token.json autotest.incytes1@gmail.com               Do it from gmail-tester-extended folder and then replace token and credentials files into cypress/plugins folder
var password = "pacienT1" // Can be changed
var email = "autotest.incytes1@gmail.com"
describe('DTCP-0002 Old clinician can Reset Password to his account', function () {

    it("Look for an email with specific subject ", function () {
        cy.visit('https://alpha.incytesdata-dev.com/')
        cy.get("a[data-testid='form-login-button-forgot']").click()
        cy.get("input[name='email']").type(email)
        cy.get("button[type='submit']", {timeout: 10000}).click()
        cy.wait(1000)
        cy.getEmailBody(
            'no-reply@verificationemail.com',
            'autotest.incytes1@gmail.com',
            'Your verification code').then((emails) => {
                cy.wait(3000)
                var code = emails[0].body.html.replace(/\D/g, '')
                cy.get("input[name='code']").clear().type(code);
                cy.log('And email contains code')
            })
        cy.get("input[name='password']").clear().type(password)
        cy.get("input[name='confirmPassword']").clear().type(password)
        cy.get("button[data-testid='confirm-forgot-password-button-submit']").click()
        cy.wait(1000)
        cy.get("input[type='text']").type(email)
        cy.get("input[name='password']").type(password)
        cy.get("button[data-testid='form-login-button-login']").click()
        cy.get("div[data-testid='dashboard']").log("COMPLETE SUCCESSFULLY")
    })
})