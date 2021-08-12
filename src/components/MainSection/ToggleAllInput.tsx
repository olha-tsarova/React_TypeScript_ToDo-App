import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAllTodos } from '../../redux/actions/todoActions'

const ToggleAllInput: React.FC = () => {
  const [isChecked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const todos = useSelector((state: { todos }) => state.todos.todos)
  const { completed } = useSelector((state: { todos }) => state.todos.counters)

  const handlerToggleAll = useCallback(() => {
    dispatch(toggleAllTodos(!isChecked))
  }, [dispatch, isChecked])

  useEffect(() => {
    if (
      completed === todos.length
    ) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [todos, completed])

  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isChecked}
        onChange={handlerToggleAll}
      />
      <label htmlFor="toggle-all" />
    </>
  )
}

export default ToggleAllInput
