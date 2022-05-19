Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('RegenMed Circles Overview Page', function () {

    it("Circles Upper Block Check", () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 });
        cy.url().should("include", 'https://www.rgnmed.com/')
        cy.get("div[id = 'up']").should('exist', 'be.visible')

        cy.get("a[class = 'brand w-nav-brand w--current']").should('exist', 'be.visible')                                                                                                                                                                                                               

        cy.get("div[id = 'w-dropdown-toggle-0']").should("contain", "Circles").and('exist', 'be.visible') 
        cy.get("div[id = 'w-dropdown-toggle-0']").should("contain", "Circles").trigger('mouseover')        //Go to For Practioners Page
        cy.get("nav[id = 'w-dropdown-list-0']").children('a').first().next().should('exist', 'be.visible').and("have.attr", 'href', "/circles/practitioners").and('contain', 'For Practitioners').click()
       
        cy.url().should("include", 'https://www.rgnmed.com/circles/practitioners')
        cy.get("div[id = 'mission']").should('exist', 'be.visible')
        cy.get("div[id = 'mission']").should('have.css', 'background-image', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61c5ba1113ba320effba4e5a_BenchmarC%20-%20Graphs%20-%20Practitioner%20-%20v3.jpg")') // Bacground image check
        cy.get("div[class = 'div-block-16 mission hp-use-case']").should('exist', 'be.visible')

        cy.get("h1[class = 'about-title hp-use-case-heading']").should('exist', 'be.visible')
        cy.get("h1[class = 'about-title hp-use-case-heading']").children('strong').should('exist', 'be.visible').and('contain', 'Circles for ').and('contain', 'Healthcare Practitioners')                                  // Circles for HP block head name check

        cy.get("p[class = 'paragraph-7 with-hero']").should('exist', 'be.visible')
        cy.get("p[class = 'paragraph-7 with-hero']").should('exist', 'be.visible').and('contain', 'Practitioners sit upon a trove of valuable real-world data. Circles help extract such data in a simple and burden-free manner, while securely connecting practitioners from around the world with shared clinical interests. Circle members combine their patient flows, clinical expertise and aggregated real-world evidence to satisfy many of their professional, academic and personal goals.') // Head block text check

        cy.get("div[class = 'div-block-16 mission hp-use-case']").children('a').should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/circles-get-started').and('contain', "Request a Demo")
        cy.get("div[class = 'div-block-16 mission hp-use-case']").children('a').should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/circles-get-started').invoke('removeAttr', 'target').click()  //Request a demo button Check
        cy.url().should("include", 'https://info.rgnmed.com/circles-get-started') 
    })

    it("Section with Fast Scroll Buttons Check", () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.rgnmed.com/circles/practitioners', { timeout: 120000 })
        cy.url().should("include", 'https://www.rgnmed.com/circles/practitioners')

        cy.get("div[class = 'section-16 use-case-challenges grey wf-section']").should('exist', 'be.visible')
        cy.get("div[class = 'div-block-72']").should('exist', 'be.visible')
        cy.get("div[class = 'div-block-72']").children('p').children('strong').should('exist', 'be.visible').and('contain', 'Circles, built by and for practitioners, support:')                                              //Che

        cy.get("div[class = 'container-9 use-cases distributor _2-col']").should('exist', 'be.visible')
        cy.get("div[class = 'container-9 use-cases distributor _2-col']").children('div').first().children('div').first().children('a').should('exist', 'be.visible').and('have.attr', 'href', '#usecase1').click()
        cy.url().should('include', 'https://www.rgnmed.com/circles/practitioners#usecase1')

        cy.get("div[class = 'container-9 use-cases distributor _2-col']").children('div').first().children('div').first().next().children('a').should('exist', 'be.visible').and('have.attr', 'href', '#usecase2').click()
        cy.url().should('include', 'https://www.rgnmed.com/circles/practitioners#usecase2')

        cy.get("div[class = 'container-9 use-cases distributor _2-col']").children('div').first().next().children('div').first().children('a').should('exist', 'be.visible').and('have.attr', 'href', '#usecase3').click()   //Check Navigations fast scroll buttons
        cy.url().should('include', 'https://www.rgnmed.com/circles/practitioners#usecase3')

        cy.get("div[class = 'container-9 use-cases distributor _2-col']").children('div').first().next().children('div').first().next().children('a').should('exist', 'be.visible').and('have.attr', 'href', '#usecase4').click()
        cy.url().should('include', 'https://www.rgnmed.com/circles/practitioners#usecase4')

        cy.get("div[class = 'container-9 use-cases distributor _2-col']").children('div').last().children('div').children('a').should('exist', 'be.visible').and('have.attr', 'href', '#usecase5').click()
        cy.url().should('include', 'https://www.rgnmed.com/circles/practitioners#usecase5')

    })

    it("Head of usecases block check", () => {
        cy.viewport(1920, 1080)
        
        cy.get("div[class = 'section-9 wf-section']").first().should('exist', 'be.visible')
        cy.get("div[class = 'section-9 wf-section']").first().children('div').children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Circles Solutions for Healthcare Practitioners')

    })

    it("Usecase 1 block check", () => {
        cy.viewport(1920, 1080)

        cy.get("div[id = 'usecase1']").should('exist', 'be.visible')
        cy.get("div[id = 'usecase1']").children('div').children('div').first().children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Practice Growth and Equity')                         // Left Text block check
        cy.get("div[id = 'usecase1']").children('div').children('div').first().children('p').should('exist', 'be.visible').and('contain', 'Unlock your real-world evidence to satisfy value-based reimbursements, augment your patient marketing materials, establish new referral relationships or launch new clinical service lines.')

        cy.get("div[id = 'w-slider-mask-0']").children('div').first().should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa2ad21b40a3fc936aa802_Opiates%20Usage%20v2.png"), linear-gradient(rgba(13, 31, 51, 0.9), rgba(13, 31, 51, 0.9)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa2ad21b40a3fc936aa802_Opiates%20Usage%20v2.png")')
        cy.get("div[id = 'w-slider-mask-0']").children('div').first().next().should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa1f702ce6a9071a7207b3_Patient%20Scores_KOOS%20graph.png"), linear-gradient(rgba(13, 31, 51, 0.9), rgba(13, 31, 51, 0.9)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa1f702ce6a9071a7207b3_Patient%20Scores_KOOS%20graph.png")') //Block images check

        cy.get("div[id = 'w-slider-mask-0']").siblings('div').first().should('exist', 'be.visible').click()
        cy.get("div[id = 'w-slider-mask-0']").siblings('div').first().next().should('exist', 'be.visible').click()                        // Sliders check
        cy.get("div[id = 'w-slider-mask-0']").siblings('div').last().children('div').first().should('exist', 'be.visible').click()
        cy.get("div[id = 'w-slider-mask-0']").siblings('div').last().children('div').last().should('exist', 'be.visible').click()

    })

    it("Usecase 2 block check", () => {
        cy.viewport(1920, 1080)

        cy.get("div[id = 'w-slider-mask-1']").children('div').first().should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa2079164320a708bcd6a0_VAS%20Report2.png"), linear-gradient(rgba(13, 31, 51, 0.9), rgba(13, 31, 51, 0.9)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa2079164320a708bcd6a0_VAS%20Report2.png")')
        cy.get("div[id = 'w-slider-mask-1']").children('div').first().next().should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61a8f2b5ef10122f35d4ed3b_Low%20Scoring%20Group%20Alerts.png"), linear-gradient(rgba(13, 31, 51, 0.9), rgba(13, 31, 51, 0.9)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61a8f2b5ef10122f35d4ed3b_Low%20Scoring%20Group%20Alerts.png")') //Block images check

        cy.get("div[id = 'w-slider-mask-1']").siblings('div').first().should('exist', 'be.visible').click()
        cy.get("div[id = 'w-slider-mask-1']").siblings('div').first().next().should('exist', 'be.visible').click()                        // Sliders check
        cy.get("div[id = 'w-slider-mask-1']").siblings('div').last().children('div').first().should('exist', 'be.visible').click()
        cy.get("div[id = 'w-slider-mask-1']").siblings('div').last().children('div').last().should('exist', 'be.visible').click()

        cy.get("div[id = 'usecase2']").should('exist', 'be.visible')
        cy.get("div[id = 'usecase2']").children('div').children('div').last().children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Regulatory Submissions and Documentation')                         // Right Text block check
        cy.get("div[id = 'usecase2']").children('div').children('div').last().children('p').should('exist', 'be.visible').and('contain', 'Easily enter, record and submit patient events, post-operative pain levels, novel/off-label treatment protocols and other regulatorily sensitive patient care.')

    })

    it("Usecase 3 block check", () => {
        cy.viewport(1920, 1080)

        cy.get("div[id = 'usecase3']").should('exist', 'be.visible')
        cy.get("div[id = 'usecase3']").children('div').children('div').first().children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Professional Collaboration and Fulfillment')                         // Left Text block check
        cy.get("div[id = 'usecase3']").children('div').children('div').first().children('p').should('exist', 'be.visible').and('contain', 'Connect with peers from around the world focused on similar topics, and seamlessly share protocols,')
        cy.get("div[id = 'usecase3']").children('div').children('div').first().children('p').children('a').should('exist', 'be.visible').and('have.attr', 'href', 'https://f.hubspotusercontent40.net/hubfs/20387796/Whitepaper_Establishing a Registry (2).pdf')

        cy.get("div[id = 'w-slider-mask-2']").children('div').first().should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61a8f405f3f717947c0d75e3_Invite%20Circle%20Member.png"), linear-gradient(rgba(13, 31, 51, 0.9), rgba(13, 31, 51, 0.9)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61a8f405f3f717947c0d75e3_Invite%20Circle%20Member.png")')
        cy.get("div[id = 'w-slider-mask-2']").children('div').first().next().should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61a8f39a34bbc29ad867cba3_Circle%20Homepage%20with%20Catal%C3%A1n%20headshot.jpg"), linear-gradient(rgba(13, 31, 51, 0.9), rgba(13, 31, 51, 0.9)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61a8f39a34bbc29ad867cba3_Circle%20Homepage%20with%20Catal%C3%A1n%20headshot.jpg")') //Block images check

        cy.get("div[id = 'w-slider-mask-2']").siblings('div').first().should('exist', 'be.visible').click()
        cy.get("div[id = 'w-slider-mask-2']").siblings('div').first().next().should('exist', 'be.visible').click()                        // Sliders check
        cy.get("div[id = 'w-slider-mask-2']").siblings('div').last().children('div').first().should('exist', 'be.visible').click()
        cy.get("div[id = 'w-slider-mask-2']").siblings('div').last().children('div').last().should('exist', 'be.visible').click()

    })

    it("Usecase 4 block check", () => {
        cy.viewport(1920, 1080)

        cy.get("div[id = 'w-slider-mask-3']").children('div').first().should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61a9cddae0736186dde2c42e_Patient%20Homepage_Benchmarc%20Dashboard.png"), linear-gradient(rgba(13, 31, 51, 0.9), rgba(13, 31, 51, 0.9)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61a9cddae0736186dde2c42e_Patient%20Homepage_Benchmarc%20Dashboard.png")')
        cy.get("div[id = 'w-slider-mask-3']").children('div').first().next().should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa1f702ce6a9071a7207b3_Patient%20Scores_KOOS%20graph.png"), linear-gradient(rgba(13, 31, 51, 0.9), rgba(13, 31, 51, 0.9)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa1f702ce6a9071a7207b3_Patient%20Scores_KOOS%20graph.png")') //Block images check
        cy.get("div[id = 'w-slider-mask-3']").children('div').first().next().next().should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa1fd955871243e131a6f9_Patient%20Benchmarc%E2%84%A2%20brochure_Page%201.png"), linear-gradient(rgba(13, 31, 51, 0.9), rgba(13, 31, 51, 0.9)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa1fd955871243e131a6f9_Patient%20Benchmarc%E2%84%A2%20brochure_Page%201.png")')

        cy.get("div[id = 'w-slider-mask-3']").siblings('div').first().should('exist', 'be.visible').click()
        cy.get("div[id = 'w-slider-mask-3']").siblings('div').first().next().should('exist', 'be.visible').click()                        // Sliders check
        cy.get("div[id = 'w-slider-mask-3']").siblings('div').last().children('div').first().should('exist', 'be.visible').click()
        cy.get("div[id = 'w-slider-mask-3']").siblings('div').last().children('div').first().next().should('exist', 'be.visible').click()
        cy.get("div[id = 'w-slider-mask-3']").siblings('div').last().children('div').last().should('exist', 'be.visible').click()

        cy.get("div[id = 'usecase4']").should('exist', 'be.visible')
        cy.get("div[id = 'usecase4']").children('div').children('div').last().children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Patient Monitoring and Engagement')                         // Right Text block check
        cy.get("div[id = 'usecase4']").children('div').children('div').last().children('p').should('exist', 'be.visible').and('contain', 'Engage your patients in pursuit of an optimal outcome by providing them a personalized, transparent and entirely automated outcomes follow up experience.')

    })

    it("Usecase 5 block check", () => {
        cy.viewport(1920, 1080)

        cy.get("div[id = 'usecase5']").should('exist', 'be.visible')
        cy.get("div[id = 'usecase5']").children('div').children('div').first().children('h1').children('strong').should('exist', 'be.visible').and('contain', 'New Revenues from Industry')                         // Left Text block check
        cy.get("div[id = 'usecase5']").children('div').children('div').first().children('p').should('exist', 'be.visible').and('contain', 'Connect your existing patient flows to a growing number of industry manufacturers looking for regulatory, marketing or research-based studies/trials.')

        cy.get("div[id = 'w-slider-mask-4']").children('div').first().should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa215e558712101f31b23d_Stemform%20Circle%20Page.png"), linear-gradient(rgba(13, 31, 51, 0.9), rgba(13, 31, 51, 0.9)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61aa215e558712101f31b23d_Stemform%20Circle%20Page.png")') //Block images check

    })

    it("Collaborator block check", () => {
        cy.viewport(1920, 1080)

        cy.get("div[class = 'section-9 wf-section']").last().should('exist', 'be.visible')
        cy.get("div[class = 'section-9 wf-section']").last().children('div').children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Featured Practitioner Circles')
        

    })

})