import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import { buttons } from '../../utils/constants'
import { IFilter } from '../../utils/interfaces'

interface IFilterButtons {
  activeFilter: string,
  setFilter: (text: string) => void
}

const FilterButtons: React.FC<IFilterButtons> = ({ activeFilter, setFilter }) => {
  const [filterButtons, setFilterButtons] = useState<IFilter[]>([])

  useEffect(() => {
    return setFilterButtons(buttons)
  }, [])

  const handlerSetFilter = useCallback((event) => {
    setFilter(event.target.textContent)
  }, [setFilter])

  return (
    <ul className='filters'>
      {filterButtons.map((filterButton) => (
        <li key={filterButton.key}>
          <button
            type='button'
            className={classNames({
              selected: activeFilter === filterButton.key
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
