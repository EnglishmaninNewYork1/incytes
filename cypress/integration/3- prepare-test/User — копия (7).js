
var testurl = 'https://alpha.incytesdata-dev.com/'
var password = "pacienT1" // Can be changed
var email = "autotest.incytes+au7@gmail.com"
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

    return defaultpatientmail+ text + patientmailboxname;
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
        cy.visit(testurl);
        cy.url().should("include", "https://alpha.incytesdata-dev.com/auth/login")
        cy.get("input[name = 'email']").should('exist', 'be.visible').type(email)
        cy.get("input[name = 'password']").should('exist', 'be.visible').type(password)                           // Login
        cy.get("button[data-testid = 'form-login-button-login']").should('exist', 'be.visible').click()
        cy.url().should("include", testurl)
    
        cy.get("div[data-testid = 'main']").should('exist').and('be.visible')
        cy.get("div[data-testid = 'left-navigation']").should('exist').and('be.visible')
        cy.get("a[data-testid = 'left-nav-button-userprofile']").should('exist').and('be.visible')                  // Left navigation bar 
        cy.get("a[data-testid = 'left-nav-button-userprofile']").click()
        cy.url().should("include", "https://alpha.incytesdata-dev.com/userprofile")

        cy.get("div[data-testid = 'user-profile']").should('exist').and('be.visible')
        cy.get("button[data-testid = 'user-profile-header-button-edit']").should('exist').and('be.visible').click() // Profile Modal random russian number and teamname filling and save
        cy.get("div[data-testid = 'modal-container-content']").should('exist').and('be.visible')
        cy.get("input[class = 'null form-control']").clear().type(getrandomnumber())
        cy.get("input[name = 'teamName']").clear().type(teamname)
        cy.get("button[data-testid = 'update-user-profile-button-save']").click()

        cy.get("h6[data-testid = 'user-profile-header-team-name']").should("contain", teamname)          // Assertion of teamname and phonenumber
        cy.get("p[data-testid = 'user-profile-header-phone']").should("contain", '+7901')
        cy.reload()
        cy.wait(2000)

        cy.get("div[data-testid = 'left-navigation-top']").should('exist').and('be.visible')
        cy.visit(testurl)
        cy.get("div[data-testid = 'left-nav-button-cases']").should('exist').and('be.visible').click()
        cy.url().should("include", "https://alpha.incytesdata-dev.com/cases")
        cy.get("div[data-testid = 'cases-wrapper']").should('exist').and('be.visible')                     // Add case
        cy.get("button[data-testid = 'add-case-button']").should('exist').and('be.visible').click()
        cy.get("div[data-testid = 'modal-container-content']").should('exist').and('be.visible')


        cy.get("input[name = 'email']").should('exist').and('be.visible').type(getrandomemail())        // Add case modal, filling random email
        cy.get("button[data-testid = 'calm-button']").should('exist').and('be.visible').click()

        cy.get("input[id = 'sponsorId']").should('exist').and('be.visible').type(circle)                // Select circle
        cy.wait(1000)
        cy.get("input[id = 'sponsorId']").type('{downarrow}').type('{enter}')                         // Creating case and waiting 
        cy.wait(5000)
        cy.url().should("include", "https://alpha.incytesdata-dev.com/cases/")
    
        
        cy.get("div[data-testid = 'case-detail']").should('exist').and('be.visible')
        cy.get("div[data-testid = 'case-header-section']").should('exist').and('be.visible')
        cy.get("div[data-testid = 'component-label-paper-wrapper']").should('exist').and('be.visible')       // Go to case detail and select first one
        cy.get("div[data-testid = 'observational-protocol-menu-task']").first().click()
        cy.get("form[data-testid = 'patient-progress-container-form']").should('exist').and('be.visible')

        cy.wait(3000)

        cy.get("input[value = '2302']").check()
        cy.get("input[value = '2333']").check()
        cy.get("input[value = '3431']").check()
        cy.get("input[value = '3432']").check()
        cy.get("input[value = '3436']").check()
        cy.get("input[value = '3440']").check()
        cy.get("input[value = '3446']").check()      //Filling the survey 
        cy.get("input[value = '3452']").check()
        cy.get("input[value = '3454']").check()
        cy.get("input[value = '3457']").check()
        cy.get("input[value = '3465']").check()
        cy.get("input[value = '3468']").check()
        cy.get("input[value = '3476']").check()
        cy.get("input[value = '3478']").check()
        cy.get("input[value = '3482']").check()

        cy.get("button[data-testid = 'button-save'").click()    // Saving survey
        cy.wait(5000)


        //cy.get("div[data-testid = 'left-nav-button-tasks']").should('exist').and('be.visible').click()                     //Go to Tasks
        //cy.url().should("include", "https://alpha.incytesdata-dev.com/mytasks")
        //cy.get("div[data-testid = 'mytasks-inner']").should('exist').and('be.visible')
        //cy.get("div[data-testid = 'component-label-paper-wrapper']").should('exist').and('be.visible')
        //cy.get("tr[data-testid = 'mytasks-row']", { timeout: 10000 }).should('exist').and('be.visible'),
        //cy.get("span").contains('Patient').click()                                                                    //Filter by Patient
        //cy.get("tr[data-testid = 'mytasks-row']", { timeout: 10000 }).should('exist').and('be.visible')

        cy.get("div[data-testid = 'left-nav-button-reports']").should('exist').and('be.visible').click()
        cy.get("div[data-testid = 'reports']").should('exist').and('be.visible')
        cy.get("button[data-testid = 'build-report-button']").should('exist').and('be.visible').click()              // Go to reports
        cy.get("form[data-testid = 'form-add-report-modal']", { timeout: 3000 }).should('exist').and('be.visible')
        cy.get("input[name = 'name']").should('exist').and('be.visible').clear().type(getrandomreportname())
       
        cy.get("button[data-testid = 'form-report-modal-button-submit']", { timeout: 3000 }).should('exist').and('be.visible').click()
        cy.get("div[data-testid = 'report-builder-paper']").should('exist').and('be.visible')
        cy.get("button[data-testid = 'circle-filter-button-modal']").should('exist').and('be.visible').click()
        cy.get("div[data-testid = 'report-builder-circle-form']").should('exist').and('be.visible')
        cy.get("div[data-testid = 'report-builder-circle-select']").should('exist').and('be.visible').click()                 //Building report
        cy.get("li[data-testid = 'form-select-menu-item']").should('exist').and('be.visible').click()
        cy.get("button[data-testid = 'report-builder-circle-button']").should('exist').and('be.visible').click()

        cy.get("button[data-testid = 'report-y-axis-button-edit']").should('exist').and('be.visible').click()
        cy.get("div[data-testid = 'y-axis-form']").should('exist').and('be.visible')
        cy.get("div[data-testid = 'y-axis-form-select-scoring']").should('exist').and('be.visible').click()
        cy.get("li[data-testid = 'form-select-menu-item']").first().should('exist').and('be.visible').and("contain", "AKPS").click()
        cy.get("button[data-testid = 'y-axis-form-button-submit']").should('exist').and('be.visible').click()

        cy.get("div[data-testid = 'grouped-overlap-bar-chart']").should('exist').and('be.visible')
        cy.get("button[data-testid = 'report-builder-button-export']").should('exist').and('be.visible').click()              //Downloadin report and checking for downloaded file
        cy.readFile('cypress/downloads/CaseReport.xlsx', { timeout: 10000 }).should("exist")
    })
})