/// <reference types="cypress" />

it("should be able to add new element to the list", () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo', {timeout: 6000}).type('Learn Cypress {enter}')
    cy.get("label").should("have.text", "Learn Cypress")
    cy.get('.toggle').should('not.be.checked')
    cy.get('.toggle').click()
    cy.get("label").should("have.css", "")
    cy.get("label").should("have.css", "text-decoration", "line-through")
})