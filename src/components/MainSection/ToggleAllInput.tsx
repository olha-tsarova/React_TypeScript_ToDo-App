/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAllTodos } from '../../redux/actions/todoActions'

const ToggleAllInput: React.FC = () => {
  const [isChecked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const todos = useSelector((state: any) => state.todos.todos)

  const handlerToggleAll = useCallback(() => {
    dispatch(toggleAllTodos(!isChecked))
  }, [dispatch, isChecked])

  useEffect(() => {
    if (
      todos.filter((todo) => todo.completed).length === todos.length
    ) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [todos])

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
