describe ('Appointment booking app', ()=>{


    it('Failed Login', ()=> {

        cy.visit('https://katalon-demo-cura.herokuapp.com/')

            cy.get("div[class='text-vertical-center'] h1").contains('CURA Healthcare Service')

            cy.get('#btn-make-appointment').click();

            cy.get(".lead").contains('login to make appointment')

            cy.get("#txt-username").click().type('John Donut').should('have.value','John Donut');

            cy.get("#txt-password").click().type('ThisIsAPassword').should('have.value','ThisIsAPassword');

            cy.get("#btn-login").click()

            cy.get('.lead.text-danger').contains('Login failed')

    })
    it('Successful Login', ()=> {

        cy.get("#txt-username").click().type('John Doe').should('have.value','John Doe');

        cy.get("#txt-password").click().type('ThisIsNotAPassword').should('have.value','ThisIsNotAPassword');

        cy.get("#btn-login").click()

    })

    it('To ensure that users cannot book appointments without picking date', ()=> {

        cy.url().should('contains','#appointment');

        cy.get("#combo_facility")
        .should('be.visible');

        cy.get('#chk_hospotal_readmission')
        .should('be.visible')
        .check()
        .should('be.checked');

        cy.get('#radio_program_medicaid')
        .should('be.visible')
        .check();

        cy.get("#txt_comment").type('Full body check-up')

        cy.get("#btn-book-appointment").click()

        //assertion
        cy.on('window:alert',(t)=> {
            expect(t).to.contains('Please fill in this field')
        }) 
    })

    it('Make Appointment', ()=> {

        cy.get("#combo_facility")
        .should('be.visible');

        cy.get('#chk_hospotal_readmission')
        .should('be.visible')
        .check()
        .should('be.checked');

        cy.get('#radio_program_medicaid')
        .should('be.visible')
        .check();

        cy.get('#txt_visit_date').click()
        cy.get('tbody > :nth-child(2) > :nth-child(7)').click()

        cy.get("#btn-book-appointment").click()

        //assertions
        cy.url().should('eq','https://katalon-demo-cura.herokuapp.com/appointment.php#summary')

        cy.get("div[class='col-xs-12 text-center'] h2").should('have.text','Appointment Confirmation');
        
        cy.get("#facility").should('have.text','Tokyo CURA Healthcare Center');
        
        cy.get("#program").should('have.text','Medicaid');

        cy.get('#comment').should('have.text','Full body check-up')

        cy.get("#menu-toggle").click();
        cy.get(':nth-child(4) > a').click();

        cy.get(".lead").contains('login to make appointment')

    })

})