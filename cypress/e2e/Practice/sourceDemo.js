describe('Source Demo', ()=> {

    it('Failed Login', ()=> {
        
        cy.visit('https://www.saucedemo.com/');
        cy.get('.login_logo').should('be.visible')
        cy.get('#user-name').type('standard_users').should('have.value','standard_users');
        cy.get('#password').type('secret_sauces').should('have.value','secret_sauces');
        cy.get('#login-button').click()
        cy.get('.error-message-container.error').contains('Username and password do not match');
    })

    
    it('Successful Login', ()=> {
        
        cy.get('#user-name').clear().type('standard_user').should('have.value','standard_user');
        cy.get('#password').clear().type('secret_sauce').should('have.value','secret_sauce');
        cy.get('#login-button').click();

        //cy.url().should('eq','https://www.saucedemo.com/inventory.html')

    })

    it('Add to cart', ()=> {
        
        //product1
        cy.get("a[id='item_4_title_link']").contains('Sauce Labs Backpack');
        cy.get("img[alt='Sauce Labs Backpack']").should('be.visible');
        cy.get("#add-to-cart-sauce-labs-backpack").click();

        //product2
        /*cy.get("a[id='item_0_title_link']").contains('Sauce Labs Bike Light');
        cy.get("img[alt='Sauce Labs Bike Light']").should('be.visible');
        cy.get("#add-to-cart-sauce-labs-bike-light").click();

        //product3
        cy.get("a[id='item_1_title_link']").contains('Sauce Labs Bolt T-Shirt');
        cy.get("img[alt='Sauce Labs Bolt T-Shirt']").should('be.visible');
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();

        //product4
        cy.get("a[id='item_5_title_link']").contains('Sauce Labs Fleece Jacket');
        cy.get("img[alt='Sauce Labs Fleece Jacket']").should('be.visible');
        cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();*/
   
        cy.get(".shopping_cart_link").click()

        //cy.url().should('eq','https://www.saucedemo.com/cart.html');

    })

    it('View cart', ()=> {
        
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user').should('have.value','standard_user');
        cy.get('#password').type('secret_sauce').should('have.value','secret_sauce');
        cy.get('#login-button').click();
        cy.get(".shopping_cart_link").click()
   
            //cy.url().should('eq','https://www.saucedemo.com/cart.html');
    })

})