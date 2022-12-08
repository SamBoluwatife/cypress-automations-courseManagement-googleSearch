import ChristmasDay from "/Users/boluwatife/Downloads/CypressFramework-main/cypress/pageObjects/ChristmasDay.js"

const christmasDay = new ChristmasDay() 

describe('Christmas Day',()=> {

    it('verify that 25 December is visible as christmas day', ()=> {

        cy.visit('https://www.google.com');  
        
        christmasDay.getSearchField().clear().type('christmas day {enter}');   
        
        christmasDay.getChristmasDate().should("be.visible")
        .and("contain.text","25 December")
    })

})
