
var testurl = 'https://alpha.incytesdata-dev.com/'
var password = "pacienT1" // Can be changed
var email = "autotest.incytes+au8@gmail.com"
var phonecode = "7901"
var teamname = "AutotestTeam"
var defaultpatientmail = "autotest.incytes+l"
var patientmailboxname = "@gmail.com"
var circle = "Autotest circle"

function getrandomnumber() {
    var phonenumber = phonecode
    for (var i = 0; phonenumber.length < 12; i++) {
        phonenumber += String(Math.floor(Math.random() * 9) + 1)
    }
        return phonenumber
}

function getrandomemail() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return defaultpatientmail + text + patientmailboxname;
}

function getrandomreportname() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text
}

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('E2E Test', function () {

    it("Cliician Login", () => {

        cy.viewport(1920, 1080)
        cy.visit(testurl, { timeout: 120000 });
        cy.url({ timeout: 120000 }).should("include", "https://alpha.incytesdata-dev.com/auth/login")
        cy.get("input[name = 'email']", { timeout: 120000 }).should('exist', 'be.visible').type(email)
        cy.get("input[name = 'password']", { timeout: 120000 }).should('exist', 'be.visible').type(password)                           // Login
        cy.get("button[data-testid = 'form-login-button-login']", { timeout: 120000 }).should('exist', 'be.visible').click()
        cy.url({ timeout: 120000 }).should("include", testurl)

        cy.get("div[data-testid = 'main']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("div[data-testid = 'left-navigation']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("a[data-testid = 'left-nav-button-userprofile']", { timeout: 120000 }).should('exist').and('be.visible')                  // Left navigation bar
        cy.get("a[data-testid = 'left-nav-button-userprofile']", { timeout: 120000 }).click()
        cy.url({ timeout: 120000 }).should("include", "https://alpha.incytesdata-dev.com/userprofile")

        cy.get("div[data-testid = 'user-profile']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("button[data-testid = 'user-profile-header-button-edit']", { timeout: 120000 }).should('exist').and('be.visible').click() // Profile Modal random russian number and teamname filling and save
        cy.get("div[data-testid = 'modal-container-content']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("input[class = 'null form-control']", { timeout: 120000 }).clear().type(getrandomnumber())
        cy.get("input[name = 'teamName']", { timeout: 120000 }).clear().type(teamname)
        cy.get("button[data-testid = 'update-user-profile-button-save']", { timeout: 120000 }).click()

        cy.get("h6[data-testid = 'user-profile-header-team-name']", { timeout: 120000 }).should("contain", teamname)          // Assertion of teamname and phonenumber
        cy.get("p[data-testid = 'user-profile-header-phone']", { timeout: 120000 }).should("contain", '+7901')
        cy.reload()

        cy.get("div[data-testid = 'left-navigation-top']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("div[data-testid = 'left-nav-button-cases']", { timeout: 120000 }).should('exist').and('be.visible').click()
        cy.url({ timeout: 120000 }).should("include", "https://alpha.incytesdata-dev.com/cases")
        cy.get("div[data-testid = 'cases-wrapper']", { timeout: 120000 }).should('exist').and('be.visible')                     // Add case
        cy.get("button[data-testid = 'add-case-button']", { timeout: 120000 }).should('exist').and('be.visible').click()
        cy.get("div[data-testid = 'modal-container-content']", { timeout: 120000 }).should('exist').and('be.visible')


        cy.get("input[name = 'email']", { timeout: 120000 }).should('exist').and('be.visible').type(getrandomemail())        // Add case modal, filling random email
        cy.get("button[data-testid = 'calm-button']", { timeout: 120000 }).should('exist').and('be.visible').click()

        cy.get("input[id = 'sponsorId']", { timeout: 120000 }).should('exist').and('be.visible').type(circle)                // Select circle
        cy.wait(1000)
        cy.get("div", { timeout: 120000 }).contains(circle).type('{downarrow}')
        cy.wait(1000)
        cy.get("button[data-testid = 'calm-button']", { timeout: 120000 }).click()                                               // Creating case and waiting
        cy.wait(10000)


        cy.get("div[data-testid = 'main-content-inner']", { timeout: 120000 }).should('exist').and('be.visible').scrollTo(0, 500)
        cy.get("div[data-testid = 'case-detail']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("p[data-testid = 'component-label-paper-title']", { timeout: 120000 }).should('exist').and('be.visible')                                                                                                                      // Go to case detail and select first one
        cy.get("div[data-testid = 'observational-protocol-menu-task']", { timeout: 120000 }).first().should('exist').and('be.visible').click() // Finding first survey
        cy.get("form[data-testid = 'patient-progress-container-form']", { timeout: 120000 }).should('exist').and('be.visible')



        cy.get("input[value = '2302']", { timeout: 120000 }).check()
        cy.get("input[value = '2333']", { timeout: 120000 }).check()
        cy.get("input[value = '3431']", { timeout: 120000 }).check()
        cy.get("input[value = '3432']", { timeout: 120000 }).check()
        cy.get("input[value = '3436']", { timeout: 120000 }).check()
        cy.get("input[value = '3440']", { timeout: 120000 }).check()
        cy.get("input[value = '3446']", { timeout: 120000 }).check()      //Filling the survey
        cy.get("input[value = '3452']", { timeout: 120000 }).check()
        cy.get("input[value = '3454']", { timeout: 120000 }).check()
        cy.get("input[value = '3457']", { timeout: 120000 }).check()
        cy.get("input[value = '3465']", { timeout: 120000 }).check()
        cy.get("input[value = '3468']", { timeout: 120000 }).check()
        cy.get("input[value = '3476']", { timeout: 120000 }).check()
        cy.get("input[value = '3478']", { timeout: 120000 }).check()
        cy.get("input[value = '3482']", { timeout: 120000 }).check()

        cy.get("button[data-testid = 'button-save']", { timeout: 120000 }).click()    // Saving survey
        cy.wait(15000)




        cy.get("div[data-testid = 'left-nav-button-tasks']", { timeout: 120000 }).should('exist').and('be.visible').click()                     //Go to Tasks
        cy.url({ timeout: 120000 }).should("include", "https://alpha.incytesdata-dev.com/mytasks")
        cy.get("div[data-testid = 'mytasks-inner']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("div[data-testid = 'component-label-paper-wrapper']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("tr[data-testid = 'mytasks-row']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("span", { timeout: 120000 }).contains('Patient').click()                                                                         //Filter by Patient

        cy.get("tr[data-testid = 'mytasks-row']", { timeout: 120000 }).should('exist').and('be.visible')

        cy.get("div[data-testid = 'left-nav-button-reports']", { timeout: 120000 }).should('exist').and('be.visible').click()
        cy.get("div[data-testid = 'reports']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("button[data-testid = 'build-report-button']", { timeout: 120000 }).should('exist').and('be.visible').click()              // Go to reports
        cy.get("form[data-testid = 'form-add-report-modal']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("input[name = 'name']", { timeout: 120000 }).should('exist').and('be.visible').clear().type(getrandomreportname())

        cy.get("button[data-testid = 'form-report-modal-button-submit']", { timeout: 120000 }).should('exist').and('be.visible').click()
        cy.get("div[data-testid = 'report-builder-paper']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("button[data-testid = 'circle-filter-button-modal']", { timeout: 120000 }).should('exist').and('be.visible').click()
        cy.get("div[data-testid = 'report-builder-circle-form']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("div[data-testid = 'report-builder-circle-select']", { timeout: 120000 }).should('exist').and('be.visible').click()                 //Building report
        cy.get("li[data-testid = 'form-select-menu-item']", { timeout: 120000 }).should('exist').and('be.visible').click()
        cy.get("button[data-testid = 'report-builder-circle-button']", { timeout: 120000 }).should('exist').and('be.visible').click()

        cy.get("button[data-testid = 'report-y-axis-button-edit']", { timeout: 120000 }).should('exist').and('be.visible').click()
        cy.get("div[data-testid = 'y-axis-form']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("div[data-testid = 'y-axis-form-select-scoring']", { timeout: 120000 }).should('exist').and('be.visible').click()
        cy.get("li[data-testid = 'form-select-menu-item']", { timeout: 120000 }).first().should('exist').and('be.visible').and("contain", "AKPS").click()
        cy.get("button[data-testid = 'y-axis-form-button-submit']", { timeout: 120000 }).should('exist').and('be.visible').click()

        cy.get("div[data-testid = 'grouped-overlap-bar-chart']", { timeout: 120000 }).should('exist').and('be.visible')
        cy.get("button[data-testid = 'report-builder-button-export']", { timeout: 120000 }).should('exist').and('be.visible').click()              //Downloadin report and checking for downloaded file
        cy.readFile('cypress/downloads/CaseReport.xlsx', { timeout: 120000 }).should("exist")
    })
})