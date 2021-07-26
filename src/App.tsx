import React, { useCallback, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import MainSection from './components/MainSection'
import FooterSection from './components/FooterSection'
import { ITodo } from './types/interfaces'
import { createTodo, fetchTodos } from './redux/actions/todoActions'
import './index.css'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state: any) => state.todos.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  })

  const addTodo = useCallback(
    (text) => {
      const task = text.trim()
      if (!task) {
        return
      }

      const key: string = uuid()

      const newTodo: ITodo = {
        title: task,
        completed: false,
        key
      }

      dispatch(createTodo(newTodo))
    },
    [dispatch]
  )

  const handlerAddTodo = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        addTodo(event.target.value)
        event.target.value = ''
      }
    },
    [addTodo]
  )

  return (
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
      {todos.length > 0 && (
        <>
          <MainSection />
          <FooterSection />
        </>
      )}
    </section>
  )
}

export default App
