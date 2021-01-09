// https://docs.cypress.io/api/introduction/api.html

describe("Example test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Authenticate");
  });
});
