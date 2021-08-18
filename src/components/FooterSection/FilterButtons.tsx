import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { buttons } from '../../constants'
import { IFilter } from '../../types/interfaces'
import { setFilter } from '../../redux/actions/filterActions'

const FilterButtons: React.FC = () => {
  const [filterButtons, setFilterButtons] = useState<IFilter[]>([])
  const dispatch = useDispatch()
  const filter = useSelector((state: { filter }) => state.filter.filter)

  useEffect(() => setFilterButtons(buttons), [])

  const handlerSetFilter = useCallback(
    (event) => {
      dispatch(setFilter(event.target.name))
    },
    [dispatch],
  )

  return (
    <ul className="filters">
      {filterButtons.map((filterButton) => (
        <li key={filterButton.key}>
          <button
            type="button"
            name={filterButton.title}
            className={classNames({
              selected: filter === filterButton.key,
            })}
            onClick={handlerSetFilter}
          >
            {filterButton.title}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default FilterButtons
