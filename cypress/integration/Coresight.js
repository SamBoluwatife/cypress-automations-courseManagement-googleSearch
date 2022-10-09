/// <reference types= "cypress" />

describe("Quales Learning Platform",  () => {
  //test 1
  it("Validate that the user can visit the Coresight Research Portal successfully",  () => {
 
    
    //visiting the Portal url
 cy.visit("http://stage.research.coresight.com/");

//validate that all the menu items are visible
cy.get(':nth-child(1) > .nav-link').should("be.visible")
cy.get(':nth-child(2) > .nav-link').should("be.visible")
cy.get(':nth-child(3) > .nav-link').should("be.visible")
cy.get(':nth-child(4) > .nav-link').should("be.visible")
cy.get(':nth-child(5) > .nav-link').should("be.visible")
cy.contains('Sign In').should("be.visible")
});

//test 2 
it("Validate that the user with valid login details can sign in to the Coresight Research Portal successfully",  () => {
 
    
    //visiting the Portal url
 cy.visit("http://stage.research.coresight.com/");

//sign in
cy.get('.login > .nav-link').click()
cy.get('#email').type("popoolaboluwatife@coresight.com")
cy.get('#pwd').type("thedawnishere@21")
cy.get('#sign_in_form > .btn').click();


})

//test 3
it("Validate that the user with invalid login details cannot sign in to the Coresight Research Portal successfully",  () => {
 
    
    //visiting the Portal url
 cy.visit("http://stage.research.coresight.com/");

//sign in 
cy.get('.login > .nav-link').click()
cy.get('#email').type("popoolaboluwatife@centricity.com")
cy.get('#pwd').type("thedawnishere@21")
cy.get('#sign_in_form > .btn').click();
cy.contains('username or password is incorrect').should("be.visible")

})

//test 4
it("Validate that the user view the dashboard on the Coresight Research Portal successfully",  () => {
   
    //visiting the Portal url
 cy.visit("http://stage.research.coresight.com/");

//sign in
cy.get('.login > .nav-link').click()
cy.get('#email').type("popoolaboluwatife@coresight.com")
cy.get('#pwd').type("thedawnishere@21")
cy.get('#sign_in_form > .btn').click();

//click dashboard
cy.get('[href="/users/account"]').click()



})

});
