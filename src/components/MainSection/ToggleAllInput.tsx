import React, {
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import Context from '../../utils/context'
import { Todo } from '../../utils/interfaces'

const ToggleAllInput = ({ allTodos }) => {
  const [isChecked, setChecked] = useState<boolean>(true)
  const { toggleAll } = useContext(Context)

  useEffect(() => {
    setChecked(
      allTodos.filter((todo: Todo) => !todo.completed).length === 0
    )
  }, [allTodos])

  const handlerToggleAll = useCallback(() => {
    toggleAll(!isChecked)
  }, [isChecked, toggleAll])

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
