/// <reference types= "cypress" />

describe("Quales Learning Platform",  () => {
  //test 1
  it("Validate that the user can visit the Quales Learning Platform successfully",  () => {
 
    
    //visiting the Quales url
 cy.visit("http://tawdry-rule.surge.sh/");

 //cofirming that these elements are visible 
 cy.contains("Training").should("be.visible");

 cy.contains("Courses").should("be.visible");

 cy.contains("Contact Us").should("be.visible");

});

//test 2
 it("Validate that the user can sign in successfully on the Quales Learning Platform",  () => {
 
  //visiting the Quales url
cy.visit("http://tawdry-rule.surge.sh/");

 //click the login button
 cy.get('.css-48p1y4 > .MuiButton-root').click();

//type email in the email field
cy.get('[data-testid=EmailAddress]').type("ay@mail.com");

//type password in the password field
cy.get('[data-testid=Password]').type("pass1234");

//click the login button
cy.get('.MuiButton-contained').click();

//confirming that Ayobami is visible on the page
cy.contains("Ayobami").should("be.visible");

});


//test 3
it("Validate that the user can update course successfully on the Quales Learning Platform",  () => {

//open course
cy.get(':nth-child(2) > .MuiCardMedia-root').click();

//click the edit button
cy.get('.css-klop1v').click();

//select a Quality Assurance from dropdown
cy.get('#demo-simple-select').click();
cy.get('[data-value="1"]').click();

//Update Course
cy.get('.css-tzsjye > .MuiButton-root').click();



  });

  //test 4
  it("Validate that the user cannot sign in successfully on the Quales Learning Platform with invalid credetial",  () => {
 
    //visiting the Quales url
  cy.visit("http://tawdry-rule.surge.sh/");
  

   //click the login button
   cy.get('.css-48p1y4 > .MuiButton-root').click();
  
  //type email in the email field
  cy.get('[data-testid=EmailAddress]').type("ay@mail.com");
  
  //type password in the password field
  cy.get('[data-testid=Password]').type("pass4234");
  
  //click the login button
  cy.get('.MuiButton-contained').click();
  
  //confirming that invalid credential is displayed 
  cy.contains("Invalid Login Credential").should("be.visible");
  
  });
  
//test 5
  it("Validate that the user can create a course successfully on the Quales Learning Platform with invalid credetial",  () => {
 
    //visiting the Quales url
  cy.visit("http://tawdry-rule.surge.sh/");
  
  cy.viewport(1536, 960);
   
  //click the login button
   cy.get('.css-48p1y4 > .MuiButton-root').click();
  
  //type email in the email field
  cy.get('[data-testid=EmailAddress]').type("ay@mail.com");
  
  //type password in the password field
  cy.get('[data-testid=Password]').type("pass1234");
  
  //click the login button
  cy.get('.MuiButton-contained').click();
  
  //click add course button
  cy.get('.MuiGrid-root > .MuiButton-root').click();

//course title
cy.get('[data-testid="Title*"]').type("Cypress 529");

//description
cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root').type("AdvancedCypress");

  //select quality assurance
  cy.get('#demo-simple-select').click();
  cy.get('[data-value="1"]').click();

//image url
  cy.get('[data-testid=ImageURL]').type("https://unsplash.com/photos/FlPc9_VocJ4");
  
  //select offline course
  cy.get('[data-testid=offline]').click();

//address
  cy.get('[data-testid="Address*"]').type("file/downloads/cypress");

//create course
cy.get('.css-tzsjye > .MuiButton-root').click();



  });

//test 6
it("Validate that the user can delete a course successfully on the Quales Learning Platform with invalid credetial",  () => {
 
  //visiting the Quales url
  cy.visit("http://tawdry-rule.surge.sh/");
  
  cy.viewport(1536, 960);

   //click the login button
   cy.get('.css-48p1y4 > .MuiButton-root').click();
  
  //type email in the email field
  cy.get('[data-testid=EmailAddress]').type("ay@mail.com");
  
  //type password in the password field
  cy.get('[data-testid=Password]').type("pass1234");
  
  //click the login button
  cy.get('.MuiButton-contained').click();
 
//open course
cy.get(':nth-child(2) > .MuiCardMedia-root').click();
 
//delete course
cy.get('.css-wvpqgg').click();

cy.get('.MuiBox-root > .MuiButton-contained').click();

//confirmation toast that the course was deleted successfully
cy.contains('Course deleted successfully');

});

});

