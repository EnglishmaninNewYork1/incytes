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
        cy.get("div[id='w-dropdown-toggle-0']").should("contain", "Circles").trigger('mouseover')
        cy.get("nav[id='w-dropdown-list-0']").should("contain", "Overview").and('exist', 'be.visible')         //Go to Circles Overview Page
        cy.get("nav[id='w-dropdown-list-0']").children('a').first().should("have.attr", 'href', "https://www.rgnmed.com/circles#circleoverview").and('exist', 'be.visible').click()

        cy.url().should("include", 'https://www.rgnmed.com/circles#circleoverview')
        cy.get("div[id = 'circleoverview']").should('exist', 'be.visible')
        cy.get("div[id = 'circleoverview']").should('have.css', 'background-image', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61bc9523ceb7c55200866d93_iStock-871431382.jpg")') // Bacground image check
        cy.get("div[class = 'div-block-16 mission']").should('exist', 'be.visible')

        cy.get("h1[class = 'about-title with-sup-text']").should('exist', 'be.visible')
        cy.get("h1[class = 'about-title with-sup-text']").children('strong').should('exist', 'be.visible').and('contain', 'Circles')   // Circles block head name check

        cy.get("h2[class = 'about-title careers']").should('exist', 'be.visible')
        cy.get("h2[class = 'about-title careers']").children('strong').should('exist', 'be.visible').and('contain', 'Clinical solutions for generating evidence, collaboration and growth.') // H2 text check

        cy.get("p[class = 'paragraph-7 with-hero']").should('exist', 'be.visible')
        cy.get("p[class = 'paragraph-7 with-hero']").children('span').should('exist', 'be.visible').and('contain', ' Circles connect practitioners from around the world in sharing, analyzing and using their invaluable real-world evidence and experiences. Powered by a patent-pending electronic data capture system, Circles offer an engaging, cost-effective solution for any number of diverse evidence-based initiatives.') // Main text block check

        cy.get("div[class = 'div-block-16 mission']").children('a').should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/circles-get-started').and('contain', "Request a Demo")
        cy.get("div[class = 'div-block-16 mission']").children('a').should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/circles-get-started').invoke('removeAttr', 'target').click()  //Request a demo button Check
        cy.url().should("include", 'https://info.rgnmed.com/circles-get-started')
    })


    it("Middle Container Check", () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.rgnmed.com/circles#circleoverview', { timeout: 120000 })
        cy.url().should("include", 'https://www.rgnmed.com/circles#circleoverview')

        cy.get("div[class = 'section-17 what-is-a-circle wf-section']").should('exist', 'be.visible')
        cy.get("div[class = 'div-block-15 tech text-left full-width centered']").should('exist', 'be.visible')
        cy.get("div[class = 'div-block-15 tech text-left full-width centered']").children('h1').should('exist', 'be.visible').and('contain', 'What are Circles?')
        cy.get("div[class = 'div-block-15 tech text-left full-width centered']").children('p').should('exist', 'be.visible').and('contain', 'A Circle is comprised of:')


        cy.get("div[class = 'inner-div-example vertical-align w-clearfix']").should('exist', 'be.visible')
        cy.get("div[class = 'inner-div-example vertical-align w-clearfix']").children('div').should('exist', 'be.visible')

        cy.get("div[class = 'what-is-a-circle-text']").should('contain', 'One or more healthcare professionals with')
        cy.get("div[class = 'what-is-a-circle-text']").should('contain', 'mutual evidence-based objectives, who')
        cy.get("div[class = 'what-is-a-circle-text']").should('contain', 'deploy our technology to securely generate and ')
        cy.get("div[class = 'what-is-a-circle-text']").should('contain', 'derive value from their shared practice RWD.')
        cy.get("div[class = 'what-is-a-circle-text']").should('contain', '​Circles are scalable, naturally growing membership, RWD, and industry sponsors over time.​')

        cy.get("div[class = 'what-is-a-circle-text']").children('strong').should('exist', 'be visible').and('contain', '(1)')
        cy.get("div[class = 'what-is-a-circle-text']").children('strong').should('exist', 'be visible').and('contain', '(2)')
        cy.get("div[class = 'what-is-a-circle-text']").children('strong').should('exist', 'be visible').and('contain', '(3)')
        cy.get("div[class = 'what-is-a-circle-text']").children('strong').should('exist', 'be visible').and('contain', '(4)')

        cy.get("div[class = 'inner-div-example vertical-align w-clearfix']").children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61bc7edd86ec0a89f5d3000f_rgnmed-circular-graph-round.png')

        cy.get("div[class = 'div-block-15 tech text-left full-width centered']").children('a').first().should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/circles-get-started').and('contain', "Request a Demo")
        cy.get("div[class = 'div-block-15 tech text-left full-width centered']").children('a').first().should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/circles-get-started').invoke('removeAttr', 'target').click()
        cy.url().should("include", 'https://info.rgnmed.com/circles-get-started')

        cy.visit('https://www.rgnmed.com/circles#circleoverview', { timeout: 120000 })
        cy.get("div[class = 'div-block-15 tech text-left full-width centered']").children('a').next().should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/circles').and('contain', "Learn More")
        cy.get("div[class = 'div-block-15 tech text-left full-width centered']").children('a').next().should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/circles').invoke('removeAttr', 'target').click()
        cy.url().should("include", 'https://info.rgnmed.com/circles')
    })


    it("Types of Circles Block Check", () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.rgnmed.com/circles#circleoverview', { timeout: 120000 })
        cy.url().should("include", 'https://www.rgnmed.com/circles#circleoverview')

        cy.get("div[class = 'section-16 no-bm wf-section']").should('exist', 'be.visible')
        cy.get("div[class = 'div-block-38 circles']").should('exist', 'be.visible')
        cy.get("div[class = 'div-block-38 circles']").children('h1').should('exist', 'be.visible').children('strong').should('exist', 'be.visible').and('contain', 'What Circles Can Do for You')
        cy.get("div[class = 'div-block-38 circles']").children('p').should('exist', 'be.visible').and('contain', 'Circles provide healthcare practitioners and industry professionals  with a diverse number of benefits for a diverse number of purposes.')

        cy.get("div[class = 'div-block-30 use-case-3-cards']").should('exist', 'be.visible')
        cy.get("div[class = 'div-block-30 use-case-3-cards']").children('a').first().should('exist', 'be.visible').and('have.attr', 'href', '/circles/practitioners')
        cy.get("div[class = 'div-block-30 use-case-3-cards']").children('a').first().children('div').first().should('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61bc92b82fa12734a9b5cf0a_nurse-nursing-home-patient-doctor-face-mask-mature-senior-381873330.jpg")')
        cy.get("div[class = 'div-block-30 use-case-3-cards']").children('a').first().children('h3').should('exist', 'be.visible').and('contain', 'Circles for Practitioners')
        cy.get("div[class = 'div-block-30 use-case-3-cards']").children('a').first().children('p').should('exist', 'be.visible').and('contain', 'Learn how to improve you clinical decision making, collaborate professionally with doctors from around the world and participate in more sponsored studies.')


        cy.get("div[class = 'div-block-30 use-case-3-cards']").children('a').next().should('exist', 'be.visible').and('have.attr', 'href', '/circles/industry')
        cy.get("div[class = 'div-block-30 use-case-3-cards']").children('a').next().children('div').first().should('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61bc8f7c2fa1277cc7b5bbc4_industry-professionals.png")')
        cy.get("div[class = 'div-block-30 use-case-3-cards']").children('a').next().children('h3').should('exist', 'be.visible').and('contain', 'Circles for Industry Professionals')
        cy.get("div[class = 'div-block-30 use-case-3-cards']").children('a').next().children('p').should('exist', 'be.visible').and('contain', 'Learn how to leverage Circles to boost sales, satisfy regulatory requirements, improve customer engagement.')
    })

    it("Contact Us Container check", () => {
        cy.viewport(1920, 1080)
        cy.get("div[class = 'div-block-13 contact-form let-s-talk']").should('exist', 'be.visible')
        cy.get("div[class = 'div-block-13 contact-form let-s-talk']").children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Contact Us')
        cy.get("div[class = 'div-block-13 contact-form let-s-talk']").children('p').should('exist', 'be.visible').and('contain', 'Speak with one of our experts to discuss how')
        cy.get("div[class = 'div-block-13 contact-form let-s-talk']").children('p').should('exist', 'be.visible').and('contain', 'Circles could support your specific goals.')

        cy.get("div[class = 'div-block-13 contact-form let-s-talk']").children('div').children('div').children('form').should('exist', 'be.visible').and('have.attr', 'id', 'wf-form-Contact-Us-Circles')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').first().should('have.attr', 'name', 'firstname')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().should('have.attr', 'name', 'lastname')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().next().should('have.attr', 'name', 'email-2')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().next().next().should('have.attr', 'name', 'jobtitle')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().next().next().next().should('have.attr', 'name', 'company')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().next().next().next().next().should('have.attr', 'name', 'Message')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().next().next().next().next().next().should('have.attr', 'type', 'submit')

        cy.get("div[class = 'div-block-26 let-s-talk']").should('exist', 'be.visible')
        cy.get("div[class = 'div-block-26 let-s-talk']").children('p').should('exist', 'be.visible').and('contain', 'All emails ​include an unsubscribe link. You ​may opt-out at any time. ​See our')
        cy.get("div[class = 'div-block-26 let-s-talk']").children('p').children('a').should('exist', 'be.visible').and('have.attr', 'href', 'https://www.clinician.rgnmed.com/support-post/incytes-privacy-policy')
        cy.get("div[class = 'div-block-26 let-s-talk']").children('p').children('a').should('contain', 'privacy policy').invoke('removeAttr', 'target').click()
        cy.url().should("include", 'https://www.clinician.rgnmed.com/support-post/incytes-privacy-policy')


    })


    it("BOTTOM Container Check", () => {
        cy.viewport(1920, 1080)

        cy.get("div[class = 'footer-10 new']").should('exist', 'be.visible')                                                                                                                                            //Whole footer block check

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45615b-7c456158']").should('exist', 'be.visible')                                                                                                       // Left block check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45615b-7c456158']").children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/5f6cb06211f4b81b06fc6519_icon%20LOGO.svg') //IMG check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45615b-7c456158']").children('p').should('exist', 'be.visible').and('contain', 'RegenMed connects practitioners, patients and industry sponsors in the generation of actionable real-world evidence.') //Text Check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45615b-7c456158']").children('div').children('span').should('exist', 'be.visible').and('have.attr', 'class', 'IN-widget')                               // Linkedin icon check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45615b-7c456158']").children('div').children('script').should('exist', 'be.visible').and('have.attr', 'src', 'https://platform.linkedin.com/in.js')     //Linkedin link check

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").should('exist', 'be.visible')                                                                                                       // Middle block check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('div').should('exist', 'be.visible').and('contain', 'Quick Links')                                                         //"Quick Links" div check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').should('exist', 'be.visible').and('have.attr', 'href', '/circle-academies').and('contain', 'Circle Academies')
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').next().should('exist', 'be.visible').and('have.attr', 'href', '/circles').and('contain', 'Circles')                          // Circles link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').next().next().should('exist', 'be.visible').and('have.attr', 'href', '/technology').and('contain', 'Technology')             // Technology link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').next().next().next().should('exist', 'be.visible').and('have.attr', 'href', '/latest').and('contain', 'Latest')              //Latest link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').last().should('exist', 'be.visible').and('have.attr', 'href', 'https://www.clinician.rgnmed.com/support-post/incytes-privacy-policy').and('contain', 'Privacy Policy') // Privacy Policy link

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").should('exist', 'be.visible')                                                                                                       // Right block check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').should('exist', 'be.visible').and('contain', 'Quick Links')                                                         //"Quick Links" div check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').should('exist', 'be.visible').and('have.attr', 'href', '/about').and('contain', 'About')              // About link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').next().should('exist', 'be.visible').and('have.attr', 'href', '/contact').and('contain', 'Contact')   // Contact link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').next().next().should('exist', 'be.visible').and('have.attr', 'href', 'https://incytesapp.co/auth/login?utm_source=website&utm_medium=botnav&utm_campaign=nocamp').and('contain', 'Sign In')  //Sign in link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').next().next().next().should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/newsletter').and('contain', 'Newsletter Sign-up') // Newsletter Sign-up link

        cy.get("div[class = 'footer-wrapper']").first().should('exist', 'be.visible')                                                                                                                                   //Copyright div check
        cy.get("div[class = 'text-rights footer']").should('exist', 'be.visible').and('contain', 'Regenerative Medicine LLC. All rights reserved.')                                                                     // Copyright text check

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").should('exist', 'be.visible')                                                                                                       // "Up" button div check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").children('a').should('exist', 'be.visible').and('have.attr', 'href', '#overview')                                                     // "Up" button Link check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").children('a').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/626972a8fa105d9d026bc7ee_NavArrow.svg')// "Up" button image check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").children('a').click()                                                                                                               // "Up" button url check
        cy.url().should('include', 'https://www.rgnmed.com/circles#overview')

    })
})