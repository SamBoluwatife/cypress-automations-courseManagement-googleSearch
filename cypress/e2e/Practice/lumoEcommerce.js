describe ('End to End Testing', ()=> {
    it.skip('To ensure that users can signup successfully', ()=> {

        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('img').should('be.visible');

        cy.get("header[class='page-header'] li:nth-child(3) a:nth-child(1)").click();

        cy.url().should('contains','/customer/account/create/')
        
        cy.get(".base").should('have.text','Create New Customer Account');

        //input signup information
        cy.get('#firstname').click().type('Jane').should('have.value','Jane');
        
        cy.get('#lastname').click().type('Doughnut')
        .should('have.value','Doughnut');
        
        cy.get('#email_address').click().type('janedoe@nonsensemail.com')
        .should('have.value','janedoe@nonsensemail.com');
        
        cy.get("#password").click().type('Incorrect123')
       
        cy.get("#password-confirmation").click().type('Incorrect123')
        
        cy.get("button[title='Create an Account']").click();
        
        //assertions to cofirm successful account creation
        cy.get('.message-success > div').contains('Thank you for registering');
        
        cy.get("div[class='panel header']").contains('Welcome, Jane Doughnut');


    })

    it('To ensure that users can signin successfully', ()=> {

        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('img').should('be.visible');
  
        //input signin information
        cy.get("div[class='panel header'] li[data-label='or']").click();
        
        cy.get('.base').should('have.text','Customer Login');
        
        cy.get('#email').click().type('janedoe@nonsensemail.com')
        .should('have.value','janedoe@nonsensemail.com');
        
        cy.get('#pass').click().type('Incorrect123')
        .should('have.value','Incorrect123')

        cy.get('#send2').click()

        cy.get("div[class='panel header']").contains('Welcome, Jane Doughnut'); 

    })

    it('To ensure users can add products to cart successfully', ()=> {

        cy.get("#option-label-color-93-item-50").click();

        cy.get("#option-label-size-143-item-169").click();


     
        





    })

    it('To ensure that users cannot add products with colors and sizes to cart without specifying them', ()=> {

        
    })


















})