Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('RegenMed Home Page', function () {

    it("Upper Nav Dashboard Check", () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })
        cy.url().should("include", 'https://www.rgnmed.com/')
        cy.get("div[id = 'up']").should('exist', 'be.visible')

        cy.get("a[class = 'brand-2 short-logo w-nav-brand w--current']").should('exist', 'be.visible').children('img').should('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269770055f6856a53f51def_logo_Signature_short.svg')    // Regenmed ico

        cy.get("a[class = 'menu-link-nav-2 open-sans w-nav-link w--current']").should("contain", "Home").and('exist', 'be.visible')                                                                                           // Home link

        cy.get("a[href = '/circle-academies']").should("contain", "Circle Academies").and('exist', 'be.visible')

        cy.get("div[id = 'w-dropdown-toggle-0']").should("contain", "Circles").and('exist', 'be.visible') 
        cy.get("div[id='w-dropdown-toggle-0']").should("contain", "Circles").trigger('mouseover')
        cy.get("nav[id='w-dropdown-list-0']").should("contain", "Overview").and('exist', 'be.visible')
        cy.get("nav[id='w-dropdown-list-0']").should("contain", "Practitioners").and('exist', 'be.visible')                                                                                                             // Circles dropdown
        cy.get("nav[id='w-dropdown-list-0']").should("contain", "Industry").and('exist', 'be.visible')

        cy.get("div[id = 'w-dropdown-toggle-2']").should("contain", "Technology").and('exist', 'be.visible') 
        cy.get("div[id='w-dropdown-toggle-2']").should("contain", "Technology").trigger('mouseover')
        cy.get("nav[id='w-dropdown-list-2']").should("contain", "Overview").and('exist', 'be.visible')
        cy.get("nav[id='w-dropdown-list-2']").should("contain", "Releases").and('exist', 'be.visible')                                                                                                                    // Technology dropdown
        cy.get("nav[id='w-dropdown-list-2']").should("contain", "Support").and('exist', 'be.visible')

        cy.get("a[href = '/latest']").should("contain", "Latest").and('exist', 'be.visible')                                                                                                                              // Latest Link

        cy.get("div[id = 'w-dropdown-toggle-4']").should("contain", "About").and('exist', 'be.visible')
        cy.get("div[id='w-dropdown-toggle-4']").should("contain", "About").trigger('mouseover')
        cy.get("nav[id='w-dropdown-list-4']").should("contain", "Mission").and('exist', 'be.visible')
        cy.get("nav[id='w-dropdown-list-4']").should("contain", "Advisory Board").and('exist', 'be.visible')                                                                                                             // About dropdown
        cy.get("nav[id='w-dropdown-list-4']").should("contain", "Team").and('exist', 'be.visible')
        cy.get("nav[id='w-dropdown-list-4']").should("contain", "Careers").and('exist', 'be.visible')
        cy.get("nav[id='w-dropdown-list-4']").should("contain", "Contact Us").and('exist', 'be.visible')

        cy.get("a[class = 'menu-link-nav-2 contact open-sans w-nav-link']").should('exist', 'be.visible').and('have.attr', 'href', 'https://incytesapp.co/auth/login?utm_source=website&utm_medium=topnav&utm_campaign=nocamp').and('contain', 'Login') // InCytes tm Login button
        
        
    })

    it("Upper Container Check", () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })
        
        cy.get("div[id = 'mission']").should('exist', 'be.visible').and('have.css', 'background-image', 'url("https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/61658c033d9f3e3e5ba29730_iStock-140449928edited3.jpg")')
        cy.get("h1[class = 'about-title-3']").children('strong').should('exist', 'be.visible').and('contain', 'Supporting Healthcare Influencers Around The World')                                                       // First text block with button
        cy.get("p[class = 'paragraph-30 with-hero']").should('exist', 'be.visible').and('contain', 'Turnkey Solutions For Evidence-Based Thought Leadership')

        cy.get("div[id = 'mission']").children('div').children('div').children('a').should('exist', 'be.visible').and('contain', 'Request a Demo').and('have.attr', 'href', 'https://info.rgnmed.com/circles-get-started').invoke('removeAttr', 'target').click() // Request a demo button check
   
        cy.url().should('include', 'https://info.rgnmed.com/circles-get-started')

    })

    it("Creating Influence in Healthcare Container Check", () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[class = 'container _2-col title-left solutions rwe home _1-section']").should('exist', 'be.visible')                                                                                                           // Head div check
        cy.get("div[class = 'container _2-col title-left solutions rwe home _1-section']").children("h1").children('strong').should('exist', 'be.visible').and('contain', 'Creating Influence in Healthcare')
                                                                                                                                 

        cy.get("div[id = 'w-node-_26642530-0413-f05a-85d9-4fcef347920c-8fff9fa8']").should('exist', 'be.visible')                                                                                                                          // Text check
        cy.get("div[id = 'w-node-_26642530-0413-f05a-85d9-4fcef347920c-8fff9fa8']").children('div').children('p').should('exist', 'be.visible').and('contain', 'The most powerful healthcare influencers')

        cy.get("img[src = 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/616008ef7a1cc09ca3fe04b0_The%20Rise%20of%20Real-World%20Evidence-squooshed.jpg']").should('exist', 'be.visible')                                // Image check
       
    })

 
    it("Each Practitioner Has Something Important To Say Container Check", () => {
        cy.viewport(1920, 1080)

        cy.get("div[class = 'section-9 home wf-section']").should('exist', 'be.visible')                                                                                                                                     // Whole "Circles" div
        cy.get("h1[class = 'heading-21 rwe']").first().children("strong").should('exist', 'be.visible').and('contain', 'Each Practitioner Has Something Important To Say')                                                           // H1 text check

        cy.get("div[class = 'image-overlay left-triangle']").siblings('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/6269712855f6850833f4f83a_rgnmed-academy-880x666.png') //Image Check
      
        cy.get("div[id = 'w-node-_8e83f3ca-56d2-a960-83d2-5e5f4dd946ca-8fff9fa8']").children('div').children('p').should('exist', 'be.visible').and('contain', 'Everyday diagnoses, treatment plans, product selection and outcomes measures represent critical sources') // Text check
                                                                                                                                                                                                                   
        cy.get("div[id = 'w-node-_8e83f3ca-56d2-a960-83d2-5e5f4dd946ca-8fff9fa8']").children('div').children('a').should('have.attr', 'href', 'https://info.rgnmed.com/circles-get-started').and('contain', 'Request a Demo').invoke('removeAttr', 'target').click()   // Request a demo button check
        cy.url().should('include', 'https://info.rgnmed.com/circles-get-started')

    })

    it("How Does One Benefit Container Check", () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("h1[class = 'heading-21 rwe']").children("strong").should('exist', 'be.visible').and('contain', 'How Does One Benefit?')                                                                                      //"How Does One Benefit?" h1 check                                                                                                               

        cy.get("div[id = 'w-node-_0a580537-9949-c46e-f1ab-17230671317c-8fff9fa8']").children('div').children('p').should('exist', 'be.visible').and('contain', 'In multiple ways')                                          // Text block check
        
        cy.get("div[id = 'w-node-_0a580537-9949-c46e-f1ab-172306713182-8fff9fa8']").children('iframe').should('exist', 'be.visible').and('have.attr', 'src', '//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXfXHsrnwEFM%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXfXHsrnwEFM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXfXHsrnwEFM%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube')      // Video block check
        
    })

    it("How Does One Begin Container Check", () => {
        cy.viewport(1920, 1080)

        cy.get("h1[class = 'heading-21 rwe']").children("strong").should('exist', 'be.visible').and('contain', 'How Does One Begin?')                                                                                         // Head Check

        cy.get("div[id = 'w-node-_4f1f5402-c4a4-37c1-cee8-681e8a56573f-8fff9fa8']").children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/6242c9083fd0d0495e5e92e2/6242c9083fd0d0c6685e934b_professional-collaboration-and-fulfillment%402x.jpg') // Image check                                                                            

        cy.get("div[id = 'w-node-_4f1f5402-c4a4-37c1-cee8-681e8a565743-8fff9fa8']").children('div').children('p').should('exist', 'be.visible').and('contain', 'RegenMed offers tailored solutions to providers and other healthcare professional categories.')        // Text block check

        cy.get("p[class = 'paragraph-46 news-column open-sans central-column']").children('strong').should('exist', 'be.visible').and('contain', 'Common features include:')

        cy.get("div[class = 'div-block-87']").children('div').first().children('div').first().children('span').last().should('exist', 'be.visible').and('contain', 'Turnkey and integrated. Minimal burden for the busy practitioner.')                //First line left

        cy.get("div[class = 'div-block-87']").children('div').first().children('div').first().next().children('span').last().should('exist', 'be.visible').and('contain', 'Ongoing clinical, scientific, business and technical support.')              //Second line

        cy.get("div[class = 'div-block-87']").children('div').first().children('div').first().next().next().children('span').last().should('exist', 'be.visible').and('contain', ' and other social media strategy, content preparation and execution.') //Third line
        cy.get("div[class = 'div-block-87']").children('div').first().children('div').first().next().next().children('a').should('exist', 'be.visible').and('have.attr', 'href', '/circle-academies').click()
        cy.url().should('include', 'https://www.rgnmed.com/circle-academies', { timeout: 120000 })
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[class = 'div-block-87']").children('div').first().children('div').last().children('span').first().next().should('exist', 'be.visible').and('contain', 'Clinical Grade') //Fourth line
        cy.get("div[class = 'div-block-87']").children('div').first().children('div').last().children('a').should('exist', 'be.visible').and('have.attr', 'href', '/technology').click()
        cy.url().should('include', 'https://www.rgnmed.com/technology')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[class = 'div-block-87']").children('div').last().children('div').first().children('span').last().should('exist', 'be.visible').and('contain', ' and call center: burden-free patient outcomes capture.')                //First line right
        cy.get("div[class = 'div-block-87']").children('div').last().children('div').first().children('a').should('exist', 'be.visible').and('have.attr', 'href', 'https://www.clinician.rgnmed.com/support-post/benchmarc-tm-patient-portal').click()
        cy.url().should('include', 'https://www.clinician.rgnmed.com/support-post/benchmarc-tm-patient-portal')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[class = 'div-block-87']").children('div').last().children('div').first().next().children('span').last().should('exist', 'be.visible').and('contain', 'Fresh, impactful content in various media formats.')              //Second line

        cy.get("div[class = 'div-block-87']").children('div').last().children('div').first().next().next().children('span').last().should('exist', 'be.visible').and('contain', 'Develop influencer monetization opportunities.')          //Third line

        cy.get("div[class = 'div-block-87']").children('div').first().children('div').last().children('span').last().should('exist', 'be.visible')                                                                                          //Fourth line

        cy.get("div[class = 'container _2-col title-left solutions rwe home features more-info']").children('p').should('exist', 'be.visible').and('contain', 'Whatever your aspirations in the context of healthcare thought-leadership, please ')     //Under Text and contact us Link
        cy.get("div[class = 'container _2-col title-left solutions rwe home features more-info']").children('p').children('a').should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/circles-get-started').click()
        cy.url().should('include', 'https://info.rgnmed.com/circles-get-started')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

    })


    it("Contact Us Container Check", () => {
        cy.viewport(1920, 1080)

        cy.get("div[class = 'div-block-66']").children('h1').should('exist', 'be.visible').and('contain', 'Speak with one of our experts to discuss how Circles could support your specific goals.')
        cy.get("div[class = 'div-block-66']").children('a').should('exist', 'be.visible').and('have.attr', 'href', '/contact').click()                                                 //Contact Us block and button
        cy.url().should('include', 'https://www.rgnmed.com/contact')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })
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
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').first().next().should('exist', 'be.visible').and('have.attr', 'href', '/circles').and('contain', 'Circles').click()                  // Circles link
        cy.url().should('include', 'https://www.rgnmed.com/circles')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').first().next().next().should('exist', 'be.visible').and('have.attr', 'href', '/technology').and('contain', 'Technology').click()     // Technology link
        cy.url().should('include', 'https://www.rgnmed.com/technology')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').first().next().next().next().should('exist', 'be.visible').and('have.attr', 'href', '/latest').and('contain', 'Latest').click()              //Latest link
        cy.url().should('include', 'https://www.rgnmed.com/latest')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').last().should('exist', 'be.visible').and('have.attr', 'href', 'https://www.clinician.rgnmed.com/support-post/incytes-privacy-policy').and('contain', 'Privacy Policy') // Privacy Policy link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456161-7c456158']").children('a').last().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://www.clinician.rgnmed.com/support-post/incytes-privacy-policy')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").should('exist', 'be.visible')                                                                                                       // Right block check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').should('exist', 'be.visible').and('contain', 'Quick Links')                                                         //"Quick Links" div check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').first().should('exist', 'be.visible').and('have.attr', 'href', '/about').and('contain', 'About').click()       // About link
        cy.url().should('include', 'https://www.rgnmed.com/about')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').first().next().should('exist', 'be.visible').and('have.attr', 'href', '/contact').and('contain', 'Contact').click()   // Contact link
        cy.url().should('include', 'https://www.rgnmed.com/contact')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').first().next().next().should('exist', 'be.visible').and('have.attr', 'href', 'https://incytesapp.co/auth/login?utm_source=website&utm_medium=botnav&utm_campaign=nocamp').and('contain', 'Sign In')  //Sign in link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').first().next().next().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://incytesapp.co/auth/login?utm_source=website&utm_medium=botnav&utm_campaign=nocamp')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').last().should('exist', 'be.visible').and('have.attr', 'href', 'https://info.rgnmed.com/newsletter').and('contain', 'Newsletter Sign-up') // Newsletter Sign-up link
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c45616c-7c456158']").children('div').siblings('a').last().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://info.rgnmed.com/newsletter')
        cy.visit('https://www.rgnmed.com/', { timeout: 120000 })

        cy.get("div[class = 'footer-wrapper']").first().should('exist', 'be.visible')                                                                                                                                   //Copyright div check
        cy.get("div[class = 'text-rights footer']").should('exist', 'be.visible').and('contain', 'Regenerative Medicine LLC. All rights reserved.')                                                                     // Copyright text check

        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").should('exist', 'be.visible')                                                                                                       // "Up" button div check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").children('a').should('exist', 'be.visible').and('have.attr', 'href', '#overview')                                                     // "Up" button Link check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").children('a').children('img').should('exist', 'be.visible').and('have.attr', 'src', 'https://uploads-ssl.webflow.com/5f6a09b2d5e6e4ea857ae242/626972a8fa105d9d026bc7ee_NavArrow.svg')// "Up" button image check
        cy.get("div[id = 'w-node-_77c3d74f-d703-41b4-2c3d-621f7c456178-7c456158']").children('a').click()                                                                                                               // "Up" button url check
        cy.url().should('include', 'https://www.rgnmed.com/#overview')
         
    })
})