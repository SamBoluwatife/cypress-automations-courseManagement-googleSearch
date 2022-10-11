/// <reference types= "cypress" />

/// <reference types= "cypress" />

describe("Quales Course Management Regression API Test suite", () => {

  let courseId = "";
  const path = "/api/courses/";
 
  it("Creates a Course", () => {
    cy.request({
      method: "POST",
      url: "/" + path,
      body: {
        title: "Course Automation 5" + randomChar(4),
        categoryId: 2,
        description: "The Advanced Cypress course",
        courseUrl: "https://www.youtube.com/watch?v=8vXoMqWgbQQ",
        imageUrl: "https://source.unsplash.com/user/c_v_r/900x800",
        location: "online",
        isPremium: false,
      },
    }).as("createACourseRequest");
    cy.get("@createACourseRequest").then((res) => {
      const responseBody = res.body;
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(200);
      courseId = res.body.id;
      cy.log(JSON.stringify(courseId));
      expect(responseBody).to.have.property("id");
      expect(responseBody).to.have.property("title");
    });
  });

  it("Gets a  Course", () => {
    cy.request({
      method: "GET",
      url: "/" + path + courseId,
    }).as("searchACourseRequest");
    cy.get("@searchACourseRequest").then((res) => {
      const responseBody = res.body;
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(200);
      expect(responseBody).to.have.property("id");
      expect(responseBody).to.have.property("title");
    });
  });

  it("Deletes a created course", () => {
    cy.request({
      method: "DELETE",
      url: "/" + path + courseId,
    }).as("deleteACourseRequest");
    cy.get("@deleteACourseRequest").then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(204);
    });
  });

  it("Gets All Courses", () => {
    cy.request({
      method: "GET",
      url: "/" + path,
    }).as("searchAllCoursesRequest");
    cy.get("@searchAllCoursesRequest").then((res) => {
      const responseBody = res.body;
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(200);
      expect(responseBody.data[0]).to.have.property("id");
      expect(responseBody.data[0]).to.have.property("title");
    });
  });
});

