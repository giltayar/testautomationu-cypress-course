/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page'

describe('visual validation', () => {
  before(() =>  cy.visit('http://todomvc-app-for-testing.surge.sh/?different-title-color'))

  beforeEach(() =>
    cy.eyesOpen({
      appName: 'TAU TodoMVC',
      batchName: 'TAU TodoMVC',
      browser: [
        {name: 'chrome', width: 1024, height: 768},
        {name: 'chrome', width: 800, height: 600},
        {name: 'firefox', width: 1024, height: 768},
        {deviceName: 'iPhone X'},
      ]
    })
  )

  afterEach(() => cy.eyesClose())

  it('should look good', () => {
    cy.eyesCheckWindow('empty todo list')

    todoPage.addTodo('Clean room')
    todoPage.addTodo('Learn javascript')

    cy.eyesCheckWindow('two todos')

    todoPage.toggleTodo(0)

    cy.eyesCheckWindow('mark as completed')
  })
})
