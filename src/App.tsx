/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line object-curly-newline
import React, { useCallback, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import MainSection from './components/MainSection'
import FooterSection from './components/FooterSection'
import Context from './utils/context'
import { getTodosFromServer, queryToServer } from './api/api'
import { filters, endpoints, fetchMethods } from './utils/constants'
import { ITodo } from './utils/interfaces'

interface IApp {

}

const App:React.FC<IApp> = () => {
  const [todoItems, setTodos] = useState<ITodo[] | []>([])
  const [todoToRender, setTodosToRender] = useState<ITodo[]>(todoItems)
  const [activeFilter, setFilter] = useState<string>(filters.all)

  useEffect(() => {
    getTodosFromServer(endpoints.GET_TODOS_URL)
      .then((response) => {
        if (response) {
          setTodos(response)
        } else {
          console.error('Sorry, something went wrong')
        }
      })
  }, [])

  useEffect(() => {
    if (activeFilter === filters.active) {
      setTodosToRender(todoItems.filter((todo: ITodo) => !todo.completed))
    }

    if (activeFilter === filters.completed) {
      setTodosToRender(todoItems.filter((todo: ITodo) => todo.completed))
    }

    if (activeFilter === filters.all) {
      setTodosToRender(todoItems)
    }
  }, [activeFilter, todoItems])

  const addTodo = useCallback((text) => {
    const task = text.trim()
    if (!task) {
      return
    }

    const newKey: string = uuid()

    const newTodo: ITodo = {
      title: task,
      completed: false,
      key: newKey
    }

    queryToServer(endpoints.ADD_TODO_URL, fetchMethods.M_POST, newTodo)
      .then((res) => {
        if (res) {
          setTodos([
            ...todoItems,
            newTodo
          ])
        } else {
          console.error('Sorry, something went wrong')
        }
      })
  }, [todoItems])

  const removeTodo = (todoId: string) => {
    queryToServer(endpoints.DELETE_TODOS_URL, fetchMethods.M_DELETE, todoId)
      .then((res) => {
        if (res) {
          setTodos((state) => state.filter((todo: ITodo) => todo.key !== todoId))
        } else {
          console.error('Sorry, something went wrong')
        }
      })
  }

  const changeStatus = useCallback((todoKey) => {
    const todoForChange = todoItems.find((todo: ITodo) => todo.key === todoKey)
    const changedTodos: ITodo[] = todoItems.map((todo: ITodo) => {
      if (todo.key === todoKey) {
        todo.completed = !todo.completed
      }
      return todo
    })

    queryToServer(endpoints.EDIT_TODO_URL, fetchMethods.M_PATCH, todoForChange)
      .then((res) => {
        if (res) {
          setTodos(changedTodos)
        } else {
          console.error('Sorry, something went wrong')
        }
      })
  }, [todoItems])

  const clearCompleted = useCallback(() => {
    const completedTodos = todoItems.filter((todo: ITodo) => todo.completed)
    const completedTodosKeys: Array<string> = []
    completedTodos.forEach((todo: ITodo) => completedTodosKeys.push(todo.key))

    queryToServer(endpoints.DELETE_TODOS_URL, fetchMethods.M_DELETE, completedTodosKeys)
      .then((res) => {
        if (res) {
          setTodos((state) => state.filter((todo: ITodo) => !todo.completed))
        } else {
          console.error('Sorry, something went wrong')
        }
      })
  }, [todoItems])

  const toggleAll = useCallback((status) => {
    interface TodosData {
      keys: Array<string>,
      data: {completed: boolean}
    }
    const todosData: TodosData = {
      keys: [], data: { completed: status }
    }

    todoItems.forEach((todo: ITodo) => {
      todosData.keys.push(todo.key)
    })

    queryToServer(endpoints.CHANGE_STATUSES_URL, fetchMethods.M_PATCH, todosData)
      .then((res) => {
        if (res) {
          setTodos(todoItems.map((todo: ITodo) => ({ ...todo, completed: status })))
        } else {
          console.error('Sorry, something went wrong')
        }
      })
  }, [todoItems])

  const handlerAddTodo = useCallback((event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      addTodo(event.target.value)
      event.target.value = ''
    }
  }, [addTodo])

  return (
    <Context.Provider value={{ toggleAll }}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form>
            <input
              className="new-todo"
              type="text"
              placeholder="What needs to be done?"
              autoFocus
              onKeyPress={handlerAddTodo}
            />
          </form>
        </header>
        {todoItems.length > 0
        && (
          <>
            <MainSection
              todos={todoToRender}
              allTodos={todoItems}
              changeStatus={changeStatus}
              removeTodo={removeTodo}
            />
            <FooterSection
              todos={todoItems}
              activeFilter={activeFilter}
              setFilter={setFilter}
              clearCompleted={clearCompleted}
            />
          </>
        )}
      </section>
    </Context.Provider>
  )
}

export default App
