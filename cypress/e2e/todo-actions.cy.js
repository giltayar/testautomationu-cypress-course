/// <reference types="cypress" />
import {
  navigate,
  addTodo,
  validateTodoText,
  toggleTodo,
  clearCompleted,
  validateTodoCompletedState,
  validateToggleState,
  validateNumberOfTodosShown,
} from '../page-objects/todo-page'

describe('todo actions', () => {
  beforeEach(() => {
    navigate()

    addTodo('Clean room')
  })

  it('should add a new todo to the list', () => {
    validateTodoText(0, 'Clean room')

    validateToggleState(0, false)
  })

  describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      toggleTodo(0)
      validateTodoCompletedState(0, true)
    })

    it('should clear completed', () => {
      toggleTodo(0)

      clearCompleted()

      validateNumberOfTodosShown(0)
    })
  })
})
