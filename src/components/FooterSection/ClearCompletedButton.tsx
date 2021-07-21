import React from 'react'

interface IClearCompleted {
  clearCompleted: () => void
}

const ClearCompletedButton: React.FC<IClearCompleted> = ({
  clearCompleted
}) => (
  <button
    className="clear-completed"
    type="button"
    onClick={clearCompleted}
  >
    Clear completed
  </button>
)

export default ClearCompletedButton
