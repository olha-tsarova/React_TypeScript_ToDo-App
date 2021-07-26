import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { clearCompletedTodos } from '../../redux/actions/todoActions'

const ClearCompletedButton: React.FC = () => {
  const dispatch = useDispatch()
  const handlerClearCompleted = useCallback(() => {
    dispatch(clearCompletedTodos())
  }, [dispatch])

  return (
    <button
      className="clear-completed"
      type="button"
      onClick={handlerClearCompleted}
    >
      Clear completed
    </button>
  )
}

export default ClearCompletedButton
