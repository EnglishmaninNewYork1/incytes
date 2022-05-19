Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('RegenMed Circle Academies Page check', function () {

    it("Circles Academies Upper Block Check", () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 });
        cy.url().should("include", 'https://www.rgnmed.com/')
        cy.get("div[id = 'up']").should('exist', 'be.visible')

        cy.get("nav[role = 'navigation']").children('a').first().next().click()  //Circle Academies link check
        cy.url().should("include", 'https://www.rgnmed.com/circle-academies')

        cy.get("div[id = 'overview']").should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/62697712c7e0f1dc1a895bea_Circle%20Academies%20(darkening%20layer).png")')               //Header block image and text check
        cy.get("h1[class = 'about-title-3 with-sup-text']").children('strong').should('exist', 'be.visible').and('contain', 'Circle Academies')
    })


    it("Introduction Container Check", () => {
        cy.viewport(1920, 1080)

        cy.get("p[class = 'paragraph-45 left-align']").should('exist', 'be.visible').and('contain', 'Circle Academies help practitioners')
        cy.get("p[class = 'paragraph-45 left-align']").children('a').should('exist', 'be.visible').and('have.attr', 'href', 'https://rgnmed.circle.so/').invoke('removeAttr', 'target').click()                                                                 //introduction block and link check
        cy.url().should("include", 'https://rgnmed.circle.so/home')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })
    })


    it("Value Container Check", () => {
        cy.viewport(1920, 1080)

        cy.get("div[class = 'div-block-38 circles value']").children('p').should('exist', 'be.visible').and('contain', 'Each Circle Academy provides value to its members in many forms:')                                                                              //Value block head text
        cy.get("div[class = 'row-2']").first().children('div').first().children('div').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269773937a894408d55bc4e_1.svg')                 //First line left image check
        cy.get("div[class = 'row-2']").first().children('div').first().next().children('div').should('exist', 'be.visible').and('contain', 'Meaningful and sustained collaboration with experts and peers')                                                              //First Line left text check 

        cy.get("div[class = 'row-2']").first().children('div').first().next().next().children('div').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269773937a894d2d655bc50_7.svg')    //First line right image check
        cy.get("div[class = 'row-2']").first().children('div').first().next().next().next().children('div').should('exist', 'be.visible').and('contain', 'Clinical grade yet low-cost EDC and patient engagement technology')                                            //First Line right text check

        cy.get("div[class = 'row-2']").first().next().children('div').first().children('div').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269773937a894380855bc4d_2.svg')           //Second line left image check
        cy.get("div[class = 'row-2']").first().next().children('div').first().next().children('div').should('exist', 'be.visible').and('contain', 'Professional education')                                                                                             //Second Line left text check

        cy.get("div[class = 'row-2']").first().next().children('div').first().next().next().children('div').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269773937a894252f55bc53_8.svg') //Second right right image check
        cy.get("div[class = 'row-2']").first().next().children('div').first().next().next().next().children('div').should('exist', 'be.visible').and('contain', 'Study and trial sponsorship opportunities')                                                                // Second right text check

        cy.get("div[class = 'row-2']").first().next().next().children('div').first().children('div').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269773937a894a76855bc4c_3.svg')           //Third line left image check
        cy.get("div[class = 'row-2']").first().next().next().children('div').first().next().children('div').should('exist', 'be.visible').and('contain', 'Development of standards of care ')                                                                                    //Third Line left text check

        cy.get("div[class = 'row-2']").first().next().next().children('div').first().next().next().children('div').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269773937a8941df655bc54_9.svg') //Third right right image check
        cy.get("div[class = 'row-2']").first().next().next().children('div').first().next().next().next().children('div').should('exist', 'be.visible').and('contain', ' Legal/regulatory compliance')                                                                                // Third right text check

        cy.get("div[class = 'row-2']").first().next().next().next().children('div').first().children('div').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269773937a894b4de55bc4f_4.svg')           //Fourth line left image check
        cy.get("div[class = 'row-2']").first().next().next().next().children('div').first().next().children('div').should('exist', 'be.visible').and('contain', 'Support for clinical decision-making')                                                                                    //Fourth Line left text check

        cy.get("div[class = 'row-2']").first().next().next().next().children('div').first().next().next().children('div').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269773937a894db4755bc56_10.svg') //Fourth right right image check
        cy.get("div[class = 'row-2']").first().next().next().next().children('div').first().next().next().next().children('div').should('exist', 'be.visible').and('contain', 'New service lines ')                                                                                // Fourth right text check

        cy.get("div[class = 'row-2']").first().next().next().next().next().children('div').first().children('div').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269773937a894dddb55bc51_5.svg')           //Fifth line left image check
        cy.get("div[class = 'row-2']").first().next().next().next().next().children('div').first().next().children('div').should('exist', 'be.visible').and('contain', 'Industry discounts ')                                                                                                   //Fifth Line left text check

        cy.get("div[class = 'row-2']").first().next().next().next().next().children('div').first().next().next().children('div').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269773937a894c4c255bc55_11.svg') //Fifth line right image check
        cy.get("div[class = 'row-2']").first().next().next().next().next().children('div').first().next().next().next().children('div').should('exist', 'be.visible').and('contain', 'Support for reimbursement')                                                                                // Fifth line right text check

        cy.get("div[class = 'row-2']").first().next().next().next().next().next().children('div').first().children('div').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269773937a8940c0c55bc52_6.svg')           //Sixth line left image check
        cy.get("div[class = 'row-2']").first().next().next().next().next().next().children('div').first().next().children('div').should('exist', 'be.visible').and('contain', 'Material and support for patient communications, conference presentations and journal articles')                                                                                                //Sixth Line left text check

    })


    it("Features Container Check", () => {
        cy.viewport(1920, 1080)

        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2a4-9571ae9c']").children('div').children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Real-world Evidence')
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2a4-9571ae9c']").children('div').children('p').should('exist', 'be.visible').and('contain', 'Circle Academies are not about mere') //Real-world Evidence Block check
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2ac-9571ae9c']").should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269775ac7e0f1dfae89603e_Real-world%20Evidence%20.svg")') // Image

        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2af-9571ae9c']").children('div').children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Relevance')
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2af-9571ae9c']").children('div').children('p').should('exist', 'be.visible').and('contain', 'The content available in each Academy relates to specific diagnoses, treatment plans') //Relevance Block check
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2ae-9571ae9c']").should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269775ac7e0f1e69c89603f_Relevance%20.svg")') // Image

        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2b8-9571ae9c']").children('div').children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Collaboration')
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2b8-9571ae9c']").children('div').children('p').should('exist', 'be.visible').and('contain', 'Academies provide the platform, tools and clinician-focused user experience') //Collaboration Block check
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2c0-9571ae9c']").should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269775ac7e0f1adc5896040_Collaboration%20.svg")') // Image

        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2c3-9571ae9c']").children('div').children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Always On')
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2c3-9571ae9c']").children('div').children('p').should('exist', 'be.visible').and('contain', 'Circle Academies are active 24/7/365, and accessible from any device.') //Always On Block check
        cy.get("div[class = 'hero-image-latest newsletter technology features-4']").should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269775ac7e0f16dac896041_24_7.svg")') // Image

        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2cc-9571ae9c']").children('div').children('h1').children('strong').should('exist', 'be.visible').and('contain', 'RWE Capture and Reporting')
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2cc-9571ae9c']").children('div').children('p').should('exist', 'be.visible').and('contain', 'Members wishing to form') //RWE Capture and Reporting
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2dd-9571ae9c']").should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269775ac7e0f17e61896044_RWE%20Capture%20and%20Reporting%20-%202.svg")') // Image
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2cc-9571ae9c']").children('div').children('p').children('a').first().should('have.attr', 'href', '/circles#circleoverview').and('contain', 'Circles').click() //Circles Link check
        cy.url().should("include", 'https://www.rgnmed.com/circles#circleoverview')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2cc-9571ae9c']").children('div').children('p').children('a').first().next().should('have.attr', 'href', '/technology#overview').and('contain', 'inCytes').click() // InCytes link check
        cy.url().should("include", 'https://www.rgnmed.com/technology#overview')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2cc-9571ae9c']").children('div').children('p').children('a').last().should('have.attr', 'href', 'https://www.clinician.rgnmed.com/support-post/benchmarc-tm-patient-portal').and('contain', 'Benchmarc').invoke('removeAttr', 'target').click() //Benchmarc link check
        cy.url().should("include", 'https://www.clinician.rgnmed.com/support-post/benchmarc-tm-patient-portal')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2e0-9571ae9c']").children('div').children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Exclusive')
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2e0-9571ae9c']").children('div').children('p').should('exist', 'be.visible').and('contain', 'Circle Academies are for practitioners only.') //Exclusive Block check
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2df-9571ae9c']").should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269775ac7e0f169d4896042_Exclusive%20.svg")') // Image

        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2e9-9571ae9c']").children('div').children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Moderated')
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2e9-9571ae9c']").children('div').children('p').should('exist', 'be.visible').and('contain', 'The content on each Circle Academy is moderated for relevance and value.') //Exclusive Block check
        cy.get("div[id = 'w-node-b9614c25-c2e0-2cc9-127d-f34d2f65b2f1-9571ae9c']").should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269775ac7e0f18aba896043_Moderated%20.svg")') // Image

        cy.get("p[class = 'academy-features-bold-text one-sheet']").children('a').first().should('have.attr', 'href', 'https://uploads-ssl.webflow.com/6242c9083fd0d0495e5e92e2/626948e16045846170ee8d1f_Circle%20Academies%20For%20Pratitioners-Digital.pdf').and('contain', 'here').click() // Circle academies pdf link check
        cy.url().should("include", 'https://uploads-ssl.webflow.com/6242c9083fd0d0495e5e92e2/626948e16045846170ee8d1f_Circle%20Academies%20For%20Pratitioners-Digital.pdf')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("p[class = 'academy-features-bold-text one-sheet']").children('a').last().should('have.attr', 'href', 'https://uploads-ssl.webflow.com/6242c9083fd0d0495e5e92e2/626948e13084c5b999bf3203_Circle%20Academies%20For%20Industries-Digital.pdf').and('contain', 'here').click() //CA for medical product industry link check
        cy.url().should("include", 'https://uploads-ssl.webflow.com/6242c9083fd0d0495e5e92e2/626948e13084c5b999bf3203_Circle%20Academies%20For%20Industries-Digital.pdf')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })
       
    })


    it("Contact Us Container check", () => {
        cy.viewport(1920, 1080)
        cy.get("div[class = 'div-block-13 contact-form let-s-talk academies']").should('exist', 'be.visible')
        cy.get("div[class = 'div-block-13 contact-form let-s-talk academies']").children('h1').children('strong').should('exist', 'be.visible').and('contain', 'Contact Us')
        cy.get("div[class = 'div-block-13 contact-form let-s-talk academies']").children('p').should('exist', 'be.visible').and('contain', 'Speak with one of our experts to discuss how')
        cy.get("div[class = 'div-block-13 contact-form let-s-talk academies']").children('p').should('exist', 'be.visible').and('contain', 'Circles could support your specific goals.')

        cy.get("div[class = 'div-block-13 contact-form let-s-talk academies']").children('div').children('div').children('form').should('exist', 'be.visible').and('have.attr', 'id', 'wf-form-Contact-Us-Circles')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').first().should('have.attr', 'name', 'firstname')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().should('have.attr', 'name', 'lastname')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().next().should('have.attr', 'name', 'email-2')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().next().next().should('have.attr', 'name', 'jobtitle')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().next().next().next().should('have.attr', 'name', 'company')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().next().next().next().next().should('have.attr', 'name', 'Message')
        cy.get("form[id = 'wf-form-Contact-Us-Circles']").children('input').next().next().next().next().next().next().should('have.attr', 'type', 'submit')

        cy.get("div[class = 'div-block-26 let-s-talk']").should('exist', 'be.visible')
        cy.get("div[class = 'div-block-26 let-s-talk']").children('p').should('exist', 'be.visible').and('contain', 'All emails ​include an unsubscribe link.')
        cy.get("div[class = 'div-block-26 let-s-talk']").children('p').children('a').should('exist', 'be.visible').and('have.attr', 'href', 'https://www.clinician.rgnmed.com/support-post/incytes-privacy-policy').and('contain', 'privacy policy').invoke('removeAttr', 'target').click()
        cy.url().should("include", 'https://www.clinician.rgnmed.com/support-post/incytes-privacy-policy')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })
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
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').first().should('exist', 'be.visible').and('have.attr', 'href', '/circle-academies').and('contain', 'Circle Academies').click()     //Circle Academies link
        cy.url().should('include', 'https://www.rgnmed.com/circle-academies')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').first().next().should('exist', 'be.visible').and('have.attr', 'href', '/circles').and('contain', 'Circles').click()                  // Circles link
        cy.url().should('include', 'https://www.rgnmed.com/circles')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').first().next().next().should('exist', 'be.visible').and('have.attr', 'href', '/technology').and('contain', 'Technology').click()     // Technology link
        cy.url().should('include', 'https://www.rgnmed.com/technology')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').first().next().next().next().should('exist', 'be.visible').and('have.attr', 'href', '/latest').and('contain', 'Latest').click()              //Latest link
        cy.url().should('include', 'https://www.rgnmed.com/latest')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').last().should('exist', 'be.visible').and('have.attr', 'href', 'https://www.clinician.rgnmed.com/support-post/incytes-privacy-policy').and('contain', 'Privacy Policy') // Privacy Policy link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').last().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://www.clinician.rgnmed.com/support-post/incytes-privacy-policy')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").should('exist', 'be.visible')                                                                                                       // Right block check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').should('exist', 'be.visible').and('contain', 'Quick Links')                                                         //"Quick Links" div check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').first().should('exist', 'be.visible').and('have.attr', 'href', '/about').and('contain', 'About').click()       // About link
        cy.url().should('include', 'https://www.rgnmed.com/about')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').first().next().should('exist', 'be.visible').and('have.attr', 'href', '/contact').and('contain', 'Contact').click()   // Contact link
        cy.url().should('include', 'https://www.rgnmed.com/contact')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').first().next().next().should('exist', 'be.visible').and('have.attr', 'href', 'https://incytesapp.co/auth/login?utm_source=website&utm_medium=botnav&utm_campaign=nocamp').and('contain', 'Sign In')  //Sign in link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').first().next().next().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://incytesapp.co/auth/login?utm_source=website&utm_medium=botnav&utm_campaign=nocamp')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').last().should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/newsletter').and('contain', 'Newsletter Sign-up') // Newsletter Sign-up link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').last().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://info.rgnmed.com/newsletter')
        cy.visit('https://www.rgnmed.com/circle-academies', { timeout: 120000 })

        cy.get("div[class = 'footer-wrapper']").first().should('exist', 'be.visible')                                                                                                                                   //Copyright div check
        cy.get("div[class = 'text-rights footer']").should('exist', 'be.visible').and('contain', 'Regenerative Medicine LLC. All rights reserved.')                                                                     // Copyright text check

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").should('exist', 'be.visible')                                                                                                       // "Up" button div check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").children('a').should('exist', 'be.visible').and('have.attr', 'href', '#overview')                                                     // "Up" button Link check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").children('a').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/626972a8fa105d9d026bc7ee_NavArrow.svg')// "Up" button image check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").children('a').click()                                                                                                               // "Up" button url check
        cy.url().should('include', 'https://www.rgnmed.com/circle-academies#overview')

    })

})