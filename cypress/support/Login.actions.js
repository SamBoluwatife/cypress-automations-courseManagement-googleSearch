// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })


import LandingPage from "../pageObjects/LandingPage";
import TestData from "../testData/TestData";

const landingPage = new LandingPage;
const credentials = new TestData;


Cypress.Commands.add('Login', () => {

  //Enter username
  landingPage.getUsername().type(credentials.Username())

  //Enter password
  landingPage.getPassword().type(credentials.Password())


  //Click login
  landingPage.getLogin().click()

})


//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... 
