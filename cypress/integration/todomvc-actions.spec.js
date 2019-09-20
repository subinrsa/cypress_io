/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('Todo actions', () => {
    const todoPage = new TodoPage()

    beforeEach( () => {
    todoPage.navigate()

    todoPage.addTodo('Clean room')    
    })

    it('should add a new todo to the list', () => {
        todoPage.validateItem(0, 'Clean room')
        //cy.get('.todo-list').should('have.descendants', 'li')
        todoPage.validateNumberOfTodosShown(1)
        // cy.get('.toggle').should('not.be.checked');
        todoPage.validateToggleState(0, false)
    })

    it('should mark a todo as completed', () => {
        todoPage.toggleTodo(0)
        todoPage.validateTodoCompletedState(0, true)
    })

    it('should clear completed todos', () => {
        todoPage.toggleTodo(0)
        todoPage.clearCompleted()
        todoPage.validateNumberOfTodosShown(0)
    })
})
