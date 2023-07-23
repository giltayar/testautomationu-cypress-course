/// <reference types="Cypress" />


describe("filtering todo list", () => { 
    beforeEach(() => { 
        cy.visit('https://todomvc-app-for-testing.surge.sh/')

        cy.get('.new-todo',).type('Cypress {enter}')
        cy.get('.new-todo').type('Java {enter}')
        cy.get('.new-todo').type('Python {enter}')

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

     it('should filter All', () => {
       cy.contains('All').click()
       cy.get('.todo-list li').should('have.length', 3)
     })

    it("should filter todos", () => { 
        cy.contains("Active").click()
        cy.get(".todo-list li").should("have.length", 2)
    })

 it('should filter Completed', () => {
   cy.contains('Completed').click()
   cy.get('.todo-list li').should('have.length', 1)
 })

})