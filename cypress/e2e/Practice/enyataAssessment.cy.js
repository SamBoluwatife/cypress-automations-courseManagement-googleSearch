import 'cypress-file-upload'

describe ("UI Automation", ()=> {

    beforeEach('Visit the website', ()=> {
        cy.visit("https://tutor.enyata.com/")
    })

    it("To verify that users with valid credentials can login successfully", ()=>{
        cy.get("input[id='Email']").type("Enyatauser@yopmail.com")
        cy.get("input[name='password']").type("P@ssw0rd")
        cy.get("button[type='submit']").should('be.enabled').click()
        cy.get('.ub-bs_17sc08g').should('be.visible').contains('Authentication Successful')
        
    })

    it("To verify that users with invalid credentials are unable to login", ()=>{
        cy.get("input[id='Email']").type("Enyatauser@gmail.com")
        cy.get("input[name='password']").type("passw0rD@")
        cy.get("button[type='submit']").should('be.enabled').click()
        cy.get('.ub-bs_17sc08g').should('be.visible').contains('Invalid credentials provided')
        
        
    })

    it("To verify that the login button is disabled when a compulsory field is empty", ()=>{
        cy.get("input[id='Email']").type("Enyatauser@gmail.com")
        cy.get("input[name='password']").type(" ") 
        cy.get("button[type='submit']").should('be.disabled')
        
    })

    it("Create course", ()=>{
        cy.get("input[id='Email']").type("Enyatauser@yopmail.com")
        cy.get("input[name='password']").type("P@ssw0rd")
        cy.get("button[type='submit']").should('be.enabled').click()
        cy.get('.ub-bs_17sc08g').should('be.visible').contains('Authentication Successful')
        cy.get("a[href='/dashboard/courses']").click()
        cy.get("button[class='chakra-button css-1wd62wy']").click()
        //course without ceertificate
        cy.get("button[data-testid='create-without-quiz']").click()   
        //step1
        cy.get("input[name='title']").type('Cypress 101')
        cy.get('[class="chakra-select css-e4yag9"]').select('Free')
        cy.get('[class="chakra-textarea css-tvg9v3"]').type('A course showing how cypress works')
        cy.get('#image-label').uploadFile('enyata.png')
        cy.get("input[placeholder='Enter benefit']").type('Benefit')
        cy.get("button[type='submit']").should('be.enabled').click()
        //step2
        cy.get('[class="chakra-button css-ntmkuj"]').click()
        cy.get("input[name='course-topic']").type('How to use Cypress')
        cy.get("input[name='lesson-title']").type('Title')
        



        
        
    })
})