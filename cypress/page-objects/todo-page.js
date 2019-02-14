/// <reference types="cypress" />

export class TodoPage {
  navigate() {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
  }

  addTodo(todoText) {
    cy.get('.new-todo').type(todoText + '{enter}')
  }

  toggleTodo(todoIndex) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
  }

  showOnlyCompletedTodos() {
    cy.contains('Completed').click()
  }

  showOnlyActiveTodos() {
    cy.contains('Active').click()
  }

  showAllTodos() {
    cy.contains('All').click()
  }

  clearCompleted() {
    cy.contains('Clear completed').click()
  }

  validateNumberOfTodosShown(expectedNumberOfTodos) {
    cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
  }

  validateTodoCompletedState(todoIndex, shouldBeCompleted) {
    const l = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)

    l.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
  }

  validateTodoText(todoIndex, expectedText) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
  }

  validateToggleState(todoIndex, shouldBeToggled) {
    const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)

    label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
  }
}
