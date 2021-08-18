import React, { useCallback, useEffect } from 'react'
// import { v4 as uuid } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import MainSection from './components/MainSection'
import FooterSection from './components/FooterSection'
import { ITodo } from './types/interfaces'
import { createTodo, fetchTodos } from './redux/actions/todoActions'
import './index.css'
import { logOutUser } from './redux/actions/userActions'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const { active, completed } = useSelector(
    (state: { todos }) => state.todos.counters,
  )
  const loading = useSelector(
    (state: { loading }) => state.loading.loading,
  )
  const user = useSelector((state: { user }) => state.user.user)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const addTodo = useCallback(
    (text) => {
      const task = text.trim()
      if (!task) {
        return
      }

      const newTodo: ITodo = {
        title: task,
        completed: false,
      }

      dispatch(createTodo(newTodo))
    },
    [dispatch],
  )

  const handlerAddTodo = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        addTodo(event.target.value)
        event.target.value = ''
      }
    },
    [addTodo],
  )

  const hanglerLogOut = useCallback(() => {
    dispatch(logOutUser())
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }, [dispatch])

  return (
    <>
      <div className="user-info">
        <span>{user.login}</span>
        <span>{user.email}</span>
        <button
          type="button"
          className="button-logout"
          onClick={hanglerLogOut}
        >
          Log out
        </button>
      </div>
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
        {(active > 0 || completed > 0) && (
          <>
            <MainSection />
            <FooterSection />
          </>
        )}
        {loading === true && (
          <div className="todo-item loader">
            <span>Loading todos...</span>
          </div>
        )}
      </section>
    </>
  )
}

export default App
