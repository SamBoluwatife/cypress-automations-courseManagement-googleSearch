describe('Learning Automation Test', () => {
   
  it('Working on assertions - implicit assertions', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    //assertions 'should & and'

  cy.url().should('include', 'orangehrmlive.com')
  .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
  .should('contain','orangehrm')
  
  //cy.url().should('include', 'orangehrmlive.com')
  //.and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
  //.and('not.contain','yellowhrm')
 
  cy.title().should('include','Orange')
  .and('eq','OrangeHRM')
  .and('contain','HRM')

  cy.get('.orangehrm-login-branding > img').should('be.visible')
  //cy.get('.orangehrm-login-branding > img').should('exist')

//number of links cy.xpath("//a").should('have.length','5') 

cy.get("input[placeholder='Username']").type('Admin') // input value
cy.get("input[placeholder='Username']").should('have.value','Admin') //value checker

  })
  

  //it('Verify title', () => {
    //steps
    //cy.visit('https://opensource-demo.orangehrmlive.com')
    //cy.title().should('eq','OrangeHRM123')
  //})


//})
//describe('XPathLocators', () => {
   
    //it('find number of products', () => {
      //steps
      //cy.visit('https://magento.softwaretestingboard.com/')
   // })

   it('Working on assertions - explicit assertions', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get('.oxd-button').click()

    //user defined JavaScript
let expName="Alex Colder";

cy.get(".oxd-userdropdown-name").then(   (x)=>{

    let actName=x.text()

    //BDD
    expect(actName).to.equal(expName)
   //expect(actName).to.not.equal(expName) negative

    //TDD
  assert.equal(actName,expName)
  //assert.notEqual(actName,expName) negative



})


  })



})