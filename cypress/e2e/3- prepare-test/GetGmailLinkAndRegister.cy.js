// to refresh token, refresh clien secret
//(https://console.cloud.google.com/apis/credentials),
//write on cmd: node credentials.json token.json autotest.incytes1@gmail.com               Do it from gmail-tester-extended folder and then replace token and credentials files into cypress/plugins folder
var password = "pacienT1" // Can be changed
var email = "autotest.incytes1@gmail.com"
describe('Check Email and get the link from the last Email ', function () {

    it("Look for an email with specific subject ", function () {

        cy.getEmailBody(
            'notifications@incytesdata-dev.com',
            'autotest.incytes1@gmail.com',
            'Share and Monitor Your Health Progress with').then((emails) => {
                var code = emails[0].body.html.match(/(?<=a\ href=").*(?="\ bgcolor="\#007aff)/).join()
                cy.visit({
                    url: code,
                    failOnStatusCode: false
                })
                cy.url().should('contain', 'alpha-patient.incytesdata-dev.com')
            })
    })
})

function getRegisterLinkFromHtml(html) {
    return html
        .split('a href=')[5]
        .match(/\bhttp:\/\/\S+/)[0]
        .replace('"', '')[0]
}
