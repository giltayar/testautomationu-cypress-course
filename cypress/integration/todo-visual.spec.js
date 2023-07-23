/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page'

describe('visual validation', () => {
  before(() => todoPage.navigate())

  beforeEach(() =>
    cy.eyesOpen({
      appName: 'TUA  TodoMVC',
      batchName: 'TAU TodoMVC Hey! Khadar did it',
      
    }),
  )
  afterEach(() => cy.eyesClose())

  it('should look good', () => {
    // Adding first screen shot check
    cy.eyesCheckWindow('empty todo list')

    todoPage.addTodo('Cypress')
    todoPage.addTodo('JavaScript')

    // second screen shot check
    cy.eyesCheckWindow('Two todos')

    todoPage.toggleTodo(0)

    // third screen shot check
    cy.eyesCheckWindow('Mark as Completed')
  })
})
