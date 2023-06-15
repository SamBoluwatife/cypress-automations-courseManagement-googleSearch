describe ('TopSet Platform', ()=> {

    beforeEach ('Visit the Topset login page', ()=> {
        cy.visit('https://topset-dev.vercel.app/login')
        cy.url().should('eq', 'https://topset-dev.vercel.app/login')
    })

    
    it ('To verify that a user can successfully login with valid credentials', ()=> { 
        cy.get("input[placeholder='Email Address']")
        .type("qa.analyst@email.com")
        .should('have.value', 'qa.analyst@email.com');
        
        cy.get("input[placeholder='Password']")
        .type('Password123!')
        .should('have.value', 'Password123!');

        cy.get("button[type='submit']")
        .click();

        
    })

    it ('To verify that login is unsuccessful with invalid credentials', ()=> {
        cy.get("input[placeholder='Email Address']")
        .type("qa.analyst@gmail.net")
        .should('have.value', 'qa.analyst@gmail.net');
        
        cy.get("input[placeholder='Password']")
        .type('passWord321!')
        .should('have.value', 'passWord321!');

        cy.get("button[type='submit']")
        .click();
    })

    it ('To verify that an error message displayed when the required fields are left blank', ()=> {
        cy.get("button[type='submit']")
        .click();

        
        cy.get("p[class='text-red-500 text-xs mt-1']")
        //.contains('Password is required')
        .should('have.text','Email is requiredPassword is required'); 

    })

    it ('To verify that an error message displayed when the password does not meet the minimum length requirement', ()=> {
        cy.get("input[placeholder='Email Address']")
        .type("qa.analyst@email.com")
        .should('have.value', 'qa.analyst@email.com');
        
        cy.get("input[placeholder='Password']")
        .type('Pass123')
        .should('have.value', 'Pass123');

        cy.get("button[type='submit']")
        .click();

        cy.get("p[class='text-red-500 text-xs mt-1']")
        .should('have.text', 'password must be at least 8 characters')
    })
})