/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('filtering', () => {
    const todoPage = new TodoPage()

    beforeEach( () => {
        todoPage.navigate()
        todoPage.addTodo("Clean room")
        todoPage.addTodo("Learn JavaScript")
        todoPage.addTodo("Learn Cypress")
        todoPage.addTodo("Learn AWS")
        todoPage.addTodo("Learn Ansible")

        todoPage.toggleTodo(1)
    })

    it('should filter "Active" todos', () => {
        todoPage.showOnlyActiveTodos()
        todoPage.validateNumberOfTodosShown(4)
    })

    it('should filter "Completed" todos', () => {
        todoPage.showOnlyCompletedTodos()
        todoPage.validateNumberOfTodosShown(1)
    })

    it('should filter "All" todos', () => {
        todoPage.showAllTodos()
        todoPage.validateNumberOfTodosShown(5)
    })
})