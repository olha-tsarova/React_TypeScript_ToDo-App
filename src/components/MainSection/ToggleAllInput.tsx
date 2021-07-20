import React, {
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import Context from '../../utils/context'
import { ITodo } from '../../types/interfaces'

interface IToggleAllInput {
  allTodos: ITodo[]
}

const ToggleAllInput: React.FC<IToggleAllInput> = ({ allTodos }) => {
  const [isChecked, setChecked] = useState(true)
  const { toggleAll } = useContext(Context)

  useEffect(() => {
    setChecked(
      allTodos.filter((todo: ITodo) => !todo.completed).length === 0
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
