/// <reference types="cypress" />

describe("todo actions", () => {

    beforeEach(() => { 
            cy.visit('https://todomvc-app-for-testing.surge.sh/')
            cy.get('.new-todo', {timeout: 6000}).type('Learn Cypress {enter}')
    })
  it('should be able to add new element to the list', () => {
    cy.get('label').should('have.text', 'Learn Cypress')
    cy.get('.toggle').should('not.be.checked')
  })

    it('should complete the task with line through the content', () => {
    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration', 'line-through solid rgb(217, 217, 217)')
  })

    it('should clear the list', () => {
       cy.get('.toggle').click()
    cy.get('.clear-completed').click()
    cy.get('.todo-list').should('not.have.descendants', 'li')
  })
})