/// <reference types="cypress" />
import {TodoPage} from '../page-objects/todo-page'

describe('filtering', function() {
  const todoPage = new TodoPage()

  beforeEach(() => {
    todoPage.navigate()

    todoPage.addTodo('Clean room')
    todoPage.addTodo('Learn JavaScript')
    todoPage.addTodo('Use Cypress')

    todoPage.toggleTodo(1)
  })

  it('should filter "Active" correctly', () => {
    todoPage.showOnlyActiveTodos()

    todoPage.validateNumberOfTodosShown(2)
  })

  it('should filter "Completed" correctly', () => {
    todoPage.showOnlyCompletedTodos()

    todoPage.validateNumberOfTodosShown(1)
  })

  it('should filter "All" correctly', () => {
    todoPage.showAllTodos()

    todoPage.validateNumberOfTodosShown(3)
  })
})
