import React from 'react'

const ClearCompletedButton = ({ clearCompleted }) => (
  <button
    className="clear-completed"
    type="button"
    onClick={clearCompleted}
  >
    Clear completed
  </button>
)

export default ClearCompletedButton
