/// <reference types= "cypress" />

describe("Quales Learning Platform API Test",  () => {


    it("Get All Courses",  () => {
   
   cy.request({
    method: "GET", 
    url: "https://notification-service.ishchoolapi.xyz/api/courses",
   }).as("searchAllArticleRequests");
cy.get("@searchAllArticleRequests").then((res) => {

    cy.log(JSON.stringify(res.body))
});


   })
   
    });